---
title: "What I Learned About Building a Custom Copilot with Sam Nasser"
date: "2025-02-12"
description: "What I Learned About Building a Custom Copilot with Sam Nasser"
---

# What I Learned About Building a Custom Copilot with Sam Nasser

Earlier this week, our Azure User Group had the pleasure of hosting a talk by **Sam Nasser**, a Microsoft MVP and experienced software engineer. Sam walked us through the process of creating our own “Copilot” using Azure AI Foundry (previously known as Azure AI Studio). If you’ve been curious about extending generative AI to fit your organization’s specific needs, here’s a recap from his talk.

---

## 1. What Is Copilot?

Microsoft’s Copilot is essentially a generative AI service that can handle conversational prompts and provide intelligent, context-aware responses. You may have heard of **GitHub Copilot** (which suggests code in Visual Studio) or **Bing Chat** (an AI-enhanced search). Now, that same technology is available to integrate into your own applications.

---

## 2. Why Build a Custom Copilot?

A custom Copilot allows you to:
- **Tailor the AI** to your own data and brand voice.  
- **Improve user experience** by providing focused answers, rather than general web searches.  
- **Control the tone**, style, and behavior of the AI responses.  
- **Restrict or allow** certain content based on business rules, ensuring compliance and brand safety.

---

## 3. Azure AI Foundry: The Hub of AI Models

Sam introduced us to **Azure AI Foundry**, a web-based environment that integrates seamlessly with Azure services. It includes:

- **Model Catalog**: Thousands of models from various providers (OpenAI, Meta, Microsoft, etc.).  
- **Playgrounds**: Sandboxes to test Chat, Speech, and Image features.  
- **Deployment Tools**: Options to publish as a web app or call from an API in your own application.

### Hubs and Projects

- **Hub**: A container for multiple AI projects. It also centralizes security, resource usage, and data connections.  
- **Project**: Each project inherits settings from the hub, including data connections and AI resources.

---

## 4. Setting Up Your Copilot

### Prerequisites

1. **Azure Subscription**: You may need to request access for Azure OpenAI.  
2. **Hub & Project**: Created in Azure AI Foundry and linked to a Resource Group.  
3. **Data Indexing**: If you want the AI to answer from your own docs, you’ll need an **Azure Cognitive Search** index.

### Steps Sam Demonstrated

1. **Create a Hub and Project** in Azure AI Foundry.  
2. **Select a Model** (e.g., GPT-3.5 Turbo) for your AI.  
3. **Customize Model Instructions** (the AI’s “personality” and style).  
4. **Add Safety System Messages** to filter out harmful or off-topic content.  
5. **Import Custom Data** and connect it to your AI using Azure Cognitive Search.  
6. **Test in the Playground** by asking questions and seeing references to your indexed data.  
7. **Deploy** as a web app or retrieve code samples (C#, Python, etc.) for integration.

---

## 5. Key Takeaways

1. **User-Friendly Tuning**: You can literally type “You are a friendly AI that…” and the AI changes its style. No advanced code needed.  
2. **Resource Costs**: Every AI query consumes “tokens,” so keep track of usage to stay within budget.  
3. **Flexible Deployment**: Switch among GPT models, or add features like speech recognition/response.  
4. **Security & Permissions**: Set up role-based access in Azure to protect data and control usage.  
5. **Scalability**: Start small (even on the free tier), then add features (speech, advanced models, more data) as needed.

---

## 6. Next Steps and Resources

- [Azure AI Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/)  
- [Azure OpenAI Quickstart](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart)  
- [Sam Nasser’s LinkedIn Author Page](https://www.linkedin.com/learning/instructors/sam-nasser)  
- [Recording of the Talk](https://www.youtube.com/watch?v=_49H3kuYvI4&t=5s)

If you’re ready to explore building your own custom Copilot, definitely give Azure AI Foundry a try. It’s a powerful way to bring conversational AI into your projects with minimal friction.

**Huge thanks to Sam Nasser** for sharing his expertise! If you have any follow-up questions or would like to see more sessions on AI and Azure, feel free to reach out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_49H3kuYvI4?si=kDg9y5bV-CYZoeJ3&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

*Thanks for reading! If you found this helpful, share it with your fellow Azure enthusiasts or join us at our next user group meeting.*
