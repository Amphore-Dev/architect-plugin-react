# Architect plugin: React

The **architect-plugin-react** extends the functionality of the [Architect CLI tool](https://www.npmjs.com/package/@amphore-dev/architect), enabling developers to easily generate React components, React Native components, and TypeScript versions for both. This plugin simplifies the creation of components for modern JavaScript and TypeScript frameworks, making it easy to scaffold projects and maintain consistency in your codebase.

## Features

- Generate React components and React Native components.
- Supports both JavaScript and TypeScript versions for React and React Native.
- Easy integration with the Architect CLI tool for seamless project management.
- Customizable output directory and component structure.

## Supported Languages

The plugin supports the following languages for component generation:

| Language                  | Description                             |
| ------------------------- | --------------------------------------- |
| `react`                   | Standard React component (JavaScript)   |
| `react-typescript`        | React component using TypeScript        |
| `react-native`            | React Native component (JavaScript)     |
| `react-native-typescript` | React Native component using TypeScript |

## Blueprints

The blueprints are matched with the folder names of the structure (e.g. with [@amphore-dev/architect-atomic-structure](https://www.npmjs.com/package/@amphore-dev/architect-atomic-structure)):

| Folder       | React / React Native                    | TypeScript                                |
| ------------ | --------------------------------------- | ----------------------------------------- |
| `components` | Function component                      | Function component with a props interface |
| `pages`      | Page component (named + default export) | Page component with a props interface     |
| `hooks`      | Hook with a `useState`                  | Generic hook with a `useState<T>`         |
| `types`      | JSDoc `@typedef`                        | `type` declaration                        |

React Native variants use `react-native` components (`View`, `SafeAreaView`, `Text`).
Other folders use Architect's default blueprint, with the extension of the language.

## Installation

Install the plugin in your project directory with either npm or Yarn:

```bash
npm install --save-dev @amphore-dev/architect-plugin-react
```

or

```bash
yarn add --dev @amphore-dev/architect-plugin-react
```

## Usage

To configure the plugin, modify the `architect.config.json` file in your project directory. Specify the language you want to use for component generation:

```json
{
  "plugins": ["@amphore-dev/architect-plugin-react"],
  "language": "react-typescript",
  "outputDir": "src"
}
```

## License

This plugin is licensed under the ISC License.
