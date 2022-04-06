---
title: Deploying To Azure Cheaply
date: "2022-04-04T01:10:03.284Z"
description: Deploying to Azure Static sites and hosting sites cheaply
---

## Talk Adaptation

This talk was adapted from a talk I gave at the Iowa Microsoft Azure User Group. If you'd rather follow along to the video you can find that [here.](https://www.youtube.com/watch?v=zhdqexF9li0)

### Pricing?

Microsoft breaks down azure static sites a few different places that would make you ask "what does this actually cost me". The short answer is almost or actually nothing. You might ask "how is that the case"? Well you break down into 2 categories "free" or "standard". There are a few key points we want to look at. Free says the price is free vrs standards (typically) 10$/month/app. The next one is included bandwidth and overage both have 100 GB included per subscription but only standard has overage. That means if your bandwidth is over 100 GB you free site will be shut off, while standard you can pay per gig over. Getting that much bandwidth would be hard unless you are a big org sharing the same subscription across many apps. The next difference is functions you can't bring your own on free that means you have to use languages that exist [here](https://docs.microsoft.com/en-us/azure/static-web-apps/apis). Finally, the last thing would be auth providers. Out of the box free sites only support three Azure AD, Github and (drum roll please) Twitter? Yes, Twitter. So if you are using something like auth 0 you may need to pay for your statics sites. I have see MSAL (Microsoft Authentication Library) work pretty great with it! More info on security [here](https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations). The final cost you need to look at for either solution is blob storage. Your site will be stored there and you will be paying for that. However, in free tier site I haven't seen blob storage come across on my bill for this site. So I'd say an \* by blob storage.

### Intro Over Lets Get Deploying

The high level is this static site will be able to host any JS application. That includes Angular, React, Gatsby, and more. For this tutorial lets assume you are taking angular-tour-of-heros starting app and deploying it. If you are deploying something else tweak your file name and build output location. Otherwise, it should be a similar process. If you'd like a reference to anything mentioned here this [link](https://github.com/Alec13355/IMAUG_Static_Site_Demo) to the Github repo. I am also making the assumption you have setup a connection from [Github to Azure.](https://github.com/marketplace/actions/azure-login#configure-a-service-principal-with-a-secret)

#### Starting with the Bicep File

You might ask what is Bicep? According to Microsoft [Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. In a Bicep file, you define the infrastructure you want to deploy to Azure, and then use that file throughout the development lifecycle to repeatedly deploy your infrastructure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep). That file allows you to declare all of your infrastructure as code to deploy it consistently. There's a lot of pros for infrastructure as code here's a wiki article if you want to read more on [that](https://en.wikipedia.org/wiki/Infrastructure_as_code).
Our first step will be to create a file called deploy.bicep. We will go through line by line of what each line of the file is doing.

```javascript
param location string = resourceGroup().location
```

This line tells you where you are deploying your resources. If your resources are available in your region that your resource group is in it's best practice to use the same region. This line is setting a param with a default of your resource group's location.

```javascript
resource staticSite 'Microsoft.Web/staticSites@2020-12-01' = {
  name: 'testSite'
  location: location
  properties: {}
  sku: {
    tier: 'Free'
    name: 'Free'
  }
}
```

This next block is the resource itself. The syntax is resource name type. The following fields are required for name (this is the pretty name that shows up in the Azure portal), location (where/region you want your site on), props nothing is required here, and SKU (the free tier).

```javascript
#disable-next-line outputs-should-not-contain-secrets
output deployment_token string = listSecrets(staticSite.id, staticSite.apiVersion).properties.apiKey
```

This last line is outputting the api key to deploy our app from Github to Azure. The #disable is due to outputting a secret and in Github by default that breaks your pipeline. Below is the full file.

```javascript
param location string = resourceGroup().location

resource staticSite 'Microsoft.Web/staticSites@2020-12-01' = {
  name: 'testSite'
  location: location
  properties: {}
  sku: {
    tier: 'Free'
    name: 'Free'
  }
}

#disable-next-line outputs-should-not-contain-secrets
output deployment_token string = listSecrets(staticSite.id, staticSite.apiVersion).properties.apiKey

```

Next, we need to build the YAML pipeline. You need a file .github/workflows/pipeline.yml.

```yml
name: Node.js CI

on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
```

The first chunk of this file specifies the name of the pipeline. On specifies when the pipeline should run here it's saying on any pushes to main. You can also do it on pull requests too. In this case we only want to deploy when main is updated. Jobs specifies the job, build is the job name, and runs on and steps specifies the image the VM we are running the pipeline on.

```yml
- uses: actions/checkout@v2
```

This gets the code in our repo to use in our pipeline.

```yml
# Log into Azure
- uses: azure/login@v1
    with:
    creds: ${{ secrets.AZURE_CREDENTIALS }}
```

The first uses will use our credentials that we assumed was saved off to log into azure. That should connect Github to Azure.

```yml
- name: Azure CLI script
  uses: azure/CLI@v1
  with:
  inlineScript: |
    az staticwebapp disconnect -n testSite
```

The next step is for continuous deployment. You must disconnect a static site between deployments. This is running a CLI task to disconnect the site named testSite.

```yml
- name: Run Bicep deploy
  id: deploy
  uses: azure/arm-deploy@v1
  with:
    subscriptionId: ${{ secrets.AZURE_SUBSCRIPTION }}
    resourceGroupName: ${{ secrets.AZURE_RG_BICEP }}
    template: ./deploy.bicep
```

The next task is deploying our Bicep file. We need to specify an ID so we can reference it later on in a following step. We also use the arm-deploy step because Bicep file behind the scenes is turned into an ARM format. We use the with word to pass along our subscription and resource group names. Both of those are defined in our Github vars. Template says where the file is saved at. This is the step that you will see changes in your Azure resource group!

```yml
- name: Build And Deploy
  uses: Azure/static-web-apps-deploy@V1
  with:
    azure_static_web_apps_api_token: ${{ steps.deploy.outputs.deployment_token }}
    repo_token: ${{ secrets.GITHUB_TOKEN }}
    action: "upload"
    app_location: "./angular-tour-of-heroes"
    app_artifact_location: "dist/angular-tour-of-heroes"
```

The next app is the static app deployment. This is where your app gets deployed to Azure. This takes the deployment token from our Bicep file and use it to push to Azure. We use repo_token to read from our repo. The action we are using us upload which will do a build which is the app_location in reference to the repo and finally the artifact_location that your build is output to.

```yml
- name: logout
        run: |
          az logout
```

Finally as a best practice we want to logout of Azure to close our connection. Below is the full yml pipeline.

```yml
name: Node.js CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      # Log into Azure
      - uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Azure CLI script
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az staticwebapp disconnect -n testSite

      - name: Run Bicep deploy
        id: deploy
        uses: azure/arm-deploy@v1
        with:
          subscriptionId: ${{ secrets.AZURE_SUBSCRIPTION }}
          resourceGroupName: ${{ secrets.AZURE_RG_BICEP }}
          template: ./deploy.bicep

      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@V1
        with:
          azure_static_web_apps_api_token: ${{ steps.deploy.outputs.deployment_token }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "./angular-tour-of-heroes"
          app_artifact_location: "dist/angular-tour-of-heroes"

      # Azure logout
      - name: logout
        run: |
          az logout
```

Now that both of these files are committed and pushed your Github runner should start deploying your app and you're on your way to deploying apps to Azure!
