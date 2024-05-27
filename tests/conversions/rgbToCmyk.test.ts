import { rgbToCmyk } from '@/conversions/rgbToCmyk';

describe('rgbToCmyk', () => {
    test('converts RGB to CMYK string correctly', () => {
        expect(rgbToCmyk(255, 0, 0)).toBe('cmyk(0, 100, 100, 0)'); // Red
        expect(rgbToCmyk(0, 255, 0)).toBe('cmyk(100, 0, 100, 0)'); // Green
        expect(rgbToCmyk(0, 0, 255)).toBe('cmyk(100, 100, 0, 0)'); // Blue
        expect(rgbToCmyk(0, 0, 0)).toBe('cmyk(0, 0, 0, 100)'); // Black
        expect(rgbToCmyk(255, 255, 255)).toBe('cmyk(0, 0, 0, 0)'); // White
    });

    test('converts RGB to CMYK object correctly', () => {
        expect(rgbToCmyk(255, 0, 0, false)).toEqual({ c: 0, m: 100, y: 100, k: 0 }); // Red
        expect(rgbToCmyk(0, 255, 0, false)).toEqual({ c: 100, m: 0, y: 100, k: 0 }); // Green
        expect(rgbToCmyk(0, 0, 255, false)).toEqual({ c: 100, m: 100, y: 0, k: 0 }); // Blue
        expect(rgbToCmyk(0, 0, 0, false)).toEqual({ c: 0, m: 0, y: 0, k: 100 }); // Black
        expect(rgbToCmyk(255, 255, 255, false)).toEqual({ c: 0, m: 0, y: 0, k: 0 }); // White
    });

    test('handles intermediate values correctly', () => {
        expect(rgbToCmyk(128, 128, 128)).toBe('cmyk(0, 0, 0, 50)'); // Grey
        expect(rgbToCmyk(255, 255, 0)).toBe('cmyk(0, 0, 100, 0)'); // Yellow
        expect(rgbToCmyk(0, 255, 255)).toBe('cmyk(100, 0, 0, 0)'); // Cyan
        expect(rgbToCmyk(255, 0, 255)).toBe('cmyk(0, 100, 0, 0)'); // Magenta
    });

    test('throws error for invalid values', () => {
        expect(() => rgbToCmyk(-10, 50, 50)).toThrow('Invalid RGB color value -10, 50, 50');
        expect(() => rgbToCmyk(370, 50, 50)).toThrow('Invalid RGB color value 370, 50, 50');
        expect(() => rgbToCmyk(180, -10, 50)).toThrow('Invalid RGB color value 180, -10, 50');
        expect(() => rgbToCmyk(180, 110, -50)).toThrow('Invalid RGB color value 180, 110, -50');
        expect(() => rgbToCmyk(180, 50, -10)).toThrow('Invalid RGB color value 180, 50, -10');
        expect(() => rgbToCmyk(256, 50, 110)).toThrow('Invalid RGB color value 256, 50, 110');
    });
});
