---
title: Power Apps, the Future?
date: "2021-05-27T01:10:03.284Z"
description: Have you heard of Power Apps or fusion teams? Are they the future? Find out more!
---

![Fusion Team](./fusion.png)
*Copyrights DBZ*

## What are fusion teams, citizen developers, professional developers?
Microsoft defines fusion teams as a collaborative team of professional developers and citizen developers. A citizen developer is a subject matter expert that is the primary user of Microsoft Power Apps to build software to help them do their jobs. A professional developer is a developer in the more traditional definition. 

### How does a fusion team work?
A fusion team works with collaboration between citizen developers and professional developers. The goal is to provide a solution that the citizen developer can use. That means the citizen developer is primarily responsible for the UI of an application. They are also driving the need. A professional developer can then help out when the citizen developer needs access to data, has very complicated business logic that should be housed in an api, or wants to integrate with other third party systems.

## Are Power Apps the future? Are they good or just hot smoke? 

### Really how easy are power apps to get started?
I was extremely skeptical about Power Apps. I'm not going to lie. So I spun up a quick serverless SQL app with a table in called Deliveries. That table will be the prime data our end users want. For simplicity I used a SQL account for login, but you can use any Azure service to login if you configure it. Then, I used that connector and loaded up power apps. Here is what I got out of the box connecting it to my SQL table.

<div style="width:100%;height:0;padding-bottom:49%;position:relative;"><iframe src="https://giphy.com/embed/pRaTviB0C3mLimrtQZ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/pRaTviB0C3mLimrtQZ">via GIPHY</a></p>

It may not be super clear in the GIF but I am adding a record via data grip to my SQL table, launching my Power App, getting all records with the refresh button, showing the new ones I just made, deleting one, and finally showing you back in data grip it was deleted. **Are you kidding me?** Out of the box I can do simple C**RUD** (Create Read Update Delete). Now for the C how hard can it be to build a page like that from scratch? Well after further investigation I found the + button at the top and it uses the edit screen with no pre-filled data that then adds a new record. So **all CRUD is available out of the box**. Cool right? 

### How can I use this in different business case?
So if just a CRUD app doesn't sell you on why this tool is amazing let's pretend there's a report we need to make on projected amount of deliveries. Let's say our citizen developer is told by management that they need a report to show the deliveries of all units brought in. In a typical development stack that would be a feature request to a dev team, it would have to be sized, prioritized, tested, deployed and finally able to be used. However, in a fusion team our citizen developer can solve this on their own. In this example our citizen developer created the screen and is reading from the DB to calculate the expected amount. This page will update in real time as more things get added to the database.

`Sum('[dbo].[Delivery]', Amount)`


<iframe src="https://giphy.com/embed/SNlMeHVfavSbakhiqf" width="480" height="234" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/SNlMeHVfavSbakhiqf">via GIPHY</a></p>

There is no end to the possibilities of power apps. You can include a professional developer in to this mix and drastically increase how productive a power app can be. You can have a professional developer link what's possible and help empower citizen developers by writing stored procs, writing APIs, and using API management in Azure. All of these solutions help to empower citizen developers to get something out the door fast. The added benefit of doing an API first solution is you can always add a more robust frontend framework in the future if needed. 

### Closing thoughts
Overall, I think power apps can have a huge place in the future. I think it can help with rapid prototyping, getting to market quicker, POCing, and building more streamlined and customized small solutions. This flexibility allows others not directly in IT in a traditional sense to manage applications. All power apps are also save in a common space so hopefully organizations will not run into issues like Microsoft Access, where a ton of one off applications get spun up and no one know who owns them, manages them, or built them. This centralized location should help leave an audit trail and give IT a clearer idea of the apps floating around in the power apps ecosystem. You can also import any style guides or react components to power apps to make apps on point as far as branding goes, too. I think power apps are a great addition to the overall ecosystem of development and help tighten the feedback loop between developers and the business. Lastly, for certain surceases this could be **THE ENTIRE SOLUTION**. I think for smaller projects or very specific one off solutions could really help companies get smaller solutions out the door. Worst case if you build out an API or database you can then use that to build out a more robust frontend solution if the need arises. 