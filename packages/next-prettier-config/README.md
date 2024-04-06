# @nharox/next-prettier-config

Shared [Prettier](https://prettier.io/) config for [Next.js](https://nextjs.org/) projects.

## Installation

1. Install package as a dev dependency

```bash
npm install --save-dev @nharox/next-prettier-config
```

2. Update `package.json`

```js
{
  // ...
  "prettier": "@nharox/next-prettier-config"
}
```

3. Add the following script in your `package.json`

```js
{
  // ...
  "scripts": {
    // ...
    "format": "prettier --write \"**/*.{ts,tsx}\""
  }
}
```

## Prettier Plugins

- [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
