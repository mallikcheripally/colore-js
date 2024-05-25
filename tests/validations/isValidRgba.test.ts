import { isValidRgba } from '@/validations/isValidRgba';

describe('isValidRgba', () => {
    test('validates RGBA color format', () => {
        expect(isValidRgba('rgba(255, 0, 0, 1)')).toBe(true);
        expect(isValidRgba('rgba(0, 255, 0, 0.5)')).toBe(true);
        expect(isValidRgba('rgba(0, 0, 255, 0)')).toBe(true);
        expect(isValidRgba('rgba(128, 128, 128, 0.75)')).toBe(true);
    });

    test('invalidates incorrect RGBA color format', () => {
        expect(isValidRgba('rgba(256, 0, 0, 1)')).toBe(false);
        expect(isValidRgba('rgba(-1, 0, 0, 1)')).toBe(false);
        expect(isValidRgba('rgba(0, 0, 0)')).toBe(false);
        expect(isValidRgba('rgba(0, 0, 0, 0, 0)')).toBe(false);
        expect(isValidRgba('rgba(0, 0, 256, 1)')).toBe(false);
        expect(isValidRgba('rgba(255, 255, 255, 2)')).toBe(false);
        expect(isValidRgba('rgba(255, 255, 255, -1)')).toBe(false);
        expect(isValidRgba('rgba(0,0,0,0.5)')).toBe(true); // Test without spaces
        expect(isValidRgba('rgba( 0 , 0 , 0 , 0.5 )')).toBe(true); // Test with spaces
        expect(isValidRgba('rgb(0, 0, 0)')).toBe(false); // Test RGB format
    });
});
