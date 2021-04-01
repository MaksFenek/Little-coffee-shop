module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: ['warn', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
