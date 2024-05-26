import { hexToRgb } from '@/conversions/hexToRgb';

describe('hexToRgb', () => {
    test('should convert HEX to RGB string by default', () => {
        expect(hexToRgb('#ffffff')).toBe('rgb(255, 255, 255)');
        expect(hexToRgb('#000000')).toBe('rgb(0, 0, 0)');
        expect(hexToRgb('#ff0000')).toBe('rgb(255, 0, 0)');
        expect(hexToRgb('#00ff00')).toBe('rgb(0, 255, 0)');
        expect(hexToRgb('#0000ff')).toBe('rgb(0, 0, 255)');
    });

    test('should convert HEX to RGB object when asString is false', () => {
        expect(hexToRgb('#ffffff', false)).toEqual({ r: 255, g: 255, b: 255 });
        expect(hexToRgb('#000000', false)).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb('#ff0000', false)).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb('#00ff00', false)).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb('#0000ff', false)).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('should throw an error for invalid HEX input', () => {
        expect(() => hexToRgb('#zzz')).toThrow('Invalid HEX color #zzz');
        expect(() => hexToRgb('123456')).toThrow('Invalid HEX color 123456');
        expect(() => hexToRgb('#12345')).toThrow('Invalid HEX color #12345');
    });

    test('should convert 3-digit HEX to RGB string by default', () => {
        expect(hexToRgb('#fff')).toBe('rgb(255, 255, 255)');
        expect(hexToRgb('#000')).toBe('rgb(0, 0, 0)');
        expect(hexToRgb('#f00')).toBe('rgb(255, 0, 0)');
        expect(hexToRgb('#0f0')).toBe('rgb(0, 255, 0)');
        expect(hexToRgb('#00f')).toBe('rgb(0, 0, 255)');
    });

    test('should convert 3-digit HEX to RGB object when asString is false', () => {
        expect(hexToRgb('#fff', false)).toEqual({ r: 255, g: 255, b: 255 });
        expect(hexToRgb('#000', false)).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb('#f00', false)).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb('#0f0', false)).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb('#00f', false)).toEqual({ r: 0, g: 0, b: 255 });
    });
});
