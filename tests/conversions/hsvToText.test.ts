import { hsvToHex } from '@/conversions/hsvToHex';

describe('hsvToHex', () => {
    test('converts HSV values to HEX color string correctly', () => {
        expect(hsvToHex(0, 100, 100)).toBe('#ff0000');
        expect(hsvToHex(120, 100, 100)).toBe('#00ff00');
        expect(hsvToHex(240, 100, 100)).toBe('#0000ff');
        expect(hsvToHex(60, 100, 100)).toBe('#ffff00');
        expect(hsvToHex(180, 100, 100)).toBe('#00ffff');
        expect(hsvToHex(300, 100, 100)).toBe('#ff00ff');
        expect(hsvToHex(0, 0, 0)).toBe('#000000');
        expect(hsvToHex(0, 0, 100)).toBe('#ffffff');
    });

    test('handles edge cases', () => {
        expect(hsvToHex(0, 0, 50)).toBe('#808080'); // Gray
        expect(hsvToHex(30, 100, 100)).toBe('#ff8000'); // Orange
    });
});
