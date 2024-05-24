import { cmykToRgb } from '@/conversions/cmykToRgb';

describe('cmykToRgb', () => {
    test('converts CMYK values to RGB color string correctly', () => {
        expect(cmykToRgb(0, 100, 100, 0)).toBe('rgb(255, 0, 0)');
        expect(cmykToRgb(100, 0, 100, 0)).toBe('rgb(0, 255, 0)');
        expect(cmykToRgb(100, 100, 0, 0)).toBe('rgb(0, 0, 255)');
        expect(cmykToRgb(0, 0, 100, 0)).toBe('rgb(255, 255, 0)');
        expect(cmykToRgb(100, 0, 0, 0)).toBe('rgb(0, 255, 255)');
        expect(cmykToRgb(0, 100, 0, 0)).toBe('rgb(255, 0, 255)');
        expect(cmykToRgb(0, 0, 0, 100)).toBe('rgb(0, 0, 0)');
        expect(cmykToRgb(0, 0, 0, 0)).toBe('rgb(255, 255, 255)');
    });
});
