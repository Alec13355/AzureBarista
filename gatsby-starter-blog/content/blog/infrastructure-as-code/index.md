---
title: Infrastructure As Code
date: "2022-05-01T22:10:03.284Z"
description: Infrastructure As Code
---

## Setting the Scene

Historically if you needed infrastructure setup at your local company you would have had to make sure you had the physical space, IT staff, and expertise to set everything up. All of those things take time, people, and make businesses move super slowly. This causes frustration by every party in the formula, the developer who wants to be able to build things, security who needs to make sure nothing is overly exposed, IT support who have a backlog of issues and not enough people or resources to solve them all, procurement who needs to estimate expected need, and finally management who has to be the middle man for each and every bottle neck. What if there is a better and more secure way to do this? What if we can have teams be in control of all of their infrastructure in a way that isn't a security risk? Introducing infrastructure as code!

## What Is Infrastructure As Code?

Infrastructure as code is a way in code to describe your infrastructure. This includes anything from servers, hardware requirements, OS, to configurations and networking.

### Getting Teams What They Need

Using IAC (infrastructure as code) you are able to allow teams to make infrastructure decisions if/when they need them. That means they can start with a typical configuration and change them to fit their needs as those needs change. That means the people closest to the needs are able to solve their own issues. They don't need to submit help desk and wait for someone to do whatever is exactly asked of them. The team has the keys to unlock their needs.

### Security

Using IAC allows for a lot of security and governance. In Azure (and most clouds for the matter) you can lock down your cloud to only be used by IAC. That means you don't need to give anyone keys to your cloud other than automated pipelines. These pipelines can have the scope of things they can do reduced to as little as possible. All of the things the pipelines do have a very elaborate paper trail. Assuming good dev practices like pull requests, approvals, and git every change to infrastructure will be both documented on an Azure side and a repo side. That means any and all configuration changes should then have diffs and can easily be rolled back if/when issues arise.

### Cost Savings

Using an IAC model plays a lot better with Agile and the Agile workflow. Gone are the days of you needing to define how much storage, compute, and hardware months before a projects kicks off just so you can make sure everything is bought and configured. This allows for less planning upfront, and the flexibility to allow any team to change their cloud as they need. That allows for teams to jump on initiatives if/when they make sense for organizations with less upfront work required.
