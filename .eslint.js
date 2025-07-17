const { SourceType } = require("expo-calendar");

module.exports = {
    env: {
        es2021: true,
        node: true,
        'react-native/react-native': true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        SourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'react-native',
        'react-hooks',
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'warn',
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
    },
}
