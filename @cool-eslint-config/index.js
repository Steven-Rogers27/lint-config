const { join, } = require('node:path') 

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowReserved: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['@babel', '@html-eslint'],
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-useless-escape': ['error'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
    }],
    'multiline-comment-style': ['warn', 'bare-block'],
    'no-unused-vars': ['error', { args: 'none' }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  },
  overrides: [
    {
      files: ['public/**/*.html', 'src/**/*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/indent': ['error', 2],
      },
    },
    {
      files: ['public/**/*.html', 'src/**/*.html'],
      plugins: ['html'],
      settings: {
        'html/indent': '+2', // indentation is the <script> indentation plus two spaces.
        'html/report-bad-indent': 'error',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': false,
          },
        ],
        '@typescript-eslint/ban-tslint-comment': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            allow: ['arrowFunctions'],
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
}
