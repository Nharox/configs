import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default ({ ignores = [], additionalRules = {} } = {}) => {
  const rules = {
    'no-undef': 'off',
    ...additionalRules,
  };

  return defineConfig([
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    { ignores },
    { rules },
  ]);
};
