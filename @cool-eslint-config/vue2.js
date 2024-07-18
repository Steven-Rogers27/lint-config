module.exports = {
  extends: ['@cool/eslint-config-recommended'],
  overrides: [
    {
      // 使用vue2开发的服务
      files: ['src/**/*.vue'],
      extends: ['plugin:vue/recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          // Script parser for `<script>`
          js: '@babel/eslint-parser',
          // Script parser for `<script lang="ts">`
          ts: '@typescript-eslint/parser',
        },
        sourceType: 'module',
        vueFeatures: {
          filter: true,
        },
      },
      rules: {
        'vue/html-self-closing': ['error', {
          html: {
            normal: 'never',
            void: 'never',
          },
        }],
      },
    },
  ],
}

