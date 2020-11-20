module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'function-paren-newline': 0,
    'no-unused-expressions': 0,
    'array-callback-return': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-param-reassign': 0,
    'no-self-import': 0,
    'import/no-cycle': 0,
    'arrow-body-style': 0,
    'max-len': [
      'error',
      {
        code: 160,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
}
