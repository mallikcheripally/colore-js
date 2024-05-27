import { rgbToHsv } from '@/conversions/rgbToHsv';

// Utility function to compare HSV values with tolerance for hue
function hsvCloseTo(received: string, expected: string, tolerance: number = 3): boolean {
    const extractHsv = (hsv: string) => {
        const [h, s, v] = hsv.match(/(\d+(\.\d+)?)/g)?.map(Number) || [];
        return { h, s, v };
    };

    const receivedHsv = extractHsv(received);
    const expectedHsv = extractHsv(expected);

    return (
        Math.abs(receivedHsv.h - expectedHsv.h) <= tolerance &&
        receivedHsv.s === expectedHsv.s &&
        receivedHsv.v === expectedHsv.v
    );
}

describe('rgbToHsv', () => {
    test('converts RGB to HSV string correctly', () => {
        expect(hsvCloseTo(rgbToHsv(255, 0, 0), 'hsv(0, 100%, 100%)')).toBe(true); // Red
        expect(hsvCloseTo(rgbToHsv(0, 255, 0), 'hsv(120, 100%, 100%)')).toBe(true); // Green
        expect(hsvCloseTo(rgbToHsv(0, 0, 255), 'hsv(240, 100%, 100%)')).toBe(true); // Blue
        expect(hsvCloseTo(rgbToHsv(0, 0, 0), 'hsv(0, 0%, 0%)')).toBe(true); // Black
        expect(hsvCloseTo(rgbToHsv(255, 255, 255), 'hsv(0, 0%, 100%)')).toBe(true); // White
        expect(hsvCloseTo(rgbToHsv(128, 128, 128), 'hsv(0, 0%, 50%)')).toBe(true); // Grey
    });

    test('converts RGB to HSV object correctly', () => {
        expect(rgbToHsv(255, 0, 0, false)).toEqual({ h: 0, s: 100, v: 100 }); // Red
        expect(rgbToHsv(0, 255, 0, false)).toEqual({ h: 120, s: 100, v: 100 }); // Green
        expect(rgbToHsv(0, 0, 255, false)).toEqual({ h: 240, s: 100, v: 100 }); // Blue
        expect(rgbToHsv(0, 0, 0, false)).toEqual({ h: 0, s: 0, v: 0 }); // Black
        expect(rgbToHsv(255, 255, 255, false)).toEqual({ h: 0, s: 0, v: 100 }); // White
        expect(rgbToHsv(128, 128, 128, false)).toEqual({ h: 0, s: 0, v: 50 }); // Grey
    });

    test('handles intermediate values correctly', () => {
        expect(hsvCloseTo(rgbToHsv(192, 192, 192), 'hsv(0, 0%, 75%)')).toBe(true); // Light Grey
        expect(hsvCloseTo(rgbToHsv(128, 128, 0), 'hsv(60, 100%, 50%)')).toBe(true); // Olive
        expect(hsvCloseTo(rgbToHsv(0, 128, 128), 'hsv(180, 100%, 50%)')).toBe(true); // Teal
        expect(hsvCloseTo(rgbToHsv(128, 0, 128), 'hsv(300, 100%, 50%)')).toBe(true); // Purple
    });

    test('throws error for invalid values', () => {
        expect(() => rgbToHsv(-10, 50, 50)).toThrow('Invalid RGB color value -10, 50, 50');
        expect(() => rgbToHsv(370, 50, 50)).toThrow('Invalid RGB color value 370, 50, 50');
        expect(() => rgbToHsv(180, -10, 50)).toThrow('Invalid RGB color value 180, -10, 50');
        expect(() => rgbToHsv(180, 110, -50)).toThrow('Invalid RGB color value 180, 110, -50');
        expect(() => rgbToHsv(180, 50, -10)).toThrow('Invalid RGB color value 180, 50, -10');
        expect(() => rgbToHsv(256, 50, 110)).toThrow('Invalid RGB color value 256, 50, 110');
    });
});
