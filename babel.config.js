module.exports = {
    plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.json'],
        root: ['./src'],
      },
    ],
    'react-native-paper/babel',
    'inline-dotenv',
  ],
  presets: ['module:@react-native/babel-preset'],
};
