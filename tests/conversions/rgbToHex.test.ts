import { rgbToHex } from '@/conversions/rgbToHex';

describe('rgbToHex', () => {
    test('converts RGB values to hex color string correctly', () => {
        expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
        expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
        expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
        expect(rgbToHex(0, 51, 255)).toBe('#0033ff');
        expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
        expect(rgbToHex(0, 0, 0)).toBe('#000000');
    });

    test('throws error for invalid RGB color values', () => {
        expect(() => rgbToHex(256, 0, 0)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHex(-1, 255, 0)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHex(255, 0, 300)).toThrow('Invalid RGB color value.');
        expect(() => rgbToHex(255, -10, 255)).toThrow('Invalid RGB color value.');
    });
});
