---
title: Unlocking Granular Control A Guide to Custom Roles in Azure
date: "2025-06-10T22:10:03.284Z"
description: This post is about creating custom roles in Azure. We discuss using RBAC and data attributes to manage access to resources.
---

### Unlocking Granular Control: A Guide to Custom Roles in Azure

If you're like me, you're always looking for better ways to manage access to your Azure resources. While Azure's built-in roles are a great starting point, sometimes you need something a little more specific. That's where custom roles come in, giving you the power to define precisely who can do what.

In this post, we'll dive into creating custom roles in Azure. We'll explore how to use Role-Based Access Control (RBAC) and data attributes to create a security model that's both powerful and flexible. Think of it as creating a "just right" key for every user, instead of handing out master keys to everyone.

#### Why Go Custom?

Before we jump into the "how," let's talk about the "why." You might need a custom role when:

* **You need to grant specific permissions.** Maybe you have a team of developers who need to manage web apps, but you don't want them to have access to the underlying virtual machines. **In my recent case, I needed to give access to small parts of AI Foundry not to the entire platform.**
* **You want to limit access to sensitive data.** With data attributes, you can create roles that only allow users to access certain data, even within the same resource.
* **You're working in a complex environment.** In large organizations, custom roles can help you enforce the principle of least privilege, reducing the risk of accidental changes or malicious attacks.

#### Getting Started with RBAC

At the heart of Azure security is **Role-Based Access Control (RBAC)**. RBAC allows you to grant users, groups, and service principals access to Azure resources. You can assign roles at different scopes, such as the management group, subscription, resource group, or individual resource.

Here's a quick rundown of the key concepts:

* **Security Principal:** An object that represents a user, group, service principal, or managed identity.
* **Role Definition:** A collection of permissions. It lists the operations that can be performed, such as read, write, and delete.
* **Scope:** The set of resources that the access applies to.

#### Creating Your First Custom Role

Ready to get your hands dirty? Let's create a custom role that allows users to restart virtual machines in a specific resource group.

First, you'll need to create a JSON file that defines the role. Here's an example:

```json
{
  "Name": "Virtual Machine Operator (Custom)",
  "IsCustom": true,
  "Description": "Can restart virtual machines.",
  "Actions": [
    "Microsoft.Compute/virtualMachines/restart/action"
  ],
  "NotActions": [],
  "DataActions": [],
  "NotDataActions": [],
  "AssignableScopes": [
    "/subscriptions/your_subscription_id/resourceGroups/your_resource_group"
  ]
}
```

In this example:

* `Name` and `Description` are self-explanatory.
* `IsCustom` is set to `true` to indicate that this is a custom role.
* `Actions` lists the operations that the role can perform. In this case, it's the `restart` action for virtual machines.
* `AssignableScopes` defines where the role can be assigned.

Once you've created the JSON file, you can use the Azure CLI or PowerShell to create the role.

#### Taking it a Step Further with Data Attributes

Now, let's talk about something really cool: **data attributes**. With data attributes, you can add conditions to your role assignments based on tags or other metadata. This allows you to create even more granular access control policies.

For example, you could create a custom role that only allows users to access storage blobs with a specific tag. This is incredibly useful for scenarios where you need to restrict access to sensitive data.

Here's an example of how you might use data attributes in your role definition:

```json
{
  "Name": "Blob Data Reader (Custom)",
  "IsCustom": true,
  "Description": "Can read blobs with the 'sensitive' tag.",
  "Actions": [],
  "NotActions": [],
  "DataActions": [
    "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read"
  ],
  "NotDataActions": [],
  "AssignableScopes": [
    "/subscriptions/your_subscription_id"
  ]
}
```

In this case, we're using the `DataActions` property to specify that the role can only read blobs. We can then add a condition to the role assignment that checks for the "sensitive" tag.

#### Key Takeaways

* **Custom roles are a powerful tool for managing access to Azure resources.** They allow you to create a security model that's tailored to your specific needs.
* **RBAC is the foundation of Azure security.** Understanding the key concepts of RBAC is essential for creating effective access control policies.
* **Data attributes take access control to the next level.** With data attributes, you can create even more granular policies based on tags and other metadata.

I hope this post has given you a good starting point for creating custom roles in Azure. As you can see, there's a lot of power and flexibility at your fingertips. So go ahead, start experimenting, and create a security model that's just right for you!