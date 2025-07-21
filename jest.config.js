export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.module\\.s[ac]ss$': 'identity-obj-proxy',
    '\\.s[ac]ss$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
