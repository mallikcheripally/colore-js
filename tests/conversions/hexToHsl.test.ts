import { hexToHsl } from '@/conversions/hexToHsl';

describe('hexToHsl', () => {
    test('converts HEX values to HSL color string correctly', () => {
        expect(hexToHsl('#ff0000')).toBe('hsl(0, 100%, 50%)');
        expect(hexToHsl('#00ff00')).toBe('hsl(120, 100%, 50%)');
        expect(hexToHsl('#0000ff')).toBe('hsl(240, 100%, 50%)');
        expect(hexToHsl('#ffff00')).toBe('hsl(60, 100%, 50%)');
        expect(hexToHsl('#00ffff')).toBe('hsl(180, 100%, 50%)');
        expect(hexToHsl('#ff00ff')).toBe('hsl(300, 100%, 50%)');
        expect(hexToHsl('#000000')).toBe('hsl(0, 0%, 0%)');
        expect(hexToHsl('#ffffff')).toBe('hsl(0, 0%, 100%)');
    });

    test('throws an error for invalid HEX values', () => {
        expect(() => hexToHsl('#ggg')).toThrow('Invalid HEX color.');
        expect(() => hexToHsl('#12345')).toThrow('Invalid HEX color.');
    });
});
