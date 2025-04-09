import { defineConfig } from 'eslint/config'; 
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'curly': 'error'
    },
  },
  tseslint.configs.recommended,
]);





// import { defineConfig } from 'eslint/config';  
// import globals from 'globals';
// import js from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts}'],
//     languageOptions: {
//       globals: globals.node,
//     },
//     plugins: {
//       js,
//     },
//     extends: ['js/recommended'],
//     rules: {
//       'no-unused-vars': 'warn',
//       'no-undef': 'error',
//       'eqeqeq': ['error', 'always'],
//       'quotes': ['error', 'single'],
//       'semi': ['error', 'always'],
//       'indent': ['error', 2],
//       'curly': 'error',
//       'require-await': 'warn',
//       'no-return-await': 'error',
//       'no-eval': 'error',
//       'no-new-func': 'error',
//       'no-empty-function': 'warn',
//       'no-unreachable': 'error',
//       'no-console': 'warn',
//       'no-debugger': 'error',
//     },
//   },
//   tseslint.configs.recommended,
// ]);

