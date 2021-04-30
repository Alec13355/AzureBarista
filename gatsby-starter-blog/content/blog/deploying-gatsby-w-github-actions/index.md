---
title: Deploying Gatsby With Github Actions
date: "2021-04-29T22:10:03.284Z"
description: Deploying Gatsby with Github actions to Azure
---

This is the steps I followed to get my blog to Azure. Since Microsoft is moving towards Github and Github actions. I figured this would be a good first introduction for myself for myself to Github actions and a place I could document it for others too! 

This blog is based off of [Gatsby's own website here](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-azure/). My plan is to add commentary or clarity where I got stuck. Overall, this was so straight forward just follow the guide from Gatsby. 

## Custom Domain
To configure your custom domain Gatsby docs [link you here.](https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain?WT.mc_id=staticwebapps-github-chnoring) My domains were purchased on Google Domain. So the first thing I do is in the portal hit custom domains on the left nav and type in my custom domain name. That will give you a CNAME to put into your DNS. This can take up to 48 hours to take effect (I think it took 2-5 minutes for me though make sure you do www.<your domain>.com as the name). Other than that thanks to Gatsby and Microsoft I know have a blog and custom domain in Azure. This whole process took at most 20 minutes. It was much easier than I thought and super easy with Gatsby's docs.


