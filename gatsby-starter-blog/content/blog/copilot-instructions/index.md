---
title: Getting AI to Write Code to Your Standards!
date: "2025-05-31T01:10:03.284Z"
description: Tired of AI-generated code that almost hits the mark? 😅 With GitHub Copilot, you can actually guide it to write code to YOUR standards! By using custom instructions (like a .github/copilot-instructions.md file in your repo or personal settings), you can ensure consistency, enforce best practices, and make Copilot aware of project-specific needs. Spend less time tweaking and more time building.
---

## Getting AI to Write Code to Your Standards!

Hey everyone! If you’re anything like me, you’ve probably been exploring the amazing capabilities of AI-powered coding assistants like GitHub Copilot. It’s like having a super-smart pair programmer available 24/7, right? But also, if you're like me, you (or your companies) have *standards*. You have specific ways you like your code to look, certain patterns you follow, and project-specific conventions that everyone on the team needs to adhere to.

So, the big question is: how do we get this brilliant AI to not just write *any* code, but to write code *our* way? That’s where understanding how to guide and instruct Copilot comes in, and thankfully, GitHub has given us some neat ways to do this.

Think of it like training a new team member. You wouldn't just throw them at a complex codebase and hope for the best, would you? You’d provide guidelines, examples, and a bit of direction. We can do something similar with Copilot!

### Why Bother "Instructing" Copilot?

You might be thinking, "Isn't Copilot smart enough to figure things out?" And yes, it's incredibly intelligent! But here’s why taking a little time to set up some custom instructions can be a game-changer:

* **Consistency is Key:** Especially in team environments, consistent coding styles make code easier to read, maintain, and debug.
* **Adhering to Best Practices:** You can nudge Copilot towards using specific design patterns, library usages, or security practices that your project mandates.
* **Project-Specific Knowledge:** Every project has its quirks – custom frameworks, internal libraries, or unique architectural decisions. Custom instructions can help Copilot understand and work within these specific contexts.
* **Reducing Review Overhead:** If Copilot generates code that’s already closer to your standards, it means less time spent tweaking and more time on the bigger picture.
* **It Learns (Indirectly):** While you're not directly "training" the global Copilot model, providing context helps it generate more relevant suggestions *for you and your project*.

### How Can We Guide Our AI Buddy?

GitHub Copilot, particularly with its Chat interface and IDE integrations (like in VS Code and Visual Studio), offers a few ways to provide this crucial context and instruction. The most direct way is through **custom instructions files**.

#### Enter `copilot-instructions.md`

For repository-specific guidance, GitHub Copilot allows you to create a file named `.github/copilot-instructions.md` at the root of your repository. (If the `.github` directory doesn't exist, just go ahead and create it).

What goes in this magical Markdown file? Plain English (or your preferred language for instructions)! You can tell Copilot things like:

* "Always use arrow functions for JavaScript components."
* "Ensure all public methods have XML documentation comments in C#."
* "When generating SQL queries, prefer `JOIN` over subqueries where possible."
* "We use `Poetry` for Python dependency management, not `pip`. Any instructions should reflect this."
* "Prioritize the use of our internal `Contoso.UIControls` library for UI elements."

**Here's a simple example of what your `copilot-instructions.md` might contain:**

```markdown
## General Coding Standards

* Use tabs for indentation, not spaces.
* All comments should be in English.
* Keep lines under 120 characters.

## JavaScript Specifics

* Prefer `const` and `let` over `var`.
* Always use strict equality (`===` and `!==`).
* For React components, use functional components with Hooks.

## API Usage

* When interacting with the `/users` API endpoint, always include error handling for 401 and 404 responses.
* Use the `logger.service.ts` module for logging, not `console.log`.
```

Copilot Chat will automatically pick up these instructions when you're discussing code within that repository. It's like having a little cheat sheet for the AI, specific to your project!

#### Personal Custom Instructions

Beyond repository-level settings, you can also set *personal* custom instructions for GitHub Copilot Chat. These apply across your conversations on GitHub.com. This is great for general preferences, like:

* "Always respond in TypeScript examples."
* "Explain concepts as if to a mid-level developer."
* "My preferred testing framework is XUnit; please provide test examples using it."

You'll typically find these settings in the Copilot Chat interface on GitHub.com. Remember, personal instructions usually take the highest priority, followed by repository instructions.

#### Providing Context in Chat is Still King

Even with these instruction files, don't forget the power of clear prompting in Copilot Chat!

* **Be Specific:** Instead of "write a function," try "write a Python function that takes a list of strings, sorts them by length, and returns the longest string. Ensure it handles empty lists gracefully."
* **Reference Files:** You can often use `#` to reference specific files or even symbols in your workspace (e.g., "Can you refactor `#myApiService.ts` to use async/await?"). The `@workspace` command can also be powerful to give Copilot broader context of your open project in the IDE.
* **Iterate:** If the first suggestion isn't perfect, tell Copilot what you want to change. "That's good, but can you make it more performant?" or "Can you add error handling for null inputs?"

#### What About `.copilotignore`?

You might also come across discussions about a `.copilotignore` file or content exclusion settings. This is slightly different but equally important. While instructions guide Copilot on *how* to write code, exclusion settings tell Copilot what parts of your codebase it *shouldn't* look at. This is crucial for:

* **Sensitive Information:** Preventing Copilot from accessing files with secrets, API keys, or personal data (e.g., `.env` files, configuration files with sensitive paths).
* **Irrelevant Code:** Excluding generated code, `node_modules`, build artifacts, or large data files that aren't relevant to its learning context for your active coding tasks.

You can usually configure content exclusions in your repository settings on GitHub.com or at an organization level if you have Copilot Business. Some IDE extensions might also offer ways to manage this.

### Tips for Writing Effective Instructions:

* **Be Clear and Concise:** Ambiguous instructions lead to ambiguous results.
* **Prioritize:** Focus on the most impactful standards for your project.
* **Use Natural Language:** You don't need to be overly formal, but be precise.
* **Iterate and Refine:** If you notice Copilot isn't quite getting it, revisit and tweak your instructions.
* **Don't Overdo It:** Too many conflicting or overly restrictive instructions might hinder Copilot more than help. Start with the big things.

### It’s an Evolving Partnership

The world of AI-assisted development is moving fast! Features are constantly being updated and improved. The key is to stay curious, experiment with these settings, and see what works best for you and your team.

Getting AI to write code to your standards isn't about relinquishing control; it's about leveraging these powerful tools more effectively. By providing clear instructions and context, you can make GitHub Copilot an even more valuable member of your development workflow, helping you build better software, faster, and more consistently.

**What are your experiences?** Have you tried setting up custom instructions for Copilot? What tips and tricks have you found useful? Send me a message on [LinkedIn](https://www.linkedin.com/in/alec13355) and let me know!