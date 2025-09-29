# @nharox/postcss-config

Shared [PostCSS](https://postcss.org/) config.

## Installation

1. Install package as a dev dependency:

```bash
npm install --save-dev @nharox/postcss-config
```

2. Create `postcss.config.js` at the root and add the following code:

```js
import getConfig from '@nharox/postcss-config';

export default getConfig();
```

3. (Optional) You can customize the config by passing an object:

```js
export default getConfig({
  // Files for `@csstools/postcss-global-data`
  files: [],
  // Additional PostCSS plugins
  additionalPlugins: {},
});
```

4. (Optional) Make sure to set a custom property if you want to use the `--spacing()` function:

```css
:root {
  --spacing: 0.25rem;
}
```

## PostCSS Plugins

- [@csstools/postcss-global-data](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-global-data)
- [postcss-functions](https://github.com/andyjansson/postcss-functions)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
