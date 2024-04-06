# @nharox/next-stylelint-config

Shared [Stylelint](https://stylelint.io/) config for [Next.js](https://nextjs.org/) projects.

## Installation

1. Install package as a dev dependency

```bash
npm install --save-dev @nharox/next-stylelint-config
```

2. Update `package.json`

```js
{
  // ...
  "stylelint": {
    "extends": "@nharox/next-stylelint-config"
  }
}
```

3. Add the following script in your `package.json`

```js
{
  // ...
  "scripts": {
    // ...
    "stylelint": "stylelint --fix \"**/*.css\""
  }
}
```

## Stylelint Configs

- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
