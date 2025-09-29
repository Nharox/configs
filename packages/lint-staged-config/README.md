# @nharox/lint-staged-config

Shared [lint-staged](https://github.com/lint-staged/lint-staged) config.

## Installation

1. Install package as a dev dependency:

```bash
npm install --save-dev @nharox/lint-staged-config
```

2. Create `lint-staged.config.mjs` at the root and add the following code:

```js
export { default } from '@nharox/lint-staged-config';
```

3. Setup [husky](https://typicode.github.io/husky/):

```bash
npx husky init
```

4. Add the following code in the just created `.husky/pre-commit` file:

```bash
npx lint-staged
```
