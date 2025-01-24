import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments'
import * as mdx from 'eslint-plugin-mdx'
import eslintPluginUseEncapsulation from 'eslint-plugin-use-encapsulation'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  mdx.flat,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        React: true, // or 'readonly'
      },
    },
    plugins: {
      'use-encapsulation': eslintPluginUseEncapsulation,
      'eslint-comments': eslintPluginEslintComments,
    },
    rules: {
      'eslint-comments/require-description': 'error',
      'eslint-comments/no-unlimited-disable': 'error',
      'no-extra-boolean-cast': 'error',
      'no-useless-catch': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-with': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-empty-pattern': 'error',
      'no-inner-declarations': 'error',
      'no-self-assign': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'no-delete-var': 'error',
      'no-var': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-import-assign': 'error',
      'no-obj-calls': 'error',
      'no-redeclare': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-labels': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'valid-typeof': 'error',

      // Additional rules to emulate Biome
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'table'] }],
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-proto': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-throw-literal': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'require-await': 'error',
      yoda: 'error',
      'prefer-object-spread': 'error',
      'object-shorthand': 'error',
      'no-array-constructor': 'error',
      'no-new-object': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],

      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
      '@next/next/no-page-custom-font': 'off',
      'react/no-unescaped-entities': 'off',
      'use-encapsulation/prefer-custom-hooks': 'error',
    },
  },
]

export default eslintConfig
