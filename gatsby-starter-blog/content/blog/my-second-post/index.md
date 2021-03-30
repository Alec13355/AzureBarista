---
title: Cypress In Azure Using MSAL
date: "2021-03-30T22:10:03.284Z"
description: "Cypress in Azure Part 2"
---


## Problem Statement

In order to continue delivering quality code and reduce human error in manual testing we want to automate high priority manual tests. In addition to this issue we no longer want to use ADAL if you want that guide please go here to see my previous post on [Source Allies' Blog.](https://www.sourceallies.com/2020/02/cypress-in-azure/) If you've already read that post skip down to the ADAL to MSAL difference otherwise this will be an identical walk through. 

## Solution

Our team is using Cypress to automate high priority manual tests in order to reduce human error and provide testing that would be done manually otherwise. By building the test suite in tandem with the QA, we have identified manual tests that are prime targets to automate, also giving us the bonus of free integration tests! This allows us to run integration tests more often, and be less reliant on our QA every time we have to run integration tests. Using Cypress means our QA doesn't have to spend as much time on integration or manual tests, so can spend more time writing future test cases and smoke testing.


## High Level - What We Did and Why

The specific tool we decided on was Cypress, however authenticating with Azure Active Directory is similar with other end to end tools. We chose Cypress over a tool like Protractor due to Cypress being easier to use. The key feature was the UI for the developers to use, auto retry to cutdown on flaky tests, and similar testing structure to Jest (a tool we are using for unit testing in our app).

We broke down Cypress into its simplest parts, which allowed us to bring it in gradually, allowing us to keep deployments running instead of forcing a halt to our build and deploy pipelines.

### 1. We got cypress to run locally

This includes getting a working local dev environment and getting cypress to run against it (for example running against localhost:4200)

This doesn't include working with Azure Active Directory

### 2. Setup our end to end environment

We had to get another resource group for our end to end environment. Because we are using ARM templates this was pretty painless. However, once it was all set-up we had to do special end to end configuration that is unique to our end to end environment.

In the past I mentioned our team was using EasyAuth and Azure Active Directory with role based auth. At the time of writing, EasyAuth only supports Microsoft ADAL, because it only supports AD V1 tokens. The drawback of that is MSAL only creates V2 tokens. As a team we had to decide do we want EasyAuth, or do we want MSAL. The final straw was when Microsoft announced ADAL was being retired and all future plans pointed to MSAL. Once MSAL was promoted past beta we changed and never looked back. If you need help migrating Microsoft has some [solid docs here.](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-migration) The rest of this blog is going to assume you have converted and are running MSAL correctly.

Our approach to auth is a slight holdover from ADAL. We use client credentials as a way to auth to our app registrations. Now that we are using MSAL we could theoretically use something like managed identities to get token and other Microsoft libraries, but our previous approach still works and if it isn't broke why fix it? The reason we need to even think about auth is because Cypress doesn't support going across domains for UI testing, intentionally. However, you don't need to do that if you configure your app registrations correctly.

The configuration step can get very in depth. I'll break it down into bullet points and will assume that you know how role-based auth works. If you don't, read this [Azure documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control) first, then report back. There are two parts to the secret sauce of getting this to work.

First, you need to configure your app registration correctly, found at https://portal.azure.com/ at Azure Active Directory => App registrations => AUTH-(Your app prefix)-e2e
  Go to the app registration's manifest and put something similar to this:

```javascript

"appRoles": [
    {
      "allowedMemberTypes": [
        "Application",
        "User"
      ],
      "description": "This is the role for the admin users",
      "displayName": "WriteAll",
      "id": <Create a custom GUID here>,
      "isEnabled": true,
      "lang": null,
      "origin": "Application",
      "value": "WriteAll"
    }
  ],

```

What this is doing is providing an app-level role for you to access your application. One design decision we made intentionally was to only allow Cypress access to our automated environment. This allows Cypress to get past Azure Active Directory and login, but I don't have permission to do anything in our application. This is done so users can't destroy data between test runs.

We also need to go to Expose an API. This is located on the same screen as the manifest on the side nav above manifest. This is to allow our other app registration to talk to this one. You can use the GUI under Expose an API +Add a scope or do this in the Manifest. Either way when you're done your manifest should look similar to this:

```javascript
"oauth2Permissions": [
    {
      "adminConsentDescription": <Some Desc>,
      "adminConsentDisplayName": <Some Name>,
      "id": <Custom GUID>,
      "isEnabled": true,
      "lang": null,
      "origin": "Application",
      "type": "User",
      "userConsentDescription": <Some Desc>,
      "userConsentDisplayName": <Some Name>,
      "value": "WriteAll.stuff"
    }
  ],
```

After that we need to go our other app registration. Our client's standard is to have two: an APP registration and an AUTH registration. If you need a second one create that. This one should be something like APP-(Your app prefix)-e2e. This is the app reg that Cypress will use to authenticate to Azure Active Directory. Once you have that created and are in that app registration, navigate to API permissions. We can configure this via the GUI or Manifest, but both should produce similar outputs. Hit +Add a permission, then on the modal click on `My APIs`and select your AUTH-(Your app prefix)-e2e, select application permissions, and click the check for WriteAll. \*Notice the Admin Consent Required. You will have to have permission to hit that for this to work. After that your apps can talk to each other, but you need to create credentials to be able to sign-on. Go to Certificates & secrets and create a new secret for your cypress functions. A general guideline on passwords is max one year expiration. Next, make sure you save that somewhere safe since once you navigate away you'll never get that password again. Once you save that you should see the two changes for the API permission and password in you app registration's Manifest.

```javascript
"requiredResourceAccess": [
    {
      "resourceAppId": <GUID>,
      "resourceAccess": [
        {
          "id": <Role's GUID>,
          "type": "Role"
        }
      ]
    },
],
```

and password something similar to this:

```javascript
"passwordCredentials": [
    {
      "customKeyIdentifier": null,
      "endDate": "2020-10-15T18:49:21.622Z",
      "keyId": <GUID>,
      "startDate": "2019-10-15T18:49:35.186Z",
      "value": null,
      "createdOn": "2019-10-15T18:49:35.3875636Z",
      "hint": "Lxh",
      "displayName": <Name you pick>
    }
  ],
```

Once you have both of those we should now be able to authenticate with Cypress. In our commands file we added a shared login() function which is where Cypress gets and sets it's WriteAll token in its environment. It looks something similar to this:

```javascript
const tenantUrl = 'https://login.microsoftonline.com/<Directory (tenant) ID>/oauth2/token';
const clientId = <APP-(Your app prefix)-e2e Application (Client) ID>;
const clientSecret = <Secret from previous step>;
const azureResource = <AUTH-(Your app prefix)-e2e Application (Client) ID>;

declare global {
namespace Cypress {
  interface Chainable {
    login: () => Chainable
  }
}
}

export function login() {
cy.request({
  method: 'POST',
  url: tenantUrl,
  form: true,
  body: {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    resource: azureResource
  }
}).then(response => {
  const MSALToken = response.body.access_token;
  window.localStorage.setItem(
    'msal.<App reg client Id>.idtoken',
    MSALToken
  );

  window.localStorage.setItem('msal.idtoken', MSALToken);
});
}

Cypress.Commands.add('login', login);
```

Then in any cypress beforeEach() you can call `cy.login();` and that will give you a token to allow you to get through auth and have roles as Cypress. This ends configuration of getting an end to end token locally to use for testing.

_Note_ if you want to have other roles you will need a 1-to-1 additional app registration for each of your other roles. Something like app.{}-ReadOnly etc

### 3. We wrote tests against our local environment mocking data where it made sense

We did this for more basic HTML checking for making sure any conditional rendering was working as expected.

### 4. Where we didn't want to mock data or where it would be better to assert against real data (i.e. making api calls to get the data) we devised a plan to tackle that

We decided to create a seeder project to seed data that we would like to assert against. For example, if I edit page A and save it should do thing B. This is checking logic of our Angular type script files and less about the HTML and CSS.

### 5. We ran Cypress in AzureDevOps

There are two approaches to this. The first is that you can have a pre-build step that runs integration steps. That means before any build you can spin up a docker container to run your application and run cypress against it. We decided that the downside to that was we weren't using containers and it could delay builds for PRs that are WIP or in-flux.

The second approach, and the one we went with, is running it as an Azure WebJob task.

The first step of this was zipping up our GUI project and publishing it as a zip. That pretty much concludes the work we did on the build side. Next, we ran the tests on the deployment webJob. We created another agent job that is running on an Ubuntu client. That was done as a suggestion in an online tutorial. This may work on a windows VM, too. However, we didn't test that. Next we needed to create our tasks. We start by using an Extract files task to extract our zipped files, NPM task to do an NPM install, bash task to run npx cypress run, and finally a reporting task. For further help see this [link](https://mariocardinal.wordpress.com/2019/03/05/configuring-cypress-in-ci-with-azure-devops-pipelines). _Note if you use TS you might need to move over more files than the ones listed in this article._

We also have a bash task to find and replace all of our localhost:4200 with our real URL, but we will eventually have that in an environment variable. It's just a quick win to see your tasks run. We are planning on moving the url to a config file and using that instead of a bash script. There is more information on that [here](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).

## Conclusion

Hopefully this helps clear up the uncertainty of running Cypress in Azure and lets you know not only that it is possible, but it works pretty well! Feel free to reach out to me on my [LinkedIn](https://www.linkedin.com/in/alec13355)!