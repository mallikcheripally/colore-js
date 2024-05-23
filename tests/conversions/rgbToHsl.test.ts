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
    test('converts RGB values to HSL color string correctly', () => {
        expect(hslCloseTo(rgbToHsl(255, 0, 0), 'hsl(0, 100%, 50%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(0, 255, 0), 'hsl(120, 100%, 50%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(0, 0, 255), 'hsl(240, 100%, 50%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(0, 51, 255), 'hsl(225, 100%, 50%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(255, 255, 255), 'hsl(0, 0%, 100%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(0, 0, 0), 'hsl(0, 0%, 0%)')).toBe(true);
    });

    test('handles gray colors correctly', () => {
        expect(hslCloseTo(rgbToHsl(128, 128, 128), 'hsl(0, 0%, 50%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(192, 192, 192), 'hsl(0, 0%, 75%)')).toBe(true);
        expect(hslCloseTo(rgbToHsl(64, 64, 64), 'hsl(0, 0%, 25%)')).toBe(true);
    });

    test('throws error for invalid RGB color values', () => {
        expect(() => rgbToHsl(256, 0, 0)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHsl(-1, 255, 0)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHsl(255, 0, 300)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHsl(255, -10, 255)).toThrow('Invalid RGB color value.');
    });
});
