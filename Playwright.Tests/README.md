# LMS Test Automation Using Playwright - Typescript

## What is Playwright?
- The playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing.
- Playwright by Microsoft did start as a fork of Puppeteer Puppeteer is a node library to automate the chromium browsers with the JavaScript API

Playwright is an open source automation library that allows us to automate the testing of web applications across different browsers, including Chrome, Firefox, and Safari. It offers a robust set of features for browser automation, such as interacting with web elements, performing actions like clicks and keyboard inputs, and handing complaex scenarios like file uploads and browser contexts.

## How to use?
- Clone the repository
- open the project
- Go to the LMS.Core.Web > Playwright.Tests  folder in terminal
- From the terminal install all the dependencies using 'npm install'
- Copy .env-cmdrx-txt file and name as .env-cmdrc. Then update internal and external user account on .env-cmdrc file before running test cases. This file need not be checked-in.

## Required software
- Node js -> v.14 or above
- VS Code
- Playwright Vs Code Extension
- JDK need to be installed and JAVA_HOME environment variable need to be set to open allure report
 
 ## Refer the below 
  - Commands to run test and open report are provided in package.json under scripts section
