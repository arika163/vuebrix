module.exports = {
  root: true,
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: false,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {},
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.vue'],
      env: {
        browser: true,
        node: false,
        es6: true
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
