module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  // "transform": {
  //   "^.+\\.ts(x)?$": "ts-jest"
  // },
  // testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
