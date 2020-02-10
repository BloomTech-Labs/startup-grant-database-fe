# Founder Grants

[![Maintainability](https://api.codeclimate.com/v1/badges/043f48c91ebd9548fd1d/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/startup-grant-database-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/043f48c91ebd9548fd1d/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/startup-grant-database-fe/test_coverage)

You can find the deployed project at [Founder Grants](https://grantly-b5b58.firebaseapp.com/).

## Contributors

[Mario Amaya: Team Lead, Web Dev](https://github.com/MAmaya1) 

[Kristin Barr: Web Dev](https://github.com/Kristinbarr)

[Benita Beamer: Web Dev](https://github.com/bea03)

[Ben Griffin: Web Dev](https://github.com/B-Griffinn)

[Daniel Jones: Web Dev](https://github.com/djones36)

## Project Overview

[Trello Board](https://trello.com/b/C6YCXNQh/startup-grant-database)

[Product Canvas](https://www.notion.so/Startup-Grant-Database-f126d11906074d2d9ec6f77eb6b51363)

[UX Design files](https://www.figma.com/file/ERQVRwQYEfzOh9VlQCBas5/Labs18_Startup-Grant-Database)

Founder Grants connects early stage founders, hackers, and tinkerers with the resources they need to create the next wave of technology.

We provide an easily searchable database of grants geared to those in the early technology field in one central repository.

### Key Features

- List of available grants
- Grant detail window
- Filter in real time
- Submit a new grant to the database

## Tech Stack

### Front end built using:

- React
- Redux
- Firebase
- Auth0
- Material UI

#### React

We chose React because it is:

- Modular and component based
- High speed (virtual DOM)
- Rich library and plugin ecosystem
- Great community and support

#### Redux

We chose Redux because it is:

- Easily compatible with React
- Best in class state management
- Scales well
- Great documentation

#### Firebase

We chose Firebase because it is:

- Depth and bredth of services
- Support and documentation
- Safety and security
- Ease of use

#### Auth0

We chose Auth0 because it is:

- Easy to integrate into application
- Scalability

#### Material UI

We chose Material UI because it is:

- Sleek and simple
- Lots of great solutions out of the box
- Customizable

#### Front end deployed to `Firebase`

#### [Back end](https://github.com/Lambda-School-Labs/startup-grant-database-be) built using:

#### Node / Express

- JavaScript integration plays well with front end
- Simple but powerful
- Easily customizable with lots of plugins

# APIs

## [Auth0 Authentication API](https://founder-grants.auth0.com)

We used Auth0 for our authentication API. It provides user profiles with lots of scalable services and out of the box functionality.

## [Database API](https://grantly-staging.herokuapp.com/api/)

We have our back end database API deployed to Heroku. Heroku supports great PostgresSQL integrations which we use for the database and has great reliability.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| example.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| example.svg    | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

🚫explain how to install the required dependencies to get this project up and running with yarn and NPM

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Added Features (Labs 18)

- Toggle Navigation Drawer
- Administrator table view of Grants
- User Interface Cleanup

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](🚫*link to your backend readme here*) for details on the backend of our project.
