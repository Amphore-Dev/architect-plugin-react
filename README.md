# Architect Plugin: React

The **Architect Plugin: React** extends the functionality of the Architect CLI tool, enabling developers to easily generate React components, React Native components, and TypeScript versions for both. This plugin simplifies the creation of components for modern JavaScript and TypeScript frameworks, making it easy to scaffold projects and maintain consistency in your codebase.

## Features

-   Generate React components and React Native components.
-   Supports both JavaScript and TypeScript versions for React and React Native.
-   Easy integration with the Architect CLI tool for seamless project management.
-   Customizable output directory and component structure.

## Supported Languages

The plugin supports the following languages for component generation:

| Language                  | Description                             |
| ------------------------- | --------------------------------------- |
| `react`                   | Standard React component (JavaScript)   |
| `react-typescript`        | React component using TypeScript        |
| `react-native`            | React Native component (JavaScript)     |
| `react-native-typescript` | React Native component using TypeScript |

## Installation

Install the plugin in your project directory with either npm or Yarn:

```bash
npm install --save-dev architect-plugin-react
```

or

```bash
yarn add --dev architect-plugin-react
```

## Usage

To configure the plugin, modify the `architect.config.json` file in your project directory. Specify the language you want to use for component generation:

```json
{
    "language": "react-typescript",
    "outputDir": "src"
    // other configuration properties...
}
```
