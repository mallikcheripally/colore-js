import { hexToHsv } from '@/conversions/hexToHsv';

describe('hexToHsv', () => {
    test('should convert HEX to HSV string by default', () => {
        expect(hexToHsv('#ffffff')).toBe('hsv(0, 0%, 100%)');
        expect(hexToHsv('#000000')).toBe('hsv(0, 0%, 0%)');
        expect(hexToHsv('#ff0000')).toBe('hsv(0, 100%, 100%)');
        expect(hexToHsv('#00ff00')).toBe('hsv(120, 100%, 100%)');
        expect(hexToHsv('#0000ff')).toBe('hsv(240, 100%, 100%)');
    });

    test('should convert HEX to HSV object when asString is false', () => {
        expect(hexToHsv('#ffffff', false)).toEqual({ h: 0, s: 0, v: 100 });
        expect(hexToHsv('#000000', false)).toEqual({ h: 0, s: 0, v: 0 });
        expect(hexToHsv('#ff0000', false)).toEqual({ h: 0, s: 100, v: 100 });
        expect(hexToHsv('#00ff00', false)).toEqual({ h: 120, s: 100, v: 100 });
        expect(hexToHsv('#0000ff', false)).toEqual({ h: 240, s: 100, v: 100 });
    });

    test('should throw an error for invalid HEX input', () => {
        expect(() => hexToHsv('#zzz')).toThrow('Invalid HEX color.');
        expect(() => hexToHsv('123456')).toThrow('Invalid HEX color.');
        expect(() => hexToHsv('#12345')).toThrow('Invalid HEX color.');
    });
});
