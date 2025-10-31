# Webflow Cloud - Getting Started Plan

## Overview
This document outlines all the steps required to get started with Webflow Cloud, based on the official Webflow Cloud Documentation.

**Time Estimate:** 30 minutes

**Prerequisites:**
- A Webflow account
- A GitHub account
- Node.js 20.0.0 or higher and npm installed

---

## Step-by-Step Plan

### 1. Install the Webflow CLI

**Command to run:**
```bash
npm install -g @webflow/webflow-cli
```

**Verification:**
- Run `webflow --version` to verify the CLI tool installed successfully

**Purpose:**
- Installs the Webflow Command Line Interface globally on your system
- This CLI is used to initialize projects, sync with Webflow sites, and deploy to Webflow Cloud

---

### 2. Create a New Webflow Site

**Objective:** Create a new Webflow site by cloning the Astral Fund template (pre-configured with styles, variables, and components optimized for Webflow Cloud and DevLink).

**Sub-steps:**

1. **Open the Astral Fund template**
   - View the [Astral Fund template](https://webflow.com/templates/html/astral-fund) in "Made in Webflow"

2. **Clone the template**
   - Click the "Clone in Webflow" button
   - In the next window, click "Create site"

3. **Add site details**
   - Give your site a name
   - Determine who should have access to your site
   - Once created, the site will open in Webflow

4. **Review styles, components, and variables** (Optional)
   - Optionally review the styles, variables, and components included in the site
   - These will be exported to your new app in the following steps

---

### 3. Create a New App

**Objective:** Use the Webflow CLI to create a new Next.js application that's synced with your Webflow site's design system through DevLink.

**Sub-steps:**

1. **Initialize your project**
   - In your terminal, run the command:
   ```bash
   webflow cloud init
   ```

2. **Select your framework**
   - When prompted in the terminal, select **Next.js** framework
   - Next.js provides full-stack applications with server-side rendering, intelligent page optimization, and seamless integration with Webflow components

3. **Select your mount path**
   - When prompted, enter the path where you plan to mount your app on your Webflow site
   - Example: `/app` → `mysite.webflow.io/app`

4. **Authenticate with Webflow**
   - When prompted, authenticate with Webflow
   - Select the site you just created for your Webflow Cloud project

5. **Import your Webflow design system**
   - When prompted, select the same Webflow site you used to authenticate
   - The Webflow CLI will import available styles, variables, and components via DevLink
   - DevLink will sync your design system from Webflow to your codebase

6. **Publish your project to a GitHub repository**
   - Navigate to your new project:
   ```bash
   cd your-project-name
   ```
   - Initialize git:
   ```bash
   git init
   ```
   - **Important:** Publish the repository to GitHub
   - You will need to publish your local project to GitHub to connect it to Webflow Cloud

---

### 4. Create a New Webflow Cloud Project

**Objective:** Connect GitHub to Webflow Cloud, create a project, and configure an environment for automated deployments.

**Sub-steps:**

1. **Open Webflow Cloud**
   - In Webflow, navigate to your site's settings
   - Select "Webflow Cloud" from the sidebar

2. **Authenticate with GitHub**
   - Click the "Login to GitHub" button to connect your GitHub account
   - Click the "Install GitHub" button
   - Follow the instructions to enable Webflow Cloud to access your GitHub repositories

3. **Create a new Webflow Cloud project**
   - Click "Create New Project"

4. **Add project details**
   - **Name:** Choose a name for your Webflow Cloud project
   - **GitHub Repository:** Provide the URL of your newly created GitHub repository
   - **Description** (Optional): Enter a description for your app
   - **Directory Path** (Optional): Enter a directory path for your app
   - Click "Create project" to save your project

5. **Create a new Environment**
   - **Branch:** Choose a branch to deploy your project from
   - **Mount Path:** Choose a mount path for your project
     - Example: `/admin` → `mysite.webflow.io/admin`
   - Click "Create environment" to save a new environment for the project

6. **Publish your Webflow Site**
   - To make your new project and environment live, publish your Webflow site
   - Click the "Publish" button in the top right corner of your Webflow Dashboard
   - **Note:** You won't see your app yet! You need to build and deploy your Next.js app first

---

### 5. Add Your Webflow Design System to Your Webflow Cloud App

**Objective:** Add Webflow components to your app by importing them from the DevLink folder, which contains assets synced from your Webflow design system.

**Note:** Your scaffolded app already includes:
- Global styles
- The DevLinkProvider to manage Webflow interactions in your project's layout files

**Framework-Specific Steps for Next.js:**

1. **Install dependencies and run your project locally**
   ```bash
   npm install
   npm run dev
   ```
   - **Note:** Webflow Cloud currently only supports using the npm package manager

2. **Add Webflow components to your Next.js project**
   - Import components from the `/devlink` folder in your project
   - Add Webflow components to your pages or components
   - The DevLinkProvider is already configured in your layout files to manage Webflow interactions

3. **Test your changes locally**
   - Your Next.js app should be running on `http://localhost:3000` (or the configured port)
   - Verify that Webflow components are rendering correctly

---

### 6. Deploy Your Project to Webflow Cloud

**Objective:** Deploy your application so it's live on your Webflow site.

**Sub-steps:**

1. **Deploy using the Webflow CLI**
   - In your terminal, run:
   ```bash
   webflow cloud deploy
   ```
   - **Automated Deployments:** When you commit changes to your GitHub branch, Webflow Cloud will automatically detect the changes and deploy your project to your environment
   - **Deployment Time:** Your deployment may take up to 2 minutes to complete
   - **Monitoring:** You can view the status of your deployment in your Environment Details dashboard
   - See details of your build and deployment in the build logs

2. **View your app at your site's URL + mount path**
   - Once successfully deployed, navigate to your site's domain and mount path
   - Example: `mysite.webflow.io/app` (where `/app` is your mount path)
   - 🎉 **Congratulations!** You've successfully created and deployed a Webflow Cloud project integrated with your Webflow design system

---

## Next Steps

After completing the initial setup, you can:

1. **Bring your app to Webflow Cloud**
   - Learn about project configuration options
   - Add advanced functionality to your new project

2. **Optimize your workflow**
   - Learn how to manage environments for different stages of development

3. **Manage deployments**
   - Explore deployment options
   - Learn about Webflow Cloud's CI/CD integration with GitHub to streamline your release process

4. **Add a SQLite database to your app**
   - Add a SQLite database to store and retrieve user data

---

## Troubleshooting

### Common Issues:

1. **I'm seeing a 404 error when I try to access my app**
   - Verify that your deployment completed successfully
   - Check that your mount path is correct

2. **A deployment doesn't start when I push to my GitHub repo**
   - The Webflow Cloud GitHub App may not have access to your repository
   - Go to the Webflow Cloud tab in your Webflow site settings
   - Click "Install GitHub App" and follow the prompts to ensure Webflow has access to read from your repository

3. **I can't see assets in my app**
   - If you're referencing assets in your project, you need to reference the mount path of your project to serve them correctly
   - See more on referencing assets in the documentation

---

## Key Concepts

### Projects
- Projects are the foundational building blocks in Webflow Cloud
- Each project represents a distinct application or service you want to deploy alongside your Webflow site

### Environments
- Enable you to maintain different versions of your application for development, testing, and production
- Features include:
  - Multiple environments per project
  - Separate environment variables and configurations
  - Branch-based deployments

### Deployments
- Represent the process of pushing your code to an environment
- Webflow Cloud provides:
  - Automated build and deployment pipelines
  - Deployment logs and monitoring

### Supported Frameworks
- **Next.js:** Full-stack Next.js applications with server-side rendering, intelligent page optimization, and seamless integration with Webflow components
- **Astro:** High-performance, content-focused websites that ship minimal JavaScript by default while preserving Webflow's design capabilities

### DevLink
- Generates production-ready code from your Webflow site
- Seamlessly syncs from your design to your codebase
- Imports styles, variables, and components from your Webflow design system

---

## Summary

This plan covers the complete process from installation to deployment:
1. ✅ Install CLI
2. ✅ Create Webflow site
3. ✅ Create application
4. ✅ Set up Webflow Cloud project
5. ✅ Integrate design system
6. ✅ Deploy to production

Following these steps will get you up and running with Webflow Cloud in approximately 30 minutes!

