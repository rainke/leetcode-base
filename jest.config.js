module.exports = {
  browser: true,
  verbose: true,
  rootDir: __dirname,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '/__test__/.*\\.spec\\.ts$',
};
