module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-tsdoc', '@typescript-eslint', 'eslint-plugin-vitest'],
  globals: {
    React:   true,
    process: true,
    vitest: true
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tsdoc/syntax':          'error',
    'no-dupe-class-members': 'off',
    'no-redeclare':          'error',
    'no-throw-literal':      'error',
    'no-unused-expressions': 'error',
    'no-var':                'error',
    'prefer-const':          'error',
    'no-extra-boolean-cast': 'error',
    'object-curly-spacing':  [
      'off',
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
    'react/no-unescaped-entities': 'off',
    'no-extra-semi':               'error',
    'quote-props':                 ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'always'],
    indent:                        ['error', 2],
    'react/react-in-jsx-scope':    'off',
    'array-bracket-spacing':       ['error', 'never'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any':                'off',
    '@typescript-eslint/no-unused-vars':                 [
      'error',
      {
        varsIgnorePattern: '^env$|^_.+?',
      },
    ],
    // 'multiline-comment-style': ['error', 'starred-block'],
    quotes:                    ['error', 'single'],
    'jsx-quotes':              ['error', 'prefer-single'],
  },
}
