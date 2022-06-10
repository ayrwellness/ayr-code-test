# Ayr Code Test

Thank you for taking the time to complete this code test. This file outlines the basic requirements of the test as well as giving you some useful information about the different criteria. Please make sure you read this file and reference it throughout your code test.

## Sections
* [Important Notes](#important-notes)
* [Brief Overview](#brief-overview)
* [Requirements](#requirements)
* [File Structure](#file-structure)
* [Running the Project](#running-the-project)
* [Closing Thoughts](#closing-thoughts)

## Important Notes

Before starting:

* Create a new public repository in Github called `FIRSTNAME-LASTNAME-ayr-code-test`
  * example: `john-doe-ayr-code-test`
* Clone this repo into a folder with the same name as the repo you just created
* Go into the repo you just cloned and change the remote url to the repo you just created

## Brief Overview

The goal of this project is to injest product descriptions for different cannabis products, extract the useful information from the descriptions, and display that information in a dashboard.

The injest should be able to correctly derive the relationships between strains, terpenes, and feelings.

The dashboard should have a page for strains that displays the strain and its terpenes and a page for terpenes that displays the terpens and their feelings.

__**IMPORTANT:**__ *The data for the cannabis products has been randomly generated per test, but does contain a definitive relationship between terpenes and feelings. Do not use online references to determine the terpene-to-feeling correlation as that will be incorrect.*

## Requirements
__Data Injest:__
* Use a Node.js backend
* Any relational database
* Parse strain name, terpenes, feelings, THC %, and CBD % out of the product description
* Develop an algorithm that determines the correct relationship between terpenes and feelings
* Store strains, terpenes, feelings, THC %, and CBD % in a relational manner that properly correlates feelings to terpenes to strains

__Weed Dashboard:__
* Use Node backend
  * Express is included and roughly setup, but it is not required
* Back end should only be API routes that return JSON
* Include back end functionality for updating terpenes for strains
* Use React as UI framework
* Build out 2 pages for the dashboard
  * One page should display all strains.
    * Each strain component should display the strain name, terpenes, feelings, thc %, and cbd %
    * These components (including CSS) have to be created by you
  * One page should dispay all terpenes
    * Each terpene should display all of the feelings that relate to it
    * These components (including CSS) have to be created by you
* Each strain component should include the ui to update the terpenes for that strain
* Milligram.css is included, but any CSS framework can be used

## File Structure

### `weed-data-*.csv`
This is data dump of cannabis product information including strain names, terpenes, feelings, THC %, and CBD %

### `client/`
This folder contains all of the client-side react scripts. It was bootstrapped with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). Reference that link for any extra documentation on the various files in this folder.

### `client/src/components/`
This folder should contain all of your component files for the dashboard.

### `client/src/css/`
This folder should contain any custom css you write.

### `api/`
This folder contains all of the back end node code. It was bootstrapped with [express-generator](https://github.com/expressjs/generator#readme). Reference that link for any extra documentation on the various files in this folder.

### `api/routes/`
This folder should contain any additional routes you choose to make

## Running the Project

Both the express server and the react dev server need to be running in different shells at the same time for this app to work.

To start the express server:

```bash
cd ./api
npm install
npm start
```

To start the react server
```bash
cd ./client
npm install
npm start
```

The express server is currently setup to run at `localhost:9000`  
The react server is currently setup to run at `localhost:3000` and it's setup to proxy to `localhost:9000`.

__To change the react server port:__  
Add a `.env` file to `./cient` and add `PORT=3002`

__To change the express server port:__  
Add a `.env` file to `./api` and add `PORT=3003`

## Closing Thoughts

The purpose of this code test is not only to illustrate to us how well you can use the technologies, but also to show how you can critically solve problems. Take the time to write code that's expressive and shows us your thought process thoughout this project. There's no wrong answer to a problem unless you're unable to give a reason why you chose a solution.