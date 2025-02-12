# @nharox/astro-prettier-config

Shared [Prettier](https://prettier.io/) config for [Astro](https://astro.build/) projects.

## Installation

1. Install package as a dev dependency

```bash
npm install --save-dev @nharox/astro-prettier-config
```

2. Update `package.json`

```js
{
  // ...
  "prettier": "@nharox/astro-prettier-config"
}
```

3. Add the following script in your `package.json`

```js
{
  // ...
  "scripts": {
    // ...
    "format": "prettier --write \"src/**/*.{astro,ts}\""
  }
}
```

## Prettier Plugins

- [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports)
- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro/)
