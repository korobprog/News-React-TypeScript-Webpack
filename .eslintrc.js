module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },

    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
      'plugin:eslint-comments/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'plugin:react-redux/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'material-ui/rule-name': 2,
      'react-redux/connect-prefer-named-arguments': 2,
      '@date-io/date-fns': 'off',
      antd: 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },

    plugins: ['material-ui', 'react-redux', 'antd'],
  },
}
