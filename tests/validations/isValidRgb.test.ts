import { isValidRgb } from '@/validations/isValidRgb';

describe('isValidRgb', () => {
    test('validates RGB color format', () => {
        expect(isValidRgb('rgb(255, 0, 0)')).toBe(true);
        expect(isValidRgb('rgb(0, 255, 0)')).toBe(true);
        expect(isValidRgb('rgb(0, 0, 255)')).toBe(true);
        expect(isValidRgb('rgb(128, 128, 128)')).toBe(true);
    });

    test('invalidates incorrect RGB color format', () => {
        expect(isValidRgb('rgb(256, 0, 0)')).toBe(false);
        expect(isValidRgb('rgb(-1, 0, 0)')).toBe(false);
        expect(isValidRgb('rgb(0, 0)')).toBe(false);
        expect(isValidRgb('rgb(0, 0, 0, 0)')).toBe(false);
        expect(isValidRgb('rgb(0, 0, 256)')).toBe(false);
        expect(isValidRgb('rgb(255, 255, 255, 255)')).toBe(false);
        expect(isValidRgb('rgb(0,0,0)')).toBe(true); // Test without spaces
        expect(isValidRgb('rgb( 0 , 0 , 0 )')).toBe(true); // Test with spaces
        expect(isValidRgb('rgba(0, 0, 0, 1)')).toBe(false); // Test RGBA format
    });
});
