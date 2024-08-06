# Spam
This application is an API able to receive an persist data abou spam calls and spam messages as well as verify if a number belongs to an spammer or not.

## Installation
> This project suports development containers.\
Before starting, make sure youre in code and have **[Docker](https://www.docker.com/)** and the **[Dev containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)** pluggin installed.

Use the **Dev Containers: Reopen in Container**:
1. Press `command + shift + p`.
2. Select `Open in Container`.

Now that your code environment is running inside a development container with suport to AdonisJS 5, you can install the project:
1. `npm install`

## Run
This development container has all recommended AdonisJS 5 pplugins, so youre able to run the project with:
1. Press `command + shift + p`.
2. Type `Serve`.
3. Press `enter`.\

You can also run ace commands manually through code's terminal.\
`cd "/workspace" && "node" ace serve -w `

## Dependencies
This development container takes care of setting up the dependencies needed for this project.
> See more in `./.devcontainer`.