import { isValidLch } from '@/validations/isValidLch';

describe('isValidLch', () => {
    test('validates LCH color format', () => {
        expect(isValidLch('lch(53.23, 104.55, 40.00)')).toBe(true);
        expect(isValidLch('lch(97.14, 113.79, 102.85)')).toBe(true);
        expect(isValidLch('lch(87.74, 119.78, 136.02)')).toBe(true);
        expect(isValidLch('lch(32.30, 133.81, 306.29)')).toBe(true);
    });

    test('invalidates incorrect LCH color format', () => {
        expect(isValidLch('lch(53.23, -104.55, 40.00)')).toBe(false); // Negative chroma
        expect(isValidLch('lch(53.23, 104.55)')).toBe(false); // Missing hue
        expect(isValidLch('lch(53.23, 104.55, 40.00%)')).toBe(false); // Percentage in hue
        expect(isValidLch('lch(53.23, 104.55, 40, 50)')).toBe(false); // Extra value
        expect(isValidLch('lch(53.23, 104.55, forty)')).toBe(false); // Non-numeric hue
        expect(isValidLch('rgb(255, 0, 0)')).toBe(false); // RGB format
    });

    test('validates LCH color format with negative hue', () => {
        expect(isValidLch('lch(53.23, 104.55, -40.00)')).toBe(true);
        expect(isValidLch('lch(97.14, 113.79, -102.85)')).toBe(true);
    });
});
