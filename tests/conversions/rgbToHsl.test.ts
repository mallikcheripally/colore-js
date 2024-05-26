import { rgbToHsl } from '@/conversions/rgbToHsl';

// Utility function to compare HSL values with tolerance for hue
function hslCloseTo(received: string, expected: string, tolerance: number = 3): boolean {
    const extractHsl = (hsl: string) => {
        const [h, s, l] = hsl.match(/(\d+(\.\d+)?)/g)?.map(Number) || [];
        return { h, s, l };
    };

    const receivedHsl = extractHsl(received);
    const expectedHsl = extractHsl(expected);

    return (
        Math.abs(receivedHsl.h - expectedHsl.h) <= tolerance &&
        receivedHsl.s === expectedHsl.s &&
        receivedHsl.l === expectedHsl.l
    );
}

describe('rgbToHsl', () => {
    test('converts RGB to HSL string correctly', () => {
        expect(hslCloseTo(rgbToHsl(255, 0, 0), 'hsl(0, 100%, 50%)')).toBe(true); // Red
        expect(hslCloseTo(rgbToHsl(0, 255, 0), 'hsl(120, 100%, 50%)')).toBe(true); // Green
        expect(hslCloseTo(rgbToHsl(0, 0, 255), 'hsl(240, 100%, 50%)')).toBe(true); // Blue
        expect(hslCloseTo(rgbToHsl(0, 0, 0), 'hsl(0, 0%, 0%)')).toBe(true); // Black
        expect(hslCloseTo(rgbToHsl(255, 255, 255), 'hsl(0, 0%, 100%)')).toBe(true); // White
        expect(hslCloseTo(rgbToHsl(128, 128, 128), 'hsl(0, 0%, 50%)')).toBe(true); // Grey
    });

    test('converts RGB to HSL object correctly', () => {
        expect(rgbToHsl(255, 0, 0, false)).toEqual({ h: 0, s: 100, l: 50 }); // Red
        expect(rgbToHsl(0, 255, 0, false)).toEqual({ h: 120, s: 100, l: 50 }); // Green
        expect(rgbToHsl(0, 0, 255, false)).toEqual({ h: 240, s: 100, l: 50 }); // Blue
        expect(rgbToHsl(0, 0, 0, false)).toEqual({ h: 0, s: 0, l: 0 }); // Black
        expect(rgbToHsl(255, 255, 255, false)).toEqual({ h: 0, s: 0, l: 100 }); // White
        expect(rgbToHsl(128, 128, 128, false)).toEqual({ h: 0, s: 0, l: 50 }); // Grey
    });

    test('handles intermediate values correctly', () => {
        expect(hslCloseTo(rgbToHsl(192, 192, 192), 'hsl(0, 0%, 75%)')).toBe(true); // Light Grey
        expect(hslCloseTo(rgbToHsl(128, 128, 0), 'hsl(60, 100%, 25%)')).toBe(true); // Olive
        expect(hslCloseTo(rgbToHsl(0, 128, 128), 'hsl(180, 100%, 25%)')).toBe(true); // Teal
        expect(hslCloseTo(rgbToHsl(128, 0, 128), 'hsl(300, 100%, 25%)')).toBe(true); // Purple
    });

    test('throws error for invalid values', () => {
        expect(() => rgbToHsl(-10, 50, 50)).toThrow('Invalid RGB color value -10, 50, 50');
        expect(() => rgbToHsl(370, 50, 50)).toThrow('Invalid RGB color value 370, 50, 50');
        expect(() => rgbToHsl(180, -10, 50)).toThrow('Invalid RGB color value 180, -10, 50');
        expect(() => rgbToHsl(180, 110, -50)).toThrow('Invalid RGB color value 180, 110, -50');
        expect(() => rgbToHsl(180, 50, -10)).toThrow('Invalid RGB color value 180, 50, -10');
        expect(() => rgbToHsl(256, 50, 110)).toThrow('Invalid RGB color value 256, 50, 110');
    });
});
