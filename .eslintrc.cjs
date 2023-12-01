module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-tsdoc'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tsdoc/syntax':          'error',
    'no-dupe-class-members': 'off',
    'no-redeclare':          'off',
    'no-throw-literal':      'off',
    'no-unused-expressions': 'off',
    'no-var':                2,
    'prefer-const':          2,
    'no-extra-boolean-cast': 'off',
    'object-curly-spacing':  [
      2,
      'always',
    ],
    'no-useless-escape': 'off',
    semi:                [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error',
      {
        arrays:    'always-multiline',
        objects:   'always-multiline',
        imports:   'always-multiline',
        exports:   'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'key-spacing': [
      'error',
      {
        align: {
          beforeColon: false,
          afterColon:  true,
          on:          'value',
        },
      },
    ],
    'no-unused-vars':        'off',
    'newline-before-return': 'error',
  },
}
