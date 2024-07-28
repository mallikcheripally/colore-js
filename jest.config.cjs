module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
