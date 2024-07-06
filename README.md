![active development](https://img.shields.io/badge/active%20dev-yes-brightgreen.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/simcard0000/codex-browser-extension.svg)
# codex-browser-extension
❃ Codex - keep track of your research.

### What's this all about now?
Visit back later! To-do:
- Check out: [How I built a Chrome Extension with React and Vite (Without CrxJS Plugin)](https://ajaynjain.medium.com/how-i-built-a-chrome-extension-with-react-and-vite-without-crxjs-plugin-b607194c4f5e)
- Fix project structure such that rendering works when opening with Mozilla debugging



### Development

> [!IMPORTANT]
> [`create-react-app`](https://create-react-app.dev/), which was first used to scaffold this project, is now deprecated. Instead, [`vite`](https://vitejs.dev/) is now used.

#### Optional Plugins

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, Vite recommends updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
