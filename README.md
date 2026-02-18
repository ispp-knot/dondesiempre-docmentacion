## Requisitos

- Node.js **20.20.0**

Si no tienes Node 20, descárgalo e instálalo desde:
https://nodejs.org/es/download

Puedes comprobar tu versión con:
```bash
node -v
```

En la terminal de VS Code, dentro del proyecto:
```bash
npm install
npm start
```



# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
