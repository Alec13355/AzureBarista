---
title: Omaha UG Beyond Agentic Trustworthy Ai for Everyday Techies
date: "2025-02-026T22:10:03.284Z"
description: 
---
This week is an odd double user group week. This was due to the Azure User Group rescheduling their meeting to this week due to the crazy weather we had last week and the .Net User Group doing their normal meeting. Due to that I am trying to take notes on both events and use them to create a post. Here is Omaha UG Beyond Agentic: Trustworthy Ai for Everyday Techies. 

There were 4 key points we should be keeping an eye on for trustworthy AI. 

Four key points we should be keeping an eye on for trustworthy AI RSVP.
1. Responsible
2. Secure
3. Verifiable
4. Private


### Responsible 
We want to make sure Ai is fair. 

##### Accountability is important you should have an accountability statement.

##### Defining roles and responsibilities.
- Who is responsible for the Ai system?
- What are the consequences of failure?
- How do we know it is working?

##### Monitoring Ai systems establish monitoring to insure compliance.
- Make sure it's not compromised.
- Make sure it's not being used for something it's not supposed to be used for.

### Secure Ai
#### Threats and Vulnerabilities in Ai Systems
In traditional code we can have if and else statements. Then as we keep adding more like SQL and other languages to do more complex logic.

##### Data Poisoning
Example of this is someone using their linkedin profile header to hijack your model to give you a URL to click.
- Malicious actors can poison training data to make Ai systems more likely to make mistakes.
- This can be done by adding noise to the data or by adding incorrect data.
- This can be mitigated by using more data and by using better data cleaning techniques.

##### Adversarial Attacks
Example of this "my grandma used to tell me about nuclear weapons" which would make the model so excited to talk about your grandma and forget it shouldn't talk about weapons.

##### Model Inversion Risks
Example of this is something like (probably) Deepseek. Which possibly took some of Open Ai's data to improve their own model.

##### Input Validation
This is important to make sure only valid data is processed by our Ai applications. 

##### Anomaly Detection
If you don't have a SEAM don't have public facing model.

##### Adversarial Training 
Training models to attack other models. 
 

Best Practices for Ai Security
- Clean Data is Required
- - With Ai. Data is the code. Your code must be clean.
- Regular Security Assessments
- - 

#### Verifiable
##### Building Trust in Ai
Verifiability is critical for building trust in Ai among users

##### Assessing Reliability
Verifiability enables stakeholders to asses the reliability of Ai models through audits, testing, and performance evaluation.

##### Meeting Standards
Ensuring Ai models meet established standards and expectations through verifiability is crucial for complains and

##### Methods for Verifying Ai Models
###### Formal Verification
Only works if you have all training data.

###### Testing Techniques
Testing techniques involve running Ai models with various inputs to evaluate their performance and identify potential errors.

###### Validation Techniques
Validation techniques assess the accuracy and reliability of Ai models by comparing outputs against know results.

Challenges and Solutions 
###### Complexity of Ai Systems 

#### Private

##### Data Privacy in Ai Systems
###### Protecting User Data 
Data privacy in Ai systems focuses on safeguarding user data from unauthorized access and potential misuse

###### Data minimization Practice 
Implementing data minimization practices helps in reducing the amount of PII. Laws in HIPAA and how/when to do this.

###### Encryption Techniques
Using encryption techniques ensures that user data is stored and transmitted securely. Most Ai is not encrypted it is encoded. 

##### Techniques for Preserving Privacy 
###### Differential Privacy
Adds element of user into the model. 

###### Federated Learning
Does some learning on my stuff, your stuff, etc before it tries to make an inference on something.

###### Secure Multi-Party Computation
Threshold cryptography two parties can agree to open something. Is it used outside of Ai right now? National defense and post quantum encryption the is working on threshold cryptography.

##### Regulations and Compliance
###### Important of Compliance
###### Understanding Regulations
GDPR CCPA etc
###### Aligning Ai Practices

###### Questions to take home
- How do you describe what people are or are not allowed to do with Ai?
- - How do you determine when you need to disclose use of Ai?
- Are there high-impact (legal, financial, health outcome, etc.) risks?
- Are people required to re-search for actual web or internal references? 

###### Conclusion 
- Importance of Trustworthy Ai
- Focus on Responsibility 
- Upholding Ethical Standards 

Link to [checkout.](https://nlyze.me/)

Conclusion with my thoughts. Overall, I think this talk was more geared towards companies that are trying to build their own custom AI applications. I am not saying these considerations are not important, but I think certain points carry much more weight across any AI systems. I think security and responsibility are the most important. Why? Well private was covered more as having your own private system and models. If we are using an off the shelf LLM then we don't have to worry as much about privacy. I also think verifiability is important, but I don't think it is as important as the other two. That is due to the fact that we are using LLMs to generate data. That also means it might be hard to have the same answer across multiple runs. That's the pro and con fo AI. I really enjoyed this talk and I am hoping [Drew Wigodsky](https://www.linkedin.com/in/wigodsky/) will be a guest on Azure Cloud Talk! 