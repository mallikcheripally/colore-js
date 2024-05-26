import { hsvToHex } from '@/conversions/hsvToHex';

describe('hsvToHex', () => {
    test('converts HSV to HEX correctly', () => {
        expect(hsvToHex(0, 100, 100)).toBe('#ff0000'); // Red
        expect(hsvToHex(120, 100, 100)).toBe('#00ff00'); // Green
        expect(hsvToHex(240, 100, 100)).toBe('#0000ff'); // Blue
        expect(hsvToHex(60, 100, 100)).toBe('#ffff00'); // Yellow
        expect(hsvToHex(180, 100, 100)).toBe('#00ffff'); // Cyan
        expect(hsvToHex(300, 100, 100)).toBe('#ff00ff'); // Magenta
        expect(hsvToHex(0, 0, 0)).toBe('#000000'); // Black
        expect(hsvToHex(0, 0, 100)).toBe('#ffffff'); // White
    });

    test('handles intermediate values correctly', () => {
        expect(hsvToHex(360, 100, 100)).toBe('#ff0000'); // Red, 360 should be treated as 0
        expect(hsvToHex(180, 50, 50)).toBe('#408080'); // Teal
        expect(hsvToHex(90, 50, 50)).toBe('#608040'); // Olive
        expect(hsvToHex(210, 50, 50)).toBe('#406080'); // Steel Blue
    });

    test('throws error for invalid values', () => {
        expect(() => hsvToHex(-10, 50, 50)).toThrow('Invalid HSV color value -10, 50, 50');
        expect(() => hsvToHex(370, 50, 50)).toThrow('Invalid HSV color value 370, 50, 50');
        expect(() => hsvToHex(180, -10, 50)).toThrow('Invalid HSV color value 180, -10, 50');
        expect(() => hsvToHex(180, 110, 50)).toThrow('Invalid HSV color value 180, 110, 50');
        expect(() => hsvToHex(180, 50, -10)).toThrow('Invalid HSV color value 180, 50, -10');
        expect(() => hsvToHex(180, 50, 110)).toThrow('Invalid HSV color value 180, 50, 110');
    });
});
