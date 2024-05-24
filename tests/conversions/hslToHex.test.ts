import { hslToHex } from '@/conversions/hslToHex';

describe('hslToHex', () => {
    test('converts HSL values to HEX color string correctly', () => {
        expect(hslToHex(0, 100, 50)).toBe('#ff0000');
        expect(hslToHex(120, 100, 50)).toBe('#00ff00');
        expect(hslToHex(240, 100, 50)).toBe('#0000ff');
        expect(hslToHex(60, 100, 50)).toBe('#ffff00');
        expect(hslToHex(180, 100, 50)).toBe('#00ffff');
        expect(hslToHex(300, 100, 50)).toBe('#ff00ff');
        expect(hslToHex(0, 0, 0)).toBe('#000000');
        expect(hslToHex(0, 0, 100)).toBe('#ffffff');
    });

    test('handles edge cases', () => {
        expect(hslToHex(0, 0, 50)).toBe('#808080'); // Gray
        expect(hslToHex(360, 100, 50)).toBe('#ff0000'); // Same as 0 degrees
    });
});
