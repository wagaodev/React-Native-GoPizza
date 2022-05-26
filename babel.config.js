module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@store': './src/store',
          '@assets': './src/assets',
          '@types': './src/types',
          '@constants': './src/constants',
          '@global': './src/global',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
