# SportSee

## 1. General information

SportSee is the OpenClassrooms 12 project for training front-end developers.
The project is to create a new version of the user's profile page.
This page will allow the user in particular to follow the number of sessions performed as well as the number of calories burned.

## 2. Project

### 2.1 This project uses:

-   [Create React App](https://create-react-app.dev)
-   [NodeJS](https://nodejs.org/en/) where [Docker Desktop](https://www.docker.com/products/docker-desktop)
-   [Yarn](https://yarnpkg.com/)
-   [Axios](https://axios-http.com/)
-   [PropTypes](https://fr.reactjs.org/docs/typechecking-with-proptypes.html)
-   [Recharts](https://recharts.org/en-US)
-   [Storybook](https://storybook.js.org/)
-   [Sass](https://sass-lang.com/)

### 2.2 Launching the project

1. To start, you will need to `git clone` the project on your machine via a command in your terminal: `git clone https://github.com/RachidBoubekeur-dev/RachidBoubekeur_DA12_12072021.git`.

2. Still in your terminal, go to the newly created folder RachidBoubekeur_DA12_12072021.

3. In this folder, install the packages necessary for the proper functioning of the project via the `npm install` command.

4. In the API folder, install the packages necessary for the proper functioning of the project via the `npm install` command.

    1. The `yarn` command will allow you to install the dependencies.

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

    3. Run the `yarn dev` command.

5. In the main folder once all the dependencies are installed launch the application with `npm start`.

### 2.3 Optional

1. This project uses [Storybook](https://storybook.js.org/) if you want to use it, you just need to run `npm run storybook` command.
