import { isValidHsl } from '@/validations/isValidHsl';

describe('isValidHsl', () => {
    test('validates HSL color format', () => {
        expect(isValidHsl('hsl(0, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(120, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(240, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(360, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(180, 50%, 75%)')).toBe(true);
    });

    test('invalidates incorrect HSL color format', () => {
        expect(isValidHsl('hsl(361, 100%, 50%)')).toBe(false); // Hue > 360
        expect(isValidHsl('hsl(-1, 100%, 50%)')).toBe(false); // Hue < 0
        expect(isValidHsl('hsl(120, 101%, 50%)')).toBe(false); // Saturation > 100%
        expect(isValidHsl('hsl(120, -1%, 50%)')).toBe(false); // Saturation < 0%
        expect(isValidHsl('hsl(120, 100%, 101%)')).toBe(false); // Lightness > 100%
        expect(isValidHsl('hsl(120, 100%, -1%)')).toBe(false); // Lightness < 0%
        expect(isValidHsl('hsl(0, 100%, 50)')).toBe(false); // Missing % for lightness
        expect(isValidHsl('hsl(0, 100, 50%)')).toBe(false); // Missing % for saturation
        expect(isValidHsl('hsl(0,100%,50%)')).toBe(true); // No spaces
        expect(isValidHsl('hsl( 0 , 100% , 50% )')).toBe(true); // Extra spaces
        expect(isValidHsl('rgb(0, 0, 0)')).toBe(false); // RGB format
    });
});
