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
- [`nextrate boilerplate`](#nextrate-boilerplate)
- [`nextrate help [COMMAND]`](#nextrate-help-command)

  ### `nextrate generate`

  👀 Generate a new Next.js component using nextrate

  ```bash
  USAGE
  $ nextrate generate

  DESCRIPTION
  👀 Generate a new Next.js component using nextrate
  ```

  ### `nextrate boilerplate`

  🌈 Customize the default nextrate boilerplate

  ```bash
  USAGE
  $ nextrate boilerplate

  OPTIONS
  -f, --file=file (required) 📦 Path to the file which contains the boilerplate

  -t, --type=type (required) 🌀 Type of boilerplate, whether it is a boilerplate for 'components' or
  'pages'

  EXAMPLE
  $ nextrate boilerplate -file=boilerplate.txt -type=components
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

If you are using nextrate in your project, consider adding the below badge to your README.md:

![](https://img.shields.io/badge/using-nextrate%20%F0%9F%A6%84-blue?style=for-the-badge)

```markdown
![](https://img.shields.io/badge/using-nextrate%20%F0%9F%A6%84-blue?style=for-the-badge)
```

## 📝 License

Copyright © 2022 Kira. <br />
This project is [MIT](./LICENSE) licensed.
