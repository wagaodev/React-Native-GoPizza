module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@global/(.*)': '<rootDir>/src/global/$1',
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '.+\\.ts?$': 'ts-jest',
  },
  setupFiles: ['./jest-setup.js'],
};
