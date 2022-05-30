module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
};
