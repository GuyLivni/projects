# React Redux Starter

A react redux boilerplate based on [create-react-app](https://github.com/facebook/create-react-app).

## App Structure

The App structure is following feature first modular approach.
It is an extension of the ducks approach, called [re-ducks](https://github.com/alexnm/re-ducks) with some changes of my own.

```
react-redux-starter
.
├── .storybook             # storybook config
│   └── addons
│   └── config
│   └── Container
├── flow-typed             # flow centralized types
├── node_modules
├── public
└── src
    ├── assets             # app images, fonts etc.
    ├── components         # components devided per feature
    ├── redux
    │   └── middlewares
    │   └── state
    │   └── store
    ├── routes             # react-router routes
    ├── utils
    └── views              # view comoponents which represent app main pages
```

## Features

+ [Create-react-app](https://github.com/facebook/create-react-app) for creating react applications
+ [React](https://facebook.github.io/react/) as the view.
+ [React Router v4](https://reacttraining.com/react-router/) as the router.
+ [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
+ [Storybook](https://storybook.js.org/) UI development and documentation enviorment.
+ [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
+ An api middleware based on [redux-pack](https://github.com/lelandrichardson/redux-pack) with some changes to deal with asynchronous actions.
+ [redux-logger](https://github.com/evgenyrodionov/redux-logger) as logging middleware for redux actions.
+ [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) as css in js styling solution for components based app.
+ [styled-normalize](https://github.com/sergeysova/styled-normalize) to normalize global browser css.
+ [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
+ [flow](https://github.com/facebook/flow) as the static type checker.
+ [ESLint](http://eslint.org/) to maintain a consistent javascript code style.
+ [pre-commit](https://github.com/observing/pre-commit) runs pre-commit lint and tests checks on staged files using [lint-staged](https://github.com/okonet/lint-staged).
+ [Prettier](https://github.com/prettier/prettier) an addition to ESlint code formatter.
+ [Jest](https://facebook.github.io/jest/) as the solution for writing unit tests and snapshots with code coverage support, with: 
  - [Enzyme](https://github.com/airbnb/enzyme) utilities for testing 
  - [jest-styled-components](https://github.com/styled-components/jest-styled-components) utilities for testig styled-components.
  - [react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer) for rendering components in tests.
+ [Yarn](https://yarnpkg.com/lang/en/) as the package manager.

## Requirements

* [node](https://nodejs.org/en/) >= 8.0
* [Yarn](https://yarnpkg.com/en/) >= 1.3

## Getting Started

**1. Install all of the dependencies:**

```bash
yarn
```

**2. Start dev env:**

```bash
yarn start 
```
Now the app should be running at [http://localhost:3000/](http://localhost:3000/)

> Note: If port 3000 is taken it will ask you permission to run on diffrent port.

## NPM Script Commands

| `yarn <script>`    | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `start`            | Run your app on the development server at `localhost:3000`. HMR will be enabled.           |
| `build`            | Build application for production. build in ./build folder.                     |
| `test`             | Run testing once (with code coverage reports).                                             |
| `eject`             | Eject create-react-app and show all webpack configs.                                             |
| `lint`             | Runs lint check with fix flag.                                             |
| `storybook`             | Run storybook application at `localhost:9009`                                             |
| `build-storybook`             | Build storybook for production                                             |

## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow these installation guides to use it:

**For Chrome**

* From [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
