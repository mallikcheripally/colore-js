import { hsvToRgb } from '@/conversions/hsvToRgb';

describe('hsvToRgb', () => {
    test('converts HSV to RGB string correctly', () => {
        expect(hsvToRgb(0, 100, 100)).toBe('rgb(255, 0, 0)'); // Red
        expect(hsvToRgb(120, 100, 100)).toBe('rgb(0, 255, 0)'); // Green
        expect(hsvToRgb(240, 100, 100)).toBe('rgb(0, 0, 255)'); // Blue
        expect(hsvToRgb(60, 100, 100)).toBe('rgb(255, 255, 0)'); // Yellow
        expect(hsvToRgb(180, 100, 100)).toBe('rgb(0, 255, 255)'); // Cyan
        expect(hsvToRgb(300, 100, 100)).toBe('rgb(255, 0, 255)'); // Magenta
        expect(hsvToRgb(0, 0, 0)).toBe('rgb(0, 0, 0)'); // Black
        expect(hsvToRgb(0, 0, 100)).toBe('rgb(255, 255, 255)'); // White
    });

    test('converts HSV to RGB object correctly', () => {
        expect(hsvToRgb(0, 100, 100, false)).toEqual({ r: 255, g: 0, b: 0 }); // Red
        expect(hsvToRgb(120, 100, 100, false)).toEqual({ r: 0, g: 255, b: 0 }); // Green
        expect(hsvToRgb(240, 100, 100, false)).toEqual({ r: 0, g: 0, b: 255 }); // Blue
        expect(hsvToRgb(60, 100, 100, false)).toEqual({ r: 255, g: 255, b: 0 }); // Yellow
        expect(hsvToRgb(180, 100, 100, false)).toEqual({ r: 0, g: 255, b: 255 }); // Cyan
        expect(hsvToRgb(300, 100, 100, false)).toEqual({ r: 255, g: 0, b: 255 }); // Magenta
        expect(hsvToRgb(0, 0, 0, false)).toEqual({ r: 0, g: 0, b: 0 }); // Black
        expect(hsvToRgb(0, 0, 100, false)).toEqual({ r: 255, g: 255, b: 255 }); // White
    });

    test('handles intermediate values correctly', () => {
        expect(hsvToRgb(360, 100, 100)).toBe('rgb(255, 0, 0)'); // Red, 360 should be treated as 0
        expect(hsvToRgb(180, 50, 50)).toBe('rgb(64, 128, 128)'); // Teal
        expect(hsvToRgb(90, 50, 50)).toBe('rgb(96, 128, 64)'); // Olive
        expect(hsvToRgb(210, 50, 50)).toBe('rgb(64, 96, 128)'); // Steel Blue
    });

    test('throws error for invalid values', () => {
        expect(() => hsvToRgb(-10, 50, 50)).toThrow('Invalid HSL color value -10, 50, 50');
        expect(() => hsvToRgb(370, 50, 50)).toThrow('Invalid HSL color value 370, 50, 50');
        expect(() => hsvToRgb(180, -10, 50)).toThrow('Invalid HSL color value 180, -10, 50');
        expect(() => hsvToRgb(180, 110, 50)).toThrow('Invalid HSL color value 180, 110, 50');
        expect(() => hsvToRgb(180, 50, -10)).toThrow('Invalid HSL color value 180, 50, -10');
        expect(() => hsvToRgb(180, 50, 110)).toThrow('Invalid HSL color value 180, 50, 110');
    });
});
