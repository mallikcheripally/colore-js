import { hexToRgb } from '@/conversions/hexToRgb';

describe('hexToRgb', () => {
    test('converts full form hex color to RGB correctly', () => {
        expect(hexToRgb('#ff0000')).toBe('rgb(255, 0, 0)');
        expect(hexToRgb('#00ff00')).toBe('rgb(0, 255, 0)');
        expect(hexToRgb('#0000ff')).toBe('rgb(0, 0, 255)');
    });

    test('converts shorthand hex color to RGB correctly', () => {
        expect(hexToRgb('#03F')).toBe('rgb(0, 51, 255)');
        expect(hexToRgb('#ABC')).toBe('rgb(170, 187, 204)');
    });

    test('throws error for invalid hex color', () => {
        expect(() => hexToRgb('invalid')).toThrow('Invalid HEX color.');
        expect(() => hexToRgb('#GGG')).toThrow('Invalid HEX color.');
        expect(() => hexToRgb('#12345')).toThrow('Invalid HEX color.');
    });
});
