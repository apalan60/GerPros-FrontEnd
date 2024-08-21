import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import stylisticJs from '@stylistic/eslint-plugin-js';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'off',
      '@stylistic/quotes': [2, 'single'],
      '@stylistic/semi': [2, 'always'],
    },
  },
  { languageOptions: { globals: globals.browser } },
  eslintPluginPrettierRecommended,
);
