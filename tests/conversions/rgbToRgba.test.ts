import { rgbToRgba } from '@/conversions/rgbToRgba';

describe('rgbToRgba', () => {
    test('converts an RGB color string to an RGBA color string with alpha 0.5', () => {
        expect(rgbToRgba(255, 0, 0, 0.5)).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('converts an RGB color string to an RGBA object with alpha 0.75', () => {
        expect(rgbToRgba(0, 255, 0, 0.75, false)).toEqual({ r: 0, g: 255, b: 0, a: 0.75 });
    });

    test('throws an error for an invalid alpha value greater than 1', () => {
        expect(() => rgbToRgba(0, 0, 255, 1.5)).toThrow('Invalid RGB color value 0, 0, 255 or alpha 1.5');
    });

    test('throws an error for an invalid alpha value less than 0', () => {
        expect(() => rgbToRgba(0, 0, 255, -0.1)).toThrow('Invalid RGB color value 0, 0, 255 or alpha -0.1');
    });

    test('throws an error for RGB values out of range (r > 255)', () => {
        expect(() => rgbToRgba(256, 0, 0, 0.5)).toThrow('Invalid RGB color value 256, 0, 0 or alpha 0.5');
    });

    test('throws an error for RGB values out of range (g > 255)', () => {
        expect(() => rgbToRgba(0, 256, 0, 0.5)).toThrow('Invalid RGB color value 0, 256, 0 or alpha 0.5');
    });

    test('throws an error for RGB values out of range (b > 255)', () => {
        expect(() => rgbToRgba(0, 0, 256, 0.5)).toThrow('Invalid RGB color value 0, 0, 256 or alpha 0.5');
    });

    test('throws an error for RGB values out of range (r < 0)', () => {
        expect(() => rgbToRgba(-1, 0, 0, 0.5)).toThrow('Invalid RGB color value -1, 0, 0 or alpha 0.5');
    });

    test('throws an error for RGB values out of range (g < 0)', () => {
        expect(() => rgbToRgba(0, -1, 0, 0.5)).toThrow('Invalid RGB color value 0, -1, 0 or alpha 0.5');
    });

    test('throws an error for RGB values out of range (b < 0)', () => {
        expect(() => rgbToRgba(0, 0, -1, 0.5)).toThrow('Invalid RGB color value 0, 0, -1 or alpha 0.5');
    });

    test('handles alpha value of 0', () => {
        expect(rgbToRgba(0, 255, 0, 0)).toBe('rgba(0, 255, 0, 0)');
    });

    test('handles alpha value of 1', () => {
        expect(rgbToRgba(0, 255, 0, 1)).toBe('rgba(0, 255, 0, 1)');
    });

    test('converts an RGB color string with max RGB values to an RGBA color string', () => {
        expect(rgbToRgba(255, 255, 255, 0.8)).toBe('rgba(255, 255, 255, 0.8)');
    });

    test('converts an RGB color string with min RGB values to an RGBA color string', () => {
        expect(rgbToRgba(0, 0, 0, 0.3)).toBe('rgba(0, 0, 0, 0.3)');
    });
});
