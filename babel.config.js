module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          '@redux': './src/redux',
          api: './src/api',
        },
      },
    ],
  ],
}
