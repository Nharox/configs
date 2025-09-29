# @nharox/astro-eslint-config

Shared [ESLint](https://eslint.org/) config for [Astro](https://astro.build/) projects.

## Installation

1. Install package as a dev dependency:

```bash
npm install --save-dev @nharox/astro-eslint-config
```

2. Create `eslint.config.mjs` at the root and add the following code:

```js
import getConfig from '@nharox/astro-eslint-config';

export default getConfig();
```

3. Add the following script in your `package.json`:

```js
{
  // ...
  "scripts": {
    // ...
    "eslint": "eslint --fix \"src/**/*.{astro,ts}\""
  }
}
```

4. (Optional) You can customize the config by passing an object:

```js
export default getConfig({
  // Files to be ignored
  ignores: [],
  // Additional ESLint rules
  additionalRules: {},
});
```
