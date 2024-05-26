import { hslToRgb } from '@/conversions/hslToRgb';

describe('hslToRgb', () => {
    test('converts HSL values to RGB color string correctly', () => {
        expect(hslToRgb(0, 100, 50)).toBe('rgb(255, 0, 0)'); // Red
        expect(hslToRgb(120, 100, 50)).toBe('rgb(0, 255, 0)'); // Green
        expect(hslToRgb(240, 100, 50)).toBe('rgb(0, 0, 255)'); // Blue
        expect(hslToRgb(60, 100, 50)).toBe('rgb(255, 255, 0)'); // Yellow
        expect(hslToRgb(180, 100, 50)).toBe('rgb(0, 255, 255)'); // Cyan
        expect(hslToRgb(300, 100, 50)).toBe('rgb(255, 0, 255)'); // Magenta
        expect(hslToRgb(0, 0, 0)).toBe('rgb(0, 0, 0)'); // Black
        expect(hslToRgb(0, 0, 100)).toBe('rgb(255, 255, 255)'); // White
        expect(hslToRgb(0, 0, 50)).toBe('rgb(128, 128, 128)'); // Gray
    });

    test('handles gray colors correctly', () => {
        expect(hslToRgb(0, 0, 50)).toBe('rgb(128, 128, 128)'); // Medium Gray
        expect(hslToRgb(0, 0, 75)).toBe('rgb(191, 191, 191)'); // Light Gray
        expect(hslToRgb(0, 0, 25)).toBe('rgb(64, 64, 64)'); // Dark Gray
    });

    test('throws error for invalid HSL color values', () => {
        expect(() => hslToRgb(361, 100, 50)).toThrow(`Invalid HSL color value 361, 100, 50`);
        expect(() => hslToRgb(-1, 100, 50)).toThrow('Invalid HSL color value -1, 100, 50');
        expect(() => hslToRgb(0, 101, 50)).toThrow('Invalid HSL color value 0, 101, 50');
        expect(() => hslToRgb(0, -1, 50)).toThrow('Invalid HSL color value 0, -1, 50');
        expect(() => hslToRgb(0, 100, 101)).toThrow('Invalid HSL color value 0, 100, 101');
        expect(() => hslToRgb(0, 100, -1)).toThrow('Invalid HSL color value 0, 100, -1');
    });
});
