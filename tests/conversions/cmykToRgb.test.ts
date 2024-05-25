import { cmykToRgb } from '@/conversions/cmykToRgb';

describe('cmykToRgb', () => {
    test('converts CMYK to RGB string correctly', () => {
        expect(cmykToRgb(0, 100, 100, 0)).toBe('rgb(255, 0, 0)');
        expect(cmykToRgb(100, 0, 100, 0)).toBe('rgb(0, 255, 0)');
        expect(cmykToRgb(100, 100, 0, 0)).toBe('rgb(0, 0, 255)');
        expect(cmykToRgb(0, 0, 0, 100)).toBe('rgb(0, 0, 0)');
        expect(cmykToRgb(0, 0, 0, 0)).toBe('rgb(255, 255, 255)');
    });

    test('converts CMYK to RGB object correctly', () => {
        expect(cmykToRgb(0, 100, 100, 0, false)).toEqual({ r: 255, g: 0, b: 0 });
        expect(cmykToRgb(100, 0, 100, 0, false)).toEqual({ r: 0, g: 255, b: 0 });
        expect(cmykToRgb(100, 100, 0, 0, false)).toEqual({ r: 0, g: 0, b: 255 });
        expect(cmykToRgb(0, 0, 0, 100, false)).toEqual({ r: 0, g: 0, b: 0 });
        expect(cmykToRgb(0, 0, 0, 0, false)).toEqual({ r: 255, g: 255, b: 255 });
    });

    test('handles intermediate values correctly', () => {
        expect(cmykToRgb(50, 50, 50, 50)).toBe('rgb(64, 64, 64)');
        expect(cmykToRgb(25, 50, 75, 0)).toBe('rgb(191, 128, 64)');
        expect(cmykToRgb(10, 20, 30, 40)).toBe('rgb(138, 122, 107)');
    });
});
