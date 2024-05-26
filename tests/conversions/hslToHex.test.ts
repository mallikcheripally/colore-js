import { hslToHex } from '@/conversions/hslToHex';

describe('hslToHex', () => {
    test('converts HSL to HEX correctly', () => {
        expect(hslToHex(0, 100, 50)).toBe('#ff0000'); // Red
        expect(hslToHex(120, 100, 50)).toBe('#00ff00'); // Green
        expect(hslToHex(240, 100, 50)).toBe('#0000ff'); // Blue
        expect(hslToHex(60, 100, 50)).toBe('#ffff00'); // Yellow
        expect(hslToHex(180, 100, 50)).toBe('#00ffff'); // Cyan
        expect(hslToHex(300, 100, 50)).toBe('#ff00ff'); // Magenta
        expect(hslToHex(0, 0, 0)).toBe('#000000'); // Black
        expect(hslToHex(0, 0, 100)).toBe('#ffffff'); // White
    });

    test('handles intermediate values correctly', () => {
        expect(hslToHex(360, 100, 50)).toBe('#ff0000'); // Red, 360 should be treated as 0
        expect(hslToHex(180, 50, 50)).toBe('#40bfbf'); // Teal
        expect(hslToHex(90, 50, 50)).toBe('#80bf40'); // Olive
        expect(hslToHex(210, 50, 50)).toBe('#4080bf'); // Steel Blue
    });

    test('throws error for invalid values', () => {
        expect(() => hslToHex(-10, 50, 50)).toThrow('Invalid HSL color value -10, 50, 50');
        expect(() => hslToHex(370, 50, 50)).toThrow('Invalid HSL color value 370, 50, 50');
        expect(() => hslToHex(180, -10, 50)).toThrow('Invalid HSL color value 180, -10, 50');
        expect(() => hslToHex(180, 110, 50)).toThrow('Invalid HSL color value 180, 110, 50');
        expect(() => hslToHex(180, 50, -10)).toThrow('Invalid HSL color value 180, 50, -10');
        expect(() => hslToHex(180, 50, 110)).toThrow('Invalid HSL color value 180, 50, 110');
    });
});
