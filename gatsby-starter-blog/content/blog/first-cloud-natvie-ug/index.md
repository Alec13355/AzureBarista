---
title: Josh Duffney's Talk on Patching Containers with Copacetic
date: "2025-04-08T23:10:03.284Z"
description: Josh Duffney's Talk on Patching Containers with Copacetic
---

## Summary of Josh Duffney's Talk: Patching Azure Containers with Copacetic

Josh Duffney's talk focused on the challenges of patching container images and introduced Copacetic (Copa) as a solution to streamline this process.

**The Problem: Why Patching Containers is Difficult**

* **Impossibility:**
    * Loss of build environments.
    * Images owned by third parties.
    * Dependency conflicts with newer base images.
    * Expensive rebuilds.
* **Logistical Challenges:**
    * Dev team unavailability.
    * Change Advisory Board (CAB) requirements.
    * Resource and time intensiveness.
    * Potential for service disruption.
* **Risk:**
    * Accidental introduction of unintended changes.

The core need is to quickly address Common Vulnerabilities and Exposures (CVEs) by updating OS-level packages and base images.

**Identifying Vulnerabilities:**

* Tools like Trivy are used to scan container images and generate vulnerability reports (e.g., `report.json`).

**The Solution: Copacetic (Copa)**

* Copa is a CLI tool that patches container images directly, without requiring a full rebuild.
* It uses the vulnerability reports from scanners like Trivy to identify and apply necessary patches.
* It can patch OS vulnerabilities, but currently does not patch application-level vulnerabilities.
* Copa creates a new patch layer, minimizing storage and transmission costs compared to full image rebuilds.
* Copa is built upon buildkit.
* Copa can be used to quickly patch images, instead of waiting for base image updates.

**Key Features and Benefits:**

* **Rapid Patching:** Enables quick deployment of patched images to production.
* **Operational Efficiency:** Addresses the gap between vulnerability disclosure and active exploitation.
* **Flexibility:** Allows patching of third-party images with inconsistent update cadences.
* **Accessibility:** Empowers DevSecOps engineers to patch images without needing to be the original image publishers.
* **Resource Optimization:** Reduces storage and transmission costs through patch layers.
* **Simplified Workflow:** Replaces complex rebuild pipelines with a single tool.
* **Extensibility:** Designed to support various vulnerability report formats and package managers.

**Automation and Continuous Patching:**

* Duffney's `continuous-patching` project automates the patching process.
* Dependabot can be used on a Cron schedule to patch dependencies.
* Copa can be used with a token to patch private repositories.
* Upcoming integrations include Azure Container Registry (ACR) support, potentially reducing the need for Dependabot in some scenarios.
* Links provided:
    * `https://github.com/project-copacetic/copacetic`
    * `https://github.com/duffney/contagious`
    * `https://github.com/duffney/contagious-action`
    * `https://github.com/duffney/continuous-patching`

**In essence, Copacetic aims to make container patching faster, easier, and more efficient, bridging the gap between vulnerability detection and remediation.**