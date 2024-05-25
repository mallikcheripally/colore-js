import { isValidHsla } from '@/validations/isValidHsla';

describe('isValidHsla', () => {
    test('validates HSLA color format', () => {
        expect(isValidHsla('hsla(0, 100%, 50%, 1)')).toBe(true);
        expect(isValidHsla('hsla(120, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(240, 100%, 50%, 0)')).toBe(true);
        expect(isValidHsla('hsla(360, 100%, 50%, 0.75)')).toBe(true);
        expect(isValidHsla('hsla(180, 50%, 75%, 0.3)')).toBe(true);
    });

    test('invalidates incorrect HSLA color format', () => {
        expect(isValidHsla('hsla(361, 100%, 50%, 1)')).toBe(false); // Hue > 360
        expect(isValidHsla('hsla(-1, 100%, 50%, 1)')).toBe(false); // Hue < 0
        expect(isValidHsla('hsla(120, 101%, 50%, 1)')).toBe(false); // Saturation > 100%
        expect(isValidHsla('hsla(120, -1%, 50%, 1)')).toBe(false); // Saturation < 0%
        expect(isValidHsla('hsla(120, 100%, 101%, 1)')).toBe(false); // Lightness > 100%
        expect(isValidHsla('hsla(120, 100%, -1%, 1)')).toBe(false); // Lightness < 0%
        expect(isValidHsla('hsla(120, 100%, 50%, 2)')).toBe(false); // Alpha > 1
        expect(isValidHsla('hsla(120, 100%, 50%, -1)')).toBe(false); // Alpha < 0
        expect(isValidHsla('hsla(0, 100%, 50%)')).toBe(false); // Missing alpha
        expect(isValidHsla('hsla(0, 100%, 50%, 0.5)')).toBe(true); // Valid with decimal alpha
        expect(isValidHsla('hsla(0,100%,50%,0.5)')).toBe(true); // No spaces
        expect(isValidHsla('hsla( 0 , 100% , 50% , 0.5 )')).toBe(true); // Extra spaces
        expect(isValidHsla('hsl(0, 100%, 50%)')).toBe(false); // HSL format
    });
});
