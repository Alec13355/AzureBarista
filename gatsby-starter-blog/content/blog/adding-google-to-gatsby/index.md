---
title: Gatsby Integration
date: "2021-09-14T22:10:03.284Z"
description: Adding Google Analytics To Gatsby
---

## Acknowledgement

The content from this blog post is coming from the video by [Guiding Digital](https://www.youtube.com/watch?v=kO_GMfC1LHA) the intent of this post is to document the steps mapped out here in a more streamlined list and in a text format.

## Step 1 Create Account/Login

The first thing you need to do is create a google analytics account at [analytics.google.com](https://analytics.google.com/). If you already have an account you will want to get to create account page. In the bottom left hit the gear -> Create Account.

## Step 2 Account Setup

- Once you go through either of these flows you should be on the account creation page you want to add an account name and you can share info with Google or not (that's the next 4 check boxes). You get 100 accounts for free with Google this will be one of 100. Click the next button.

- Next you will set a property name and timezone. Under advance options is a Universal Analytics property. This is an old Analytics item and if you don't know what it is you probably don't need it so we'll keep it off.

- Google wants some more info on your company/use case for analytics. This is another take it or leave it section. You can divulge that info or not. Once you make your selection hit create.

- Finally, make sure you accept terms and conditions

## Step 3 Web Setup

Assuming your site is already live you will want to hit the web icon and put in your URL and a name. Before you hit complete you want to hit that gear icon in the left. Because Gatsby is a single page application it doesn't reload the entire page. Due to that you want to hit advance settings under page views and unselect Page changes based on browser history events. Then click save in the top right and Create stream. This will then popup a details page you want to keep open.

## Step 4 Gatsby Config

The easiest way to get Google Analytics to work with Gatsby is the [Gatsby Plugin Google GTag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/?=gtag) you will want to install that to your project with `npm install gatsby-plugin-google-gtag` or equivalent yarn command. After that you will want to go to your gatsby config and add this to your plugins section

```javascript {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "<Your measurement id>", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
```

## Step 5 Testing!

Normally when you run `gatsby develop` it won't track google analytics. So you need to instead build the app for production which is `gatsby build` and `gatsby serve` if you are running the default configuration that should be live at localhost:9000 now when you switch back to Google Analytics hit the x on the top right of the modal we left open. Then, you want to go to reports on the left and find the "View Realtime" section. That should show your app running locally. Then you're ready to start getting some insights! Congrats!
