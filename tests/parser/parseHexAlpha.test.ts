import { parseHexAlpha } from '@/parser/parseHexAlpha';

describe('parseHexAlpha', () => {
    test('parses 4-digit HEX color with alpha correctly', () => {
        const result = parseHexAlpha('#abcd');
        expect(result).toEqual({
            r: 170,
            g: 187,
            b: 204,
            a: 0.8667,
        });
    });

    test('parses 8-digit HEX color with alpha correctly', () => {
        const result = parseHexAlpha('#abcdefaa');
        expect(result).toEqual({
            r: 171,
            g: 205,
            b: 239,
            a: 0.6667,
        });
    });

    test('parses 4-digit HEX color with alpha and uppercase letters correctly', () => {
        const result = parseHexAlpha('#ABCD');
        expect(result).toEqual({
            r: 170,
            g: 187,
            b: 204,
            a: 0.8667,
        });
    });

    test('parses 8-digit HEX color with alpha and uppercase letters correctly', () => {
        const result = parseHexAlpha('#ABCDEFAA');
        expect(result).toEqual({
            r: 171,
            g: 205,
            b: 239,
            a: 0.6667,
        });
    });

    test('throws error for invalid HEX color format', () => {
        expect(() => parseHexAlpha('#abc')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('#abcdefa')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('abcd')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('#ghijklmn')).toThrow('Invalid HEX color format');
    });
});
