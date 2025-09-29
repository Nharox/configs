# @nharox/astro-stylelint-config

Shared [Stylelint](https://stylelint.io/) config for [Astro](https://astro.build/) projects.

## Installation

1. Install package as a dev dependency:

```bash
npm install --save-dev @nharox/astro-stylelint-config
```

2. Update `package.json`:

```js
{
  // ...
  "stylelint": {
    "extends": "@nharox/astro-stylelint-config"
  }
}
```

3. Add the following script in your `package.json`:

```js
{
  // ...
  "scripts": {
    // ...
    "stylelint": "stylelint --fix \"src/**/*.{astro,css}\""
  }
}
```

4. Update settings of VS Code:

```js
{
  // ...
  "stylelint.validate": ["astro", "css", "postcss"]
}
```

## Stylelint Configs

- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order)
- [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## Stylelint Plugins

- [stylelint-use-logical](https://github.com/csstools/stylelint-use-logical)
