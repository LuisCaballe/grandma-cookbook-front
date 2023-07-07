<!-- prettier-ignore -->
# **Grandma's Cookbook**

[![Testing](https://github.com/LuisCaballe/grandma-cookbook-front/actions/workflows/testing.yml/badge.svg)](https://github.com/LuisCaballe/grandma-cookbook-front/actions/workflows/testing.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LuisCaballe_grandma-cookbook-front&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LuisCaballe_grandma-cookbook-front)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=LuisCaballe_grandma-cookbook-front&metric=coverage)](https://sonarcloud.io/summary/new_code?id=LuisCaballe_grandma-cookbook-front)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LuisCaballe_grandma-cookbook-front&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LuisCaballe_grandma-cookbook-front)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3511cebf-0c33-4b16-8c94-175f3f86c1b6/deploy-status)](https://app.netlify.com/sites/grandmas-cookbook/deploys)

## **Introduction**

Grandma's Cookbook is an application that allows users to create and manage a private collection of favourite recipes, preserving their culinary heritage.

Enjoy your meal!

[Visit Grandma's Cookbook](https://grandmas-cookbook.netlify.app/)

Use the following credentials for testing purposes: \*

```
Username: admin
Password: admin
```

<small>\* Please note that the custom API rest is hosted on a free render.com account, so please be patient when logging in (you will have to wait about a minute).
</small>

<img src="https://cdn.discordapp.com/attachments/1114233686947270749/1126554378053111869/mobile.webp" alt="Grandma's Cookbook mobile screenshots">
<img src="https://cdn.discordapp.com/attachments/1114233686947270749/1126551681845448784/desktop.webp" alt="Grandma's Cookbook desktop screenshot">

## **Features**

- Add new recipes to the collection.
- Delete recipes from the collection.
- Update recipes from the collection.
- View detailed information about each recipe.
- Search for recipes by cooking difficulty.
- Secure authentication using JSON web tokens.

## **Tech stack**

Grandma's Cookbook uses the MERN technology stack, which consists of MongoDB, Express.js, React, and Node.js. And it is built using the following technologies:

### **Build with:**

<a href="https://www.typescriptlang.org/"><img src="https://badgen.net/badge/TypeScript/v4.4.3/blue?icon=typescript" alt="TypeScript"></a>
<a href="https://reactjs.org/"><img src="https://badgen.net/badge/React/v17.0.2/blue?icon=react" alt="React"></a>
<a href="https://redux-toolkit.js.org/"><img src="https://badgen.net/badge/Redux%20Toolkit/v1.6.2/purple" alt="Redux Toolkit"></a>
<a href="https://reactrouter.com/"><img src="https://badgen.net/badge/React%20Router/v6.11.2/orange?icon=react-router" alt="React Router"></a>
<a href="https://axios-http.com/"><img src="https://badgen.net/badge/Axios/v1.4.0/blue?icon=axios" alt="Axios"></a>
<a href="https://styled-components.com/"><img src="https://badgen.net/badge/styled-components/v5.3.1/pink?icon=styled-components" alt="styled-components"></a>

### **Tested with:**

<a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-v0.31.0-green?logo=Vitest" alt="Vitest"></a>
<a href="https://testing-library.com/"><img src="https://img.shields.io/badge/React_Testing_Library-v12.1.2-orange?logo=testing-library" alt="React Testing Library"></a>
<a href="https://mswjs.io/"><img src="https://img.shields.io/badge/MSW-v1.2.1-green?logo=msw" alt="MSW"></a>

### **Good Practices Tools:**

<a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-Code%20Linting-yellow?logo=eslint" alt="ESLint"></a>
<a href="https://typicode.github.io/husky"><img src="https://badgen.net/badge/Husky/v7.0.4/blue" alt="Husky"></a>
<a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-Code%20Formatting-ff69b4?logo=prettier" alt="Prettier"></a>

### **Lighthouse metrics:**

![Lighthouse Performance Badge](./assets/lighthouse_performance.svg)
![Lighthouse Accessibility Badge](./assets/lighthouse_accessibility.svg)
![Lighthouse Best Practices Badge](./assets/lighthouse_best-practices.svg)
![Lighthouse SEO Badge](./assets/lighthouse_seo.svg)

<small>For a full list of dependencies and scripts used, see the package.json file.</small>

## **Setup**

To set up and run Grandma's Cookbook in your local environment, follow these steps:

**Note**: In order to retrieve data, you need to set up and run the Grandma's Cookbook API as well. The API can be found at https://github.com/LuisCaballe/grandma-cookbook-back.git
Please follow the instructions in the API repository to run it in your local environment.

1. Clone this repository to your choosen local directory:

    ```
    git clone https://github.com/LuisCaballe/grandma-cookbook-front.git
    ```

2. Install the dependencies:

    ```
    npm install
    ```

3. Grandma's Cookbook requires environment variables to be set to work properly. To configure the required environment variables, follow the steps below:

    3.1. Create a new file named **.env** in the root directory of the project.

    3.2. Open the **.env** file and add the following environment variables:
    ```
    VITE_APP_URL=http://localhost:4000
    ```

    <small>Or you can change the value of this variable to the URL + port where you want to serve the above-mentioned API.</small>

4. Start the application in development mode:

    ```
    npm run dev
    ```

5. Open your browser and visit the provided URL to access to Grandma's Cookbook application.

6. Use the following credentials for testing purposes:

    ```
    Username: admin
    Password: admin
    ```

## **Author**

<a href="https://github.com/LuisCaballe">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge"/>
</a>
<a href="https://www.linkedin.com/in/luiscaballe/">
  <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
</a>
