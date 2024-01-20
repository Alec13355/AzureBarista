---
title: Bicep IMAUG Presentation
date: "2021-07-19T22:10:03.284Z"
description: IMAUG Bicep Presentation
---

## What is the future of Microsoft
To kick off my talk after an introduction of myself I lead with an introduction to the planned future of Microsoft development at the moment. That includes Code Repos, IaC, and the cloud.

## Repositories and CI/CD
Overall, Microsoft is pointing any new orgs or new clients to GitHub instead of Azure DevOps. There is a strong rumor (not sure if it's confirmed yet) that eventually Azure DevOps is going away and GitHub should be feature parity by the end of this calendar year. Due to that for this presentation I used GitHub Action and GitHub for CI/CD and code storage respectively. 

### Github actions
If you decide to use GitHub actions you need to make the decision of are you using publish profiles or service principals? 

- From what I can tell publish profiles are basically a file with a username and password to publish your code to Azure. The comes with the same reservations on using normal username and password you should probably rotate it, could be compromised, hard to extend etc. 

- The second option is a service principal. This uses AAD and allows you to access your stuff without usernames and passwords. This is also something that is easily extendable across multiple apps, doesn't have as much security implications of username and passwords. It is also the preferred way to deploy code as far as I can tell in the walkthroughs in Microsoft's docs. Due to that I used a service principal behind the scenes.

The scenario of this example was to deploy the infrastructure of the same app just with one written in ARM and one written in BICEP to really compare apples to apples. The link to the [GitHub repo can be found here](https://github.com/Alec13355/IMAUGBicep) This leads into the Pros and Cons of each starting off with ARM.

## ARM
ARM has three main strengths it basic and doesn't require any fancy IDE to write, it is just JSON. It is also written to be more computer language. 

The cons of ARM is extremely long lines, JSON and not very human readable. I personally think the simplicity of JSON make it hard to read and is very not human readable. 

## Bicep
There are a ton of pros for Bicep. That might lead into what is Bicep. Bicep is essentially an abstraction above ARM that will compile down into ARM before deployment. This is really nice because it helps provide support for linters so you can see template issues and keep the template up to standards your team can define. The next part is the great snippet suggestion especially in terms of the different API version per recourses. There is also some built in validation so you can get code help of errors prior to deploying you app! This is also the future direction Microsoft is recommending for people to move forward.

Bicep does have some drawbacks. Bicep doesn't support single line objects or arrays, they don't support breaking long lines into multiple lines, and no support for user defined functions. [There is more information here.](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview#known-limitations)

## Ending
Overall I personally think Bicep is pretty great! It helps make writing infra code and making it interconnected much simpler. It also does help cutdown on the amount of built in functions of ARM that you need to know just to have resources dependant on each other. If you'd like to see a side by side example checkout the GitHub repo where it does the same infra work just with different languages under the scenes. 

# Resources
- [GitHub](https://github.com/Alec13355/IMAUGBicep)
- [Bicep Extension](https://github.com/Azure/bicep/blob/main/docs/installing.md#install-the-bicep-vs-code-extension)
- [Blog References](https://4bes.nl/2021/06/27/build-test-and-deploy-bicep-through-github-actions/)
- [Bicep Playground](https://bicepdemo.z22.web.core.windows.net/)
- [Link to Presentation](https://www.youtube.com/watch?v=CAV0zrK01Wo)