# 🦄 nextrate

A CLI tool for quickly generating Next.js components.

## ✨ Features

- Automatically add the file type to the component name using the folder name.
- Automatically adds the boilerplate code for components and pages.
- Helps you maintain a clean and consistent file naming convention.

## 🌈 Installation

- To install globally:

  ```bash
  npm install -g nextrate
  ```

- Installing it as a dev dependency:

  ```bash
  npm install nextrate --save-dev
  ```

- Trying it out using `npx`:

  ```bash
  npx nextrate
  ```

## 🔌 Usage

- [`nextrate generate`](#nextrate-generate)
- [`nextrate help [COMMAND]`](#nextrate-help-command)

  ### `nextrate generate`

  👀 Generate a new Next.js component using nextrate

  ```bash
  USAGE
  $ nextrate generate

  DESCRIPTION
  👀 Generate a new Next.js component using nextrate

  EXAMPLES
  $ nextrate generate

    ? enter the component name button
    ? enter the folder path where you want to generate the component components
    ? ✨ config: choose which type of extension do you want to use ? tsx
    🦄 Directory not found! Creating the directory...
    🦄 Directory created! Adding the component...
    🎉 Created button.component.tsx at components
    🌈 Added boilerplate to button.component.tsx at components
      √ Creating a component at components
  ```

  ### `nextrate help [COMMAND]`

  Display help for nextrate.

  ```bash
  USAGE
  $ nextrate help [COMMAND] [-n]

  ARGUMENTS
  COMMAND Command to show help for.

  FLAGS
  -n, --nested-commands Include all nested commands in the output.

  DESCRIPTION
  Display help for nextrate.
  ```

## 🎉 Demo

![](https://imgur.com/b9LM2iT.png)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 Kira. <br />
This project is [MIT](./LICENSE) licensed.
