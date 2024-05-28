import { isValidLch } from '@/validations/isValidLch';

describe('isValidLch', () => {
    test('valid LCH color values', () => {
        expect(isValidLch('lch(29.2345% 44.2 27)')).toBe(true);
        expect(isValidLch('lch(52.2345% 72.2 56.2)')).toBe(true);
        expect(isValidLch('lch(52.2345% 72.2 56.2 / .5)')).toBe(true);
        expect(isValidLch('lch(100% 0 0 / none)')).toBe(true);
        expect(isValidLch('lch(0% 0 0 / 0%)')).toBe(true);
        expect(isValidLch('lch(100 0 0)')).toBe(true);
        expect(isValidLch('lch(50 125 125)')).toBe(true);
        expect(isValidLch('lch(50 230 360deg)')).toBe(true);
        expect(isValidLch('lch(50 230 2rad)')).toBe(true);
        expect(isValidLch('lch(50 230 0.5turn)')).toBe(true);
    });

    test('invalid LCH color values', () => {
        expect(isValidLch('lch(29.2345 39.3825)')).toBe(false); // Missing h value
        expect(isValidLch('lch(29.2345% 39.3825%)')).toBe(false); // Missing h value
        expect(isValidLch('lch(29.2345% 39.3825 20.0664 50%)')).toBe(false); // Extra value
        expect(isValidLch('lch(110 0 0)')).toBe(false); // L value out of range
        expect(isValidLch('lch(50 250 360deg)')).toBe(false); // C value out of range
        expect(isValidLch('lch(50 125 125 / 1.5)')).toBe(false); // Alpha value out of range
        expect(isValidLch('lch(50 50)')).toBe(false); // Missing one value
        expect(isValidLch('lch(50 50%)')).toBe(false); // Missing one value
        expect(isValidLch('lch(50 50 / 50%)')).toBe(false); // Missing h value
        expect(isValidLch('lch(50 none 50 50)')).toBe(false); // Extra value
    });

    test('valid LCH color values with different formats', () => {
        expect(isValidLch('lch(29.2345% 39.3825 20.0664)')).toBe(true);
        expect(isValidLch('lch(50% 50% 50deg)')).toBe(true);
        expect(isValidLch('lch(100 0 0 / 1)')).toBe(true);
        expect(isValidLch('lch(50 0 0 / 50%)')).toBe(true);
        expect(isValidLch('lch(none 0 0)')).toBe(true);
    });

    test('valid LCH color values with "none" keyword', () => {
        expect(isValidLch('lch(none none none / none)')).toBe(true);
        expect(isValidLch('lch(50 none none)')).toBe(true);
        expect(isValidLch('lch(none 0 0 / 0.5)')).toBe(true);
    });

    test('invalid LCH color values with incorrect formats', () => {
        expect(isValidLch('lch(50 50)')).toBe(false); // Missing one value
        expect(isValidLch('lch(50 50%)')).toBe(false); // Missing one value
        expect(isValidLch('lch(50 none 50 50)')).toBe(false); // Extra value
        expect(isValidLch('lch(50 50 / 50%)')).toBe(false); // Missing h value
        expect(isValidLch('lch(50 50%)')).toBe(false); // Missing one value
    });
});
