import { parseHex } from '@/parser/parseHex';

describe('parseHex', () => {
    test('parses 3-digit HEX color correctly', () => {
        const result = parseHex('#abc');
        expect(result).toEqual({
            r: 170,
            g: 187,
            b: 204,
        });
    });

    test('parses 6-digit HEX color correctly', () => {
        const result = parseHex('#abcdef');
        expect(result).toEqual({
            r: 171,
            g: 205,
            b: 239,
        });
    });

    test('parses 3-digit HEX color with uppercase letters correctly', () => {
        const result = parseHex('#ABC');
        expect(result).toEqual({
            r: 170,
            g: 187,
            b: 204,
        });
    });

    test('parses 6-digit HEX color with uppercase letters correctly', () => {
        const result = parseHex('#ABCDEF');
        expect(result).toEqual({
            r: 171,
            g: 205,
            b: 239,
        });
    });

    test('throws error for invalid HEX color format', () => {
        expect(() => parseHex('#abcd')).toThrow('Invalid HEX color format');
        expect(() => parseHex('#12345')).toThrow('Invalid HEX color format');
        expect(() => parseHex('abc')).toThrow('Invalid HEX color format');
        expect(() => parseHex('#ghijkl')).toThrow('Invalid HEX color format');
    });
});
