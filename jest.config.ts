export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: 'tsconfig.app.json',
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-router|react-router-dom|@remix-run)/)',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/main.tsx',
        '!src/vite-env.d.ts',
        '!src/i18n.ts',
        '!src/App.tsx',
        '!src/components/Layout.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 80,
            lines: 96,
            statements: 96,
        },
    },
    coverageReporters: ['text', 'lcov', 'html'],
};
