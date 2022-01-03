module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc-node/jest',
      {
        experimentalDecorators: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  testRegex: '.spec.(t|j)s$',
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
