# eslint-config-airbnb-x

Unofficial migration of the airbnb styleguide from eslintrc format to [flat config ](https://eslint.org/docs/latest/use/configure/configuration-files-new) file format.

## Setup

### Install

```
npm i -D eslint-config-airbnb-x
```

### Configure

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
import airbnb from 'eslint-config-airbnb-x';
```

or with typescript support:

```js
import airbnb from 'eslint-config-airbnb-x/ts';
```

To add custom configurations append them to the default export of your `eslint.config.js`

```js
export default [
	airbnb,
	// other configs ...
]
```


The default export is a single [configuration object](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects) which is an optimized version of the [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) config.

- All deprecated rules are disabled by default
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) and [eslint-stylistic](https://github.com/eslint-stylistic/eslint-stylistic) were added
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) was replaced by [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) is used by default to support ['imports' and 'exports' fields in package.json](https://github.com/import-js/eslint-plugin-import/issues/1868)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is used to support [typescript](https://www.typescriptlang.org/).

### Customize

If you want to override one of the rules of the added plugins, make sure to use the corresponding prefix:

| Original Prefix        | New prefix  |
| ---------------------- | ----------- |
| `import-x/*`           | `import/*`  |
| `n/*`                  | `node/*`    |
| `@stylistic/*`         | `style/*`   |
| `@typescript-eslint/*` | `type/*`    |

You can also use only specific configuration files:

```js
import { node } from 'eslint-config-airbnb-x/configs';

export default [node];
```

#### Plain Compat

These are just the plain, unomptimized converted configs (use them at your own risk).

```js
import airbnbLegacyConfigs from 'eslint-config-airbnb-x/legacy';
// import airbnbLegacy from 'eslint-config-airbnb-x/legacy-merged';

console.log(Object.keys(airbnbLegacyConfigs));
// [
//   'bestPractices',
//   'errors',
//   'es6',
//   'imports',
//   'node',
//   'strict',
//   'style',
//   'variables'
// ]
```

### Roadmap

- 🔳 node: differentiate esm and cjs globals (?)
- 🔳 import-x: wait for [https://github.com/un-ts/eslint-plugin-import-x/pull/85](https://github.com/un-ts/eslint-plugin-import-x/pull/85)
- 🔳 support React (jsx, tsx)
