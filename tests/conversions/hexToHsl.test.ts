import { hexToHsl } from '@/conversions/hexToHsl';

describe('hexToHsl', () => {
    test('should convert HEX to HSL string by default', () => {
        expect(hexToHsl('#ffffff')).toBe('hsl(0, 0%, 100%)');
        expect(hexToHsl('#000000')).toBe('hsl(0, 0%, 0%)');
        expect(hexToHsl('#ff0000')).toBe('hsl(0, 100%, 50%)');
        expect(hexToHsl('#00ff00')).toBe('hsl(120, 100%, 50%)');
        expect(hexToHsl('#0000ff')).toBe('hsl(240, 100%, 50%)');
    });

    test('should convert HEX to HSL object when asString is false', () => {
        expect(hexToHsl('#ffffff', false)).toEqual({ h: 0, s: 0, l: 100 });
        expect(hexToHsl('#000000', false)).toEqual({ h: 0, s: 0, l: 0 });
        expect(hexToHsl('#ff0000', false)).toEqual({ h: 0, s: 100, l: 50 });
        expect(hexToHsl('#00ff00', false)).toEqual({ h: 120, s: 100, l: 50 });
        expect(hexToHsl('#0000ff', false)).toEqual({ h: 240, s: 100, l: 50 });
    });

    test('should throw an error for invalid HEX input', () => {
        expect(() => hexToHsl('#zzz')).toThrow('Invalid HEX color #zzz');
        expect(() => hexToHsl('123456')).toThrow('Invalid HEX color 123456');
        expect(() => hexToHsl('#12345')).toThrow('Invalid HEX color #12345');
    });

    test('should convert 3-digit HEX to HSL string by default', () => {
        expect(hexToHsl('#fff')).toBe('hsl(0, 0%, 100%)');
        expect(hexToHsl('#000')).toBe('hsl(0, 0%, 0%)');
        expect(hexToHsl('#f00')).toBe('hsl(0, 100%, 50%)');
        expect(hexToHsl('#0f0')).toBe('hsl(120, 100%, 50%)');
        expect(hexToHsl('#00f')).toBe('hsl(240, 100%, 50%)');
    });

    test('should convert 3-digit HEX to HSL object when asString is false', () => {
        expect(hexToHsl('#fff', false)).toEqual({ h: 0, s: 0, l: 100 });
        expect(hexToHsl('#000', false)).toEqual({ h: 0, s: 0, l: 0 });
        expect(hexToHsl('#f00', false)).toEqual({ h: 0, s: 100, l: 50 });
        expect(hexToHsl('#0f0', false)).toEqual({ h: 120, s: 100, l: 50 });
        expect(hexToHsl('#00f', false)).toEqual({ h: 240, s: 100, l: 50 });
    });
});
