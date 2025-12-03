import '@testing-library/jest-dom';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

// Mock react-i18next
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            changeLanguage: () => new Promise(() => { }),
            language: 'fr',
        },
    }),
    initReactI18next: {
        type: '3rdParty',
        init: () => { },
    },
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
});

// Mock window.open
Object.defineProperty(window, 'open', {
    value: jest.fn(),
    writable: true,
});

// Mock utils/env for EmailJS environment variables
jest.mock('./src/utils/env', () => ({
    getEnvVar: (key: string) => {
        const envVars: Record<string, string> = {
            'VITE_EMAILJS_SERVICE_ID': 'test_service_id',
            'VITE_EMAILJS_TEMPLATE_ID': 'test_template_id',
            'VITE_EMAILJS_PUBLIC_KEY': 'test_public_key',
        };
        return envVars[key];
    },
}));

// Mock @emailjs/browser
jest.mock('@emailjs/browser', () => ({
    __esModule: true,
    default: {
        sendForm: jest.fn(() => Promise.resolve({ status: 200, text: 'OK' })),
    },
}));
