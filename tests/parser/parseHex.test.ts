import { parseHex } from "@/parser/parseHex";

describe('parseHex', () => {
    test('parses 6-digit hex colors correctly', () => {
        expect(parseHex('#ff0000')).toEqual([255, 0, 0]);
        expect(parseHex('#00ff00')).toEqual([0, 255, 0]);
        expect(parseHex('#0000ff')).toEqual([0, 0, 255]);
        expect(parseHex('#123456')).toEqual([18, 52, 86]);
        expect(parseHex('#abcdef')).toEqual([171, 205, 239]);
    });

    test('parses 3-digit hex colors correctly', () => {
        expect(parseHex('#f00')).toEqual([255, 0, 0]);
        expect(parseHex('#0f0')).toEqual([0, 255, 0]);
        expect(parseHex('#00f')).toEqual([0, 0, 255]);
        expect(parseHex('#123')).toEqual([17, 34, 51]);
        expect(parseHex('#abc')).toEqual([170, 187, 204]);
    });

    test('throws error for invalid hex colors', () => {
        expect(() => parseHex('#ff000')).toThrow('Invalid HEX color format');
        expect(() => parseHex('#ggg')).toThrow('Invalid HEX color format');
        expect(() => parseHex('123456')).toThrow('Invalid HEX color format');
        expect(() => parseHex('#12345g')).toThrow('Invalid HEX color format');
        expect(() => parseHex('#1234567')).toThrow('Invalid HEX color format');
    });
});
