# Next.js starter kit

Next.js starter kit, boilerplated using [next.js](https://github.com/zeit/next.js/).

## App Structure

The App structure is following feature first modular approach.
It is an extension of the ducks approach, called [re-ducks](https://github.com/alexnm/re-ducks) with minor changes.

```
react-redux-starter
.
├── .next                  # next build
├── .storybook             # storybook config
│   └── addons
│   └── config
│   └── Container
├── node_modules
├── pages                  # Next.js views imported from src/views
├── static                 # app images, fonts etc.
└── src
    ├── components         # components devided per feature
    ├── redux
    │   └── middlewares
    │   └── state
    │   └── store
    ├── routes             # next-routes routes config
    ├── utils
    └── views              # view comoponents which represent app main pages
```

## Features

+ [next.js](https://github.com/zeit/next.js/) for creating server rendered react applications.
+ [React](https://facebook.github.io/react/) as the view.
+ [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
+ [Storybook](https://storybook.js.org/) UI development and documentation enviorment.
+ [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
+ An api middleware based on [redux-pack](https://github.com/lelandrichardson/redux-pack) with some changes to deal with asynchronous actions.
+ [redux-logger](https://github.com/evgenyrodionov/redux-logger) as logging middleware for redux actions.
+ [styled-components](https://github.com/styled-components/styled-components) as css in js styling solution for components based app.
+ [styled-normalize](https://github.com/sergeysova/styled-normalize) to normalize global browser css.
+ [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
+ [Semantic-ui](https://semantic-ui.com/) as css styling framework, including [semantic-ui-react](https://react.semantic-ui.com/introduction)
+ [Prettier](https://github.com/prettier/prettier) an addition to ESlint code formatter.
+ [express](https://github.com/expressjs/express) for our server rendering.
+ [next-routes](https://github.com/fridays/next-routes) as the routing solution for next.js
+ [prop-types](https://github.com/facebook/prop-types) as the runtime type checker.
+ [ESLint](http://eslint.org/) to maintain a consistent javascript code style.
+ [pre-commit](https://github.com/observing/pre-commit) runs pre-commit lint and tests checks on staged files using [lint-staged](https://github.com/okonet/lint-staged).
+ [Jest](https://facebook.github.io/jest/) as the solution for writing unit tests and snapshots with code coverage support, with: 
  - [Enzyme](https://github.com/airbnb/enzyme) utilities for testing 
  - [jest-styled-components](https://github.com/styled-components/jest-styled-components) utilities for testig styled-components.
  - [react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer) for rendering components in tests.
+ [immutable.js](https://github.com/facebook/immutable-js/) Immutable persistent data collections for Javascript which increase efficiency and simplicity, we also use [redux-immutable](https://github.com/gajus/redux-immutable) to combine our immutable reducers.
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
yarn dev 
```

## Running prod or stage build locally

**1. Run the build script:**

```bash
yarn build
```

**2. Start the build:**

```bash
yarn start
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)

## NPM Script Commands

| `yarn <script>`    | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `dev`            | Run your app in development mode at `localhost:8080`.           |
| `test`             | Run testing once (with code coverage reports).                                             |
| `build`       | Build application for production. build in .next folder.                                             |
| `start`       | start application in production mode locally for testing. uses the build in .next folder.                                             |                                       |
| `lint`             | Runs lint check with fix flag.                                             |
| `storybook`             | Run storybook application at `localhost:6006`                                             |
| `build-storybook`             | Build storybook for production                                             |
| `bundle:view`             | View the cretead bundle for debugging purposes                                             |

## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow these installation guides to use it:

**For Chrome**

* From [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
