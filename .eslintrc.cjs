module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': [ 'error' ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
