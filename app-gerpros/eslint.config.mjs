import withNuxt from './eslint.config.mjs';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'off',
      '@stylistic/js/quotes': [2, 'single'],
      '@stylistic/js/semi-style': [2, 'last'],
    },
  },
  { languageOptions: { globals: globals.browser } },
  eslintPluginPrettierRecommended,
);
