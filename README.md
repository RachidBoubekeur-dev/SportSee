# SportSee

## 1. General information

SportSee is the OpenClassrooms 12 project for training front-end developers.
The project is to create a new version of the user's profile page.
This page will allow the user in particular to follow the number of sessions performed as well as the number of calories burned.

## 2. Project

### 2.1 Prerequisites

-   [Create React App](https://create-react-app.dev)
-   [NodeJS](https://nodejs.org/en/) where [Docker Desktop](https://www.docker.com/products/docker-desktop)
-   [Yarn](https://yarnpkg.com/)
-   [Axios](https://axios-http.com/)
-   [PropTypes](https://fr.reactjs.org/docs/typechecking-with-proptypes.html)
-   [Recharts](https://recharts.org/en-US)
-   and [coffee](https://en.wikipedia.org/wiki/Coffee) ☕...

*   NodeJS: If you are working with several versions of NodeJS, I recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

1. Fork the repository.

2. Clone it on your computer.

3. In the main folder to install:

    - [Create React App](https://create-react-app.dev) with `npx create-react-app my-app` where `npm init react-app my-app` or `yarn create react-app my-app`.
    - [Axios](https://axios-http.com/) with `npm i axios` where `yarn add axios`.
    - [PropTypes](https://fr.reactjs.org/docs/typechecking-with-proptypes.html) with `npm i prop-types` where `yarn add prop-types`.
    - [Recharts](https://recharts.org/en-US/guide) with `npm i recharts` where `yarn add recharts`.
    - execude `npm start`.

4. In the API folder to install:

    1. Project (without Docker)

        - [NodeJS](https://nodejs.org/en/).
        - [Yarn](https://yarnpkg.com/) avec `npm install -g yarn`.
        - The `yarn` command will allow you to install the dependencies.

    2. Project (with Docker)

        1. With Docker Desktop

            - [Docker Desktop](https://www.docker.com/products/docker-desktop).
            - The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
            - The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
            - The `docker container stop micro-api` command will allow you to stop your micro-api.
            - The `docker container rm micro-api` command will allow you to delete your micro-api container

        2. With Vscode and container remotes

            Finally, if you have VsCode, you can easily launch your project in a docker environment.

            You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

            Once in the container, run the `yarn dev` command.

### 2.3 Optional

1. This project uses [Storybook](https://storybook.js.org/) and [Sass](https://sass-lang.com/) if you want to use them, you just need to install:
    - [Storybook](https://storybook.js.org/) with `npx sb init`.
    - Once install `npm run storybook`.
    - [Sass](https://sass-lang.com/) with `npm i sass`.
