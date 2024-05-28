import { parseHexAlpha } from "@/parser/parseHexAlpha";

describe('parseHexAlpha', () => {
    test('parses 8-digit hex colors correctly', () => {
        expect(parseHexAlpha('#ff000080')).toEqual([255, 0, 0, 0.502]);
        expect(parseHexAlpha('#00ff007f')).toEqual([0, 255, 0, 0.498]);
        expect(parseHexAlpha('#0000ff3f')).toEqual([0, 0, 255, 0.2471]);
        expect(parseHexAlpha('#123456ff')).toEqual([18, 52, 86, 1]);
        expect(parseHexAlpha('#abcdefaa')).toEqual([171, 205, 239, 0.6667]);
    });

    test('parses 4-digit hex colors correctly', () => {
        expect(parseHexAlpha('#f008')).toEqual([255, 0, 0, 0.5333]);
        expect(parseHexAlpha('#0f04')).toEqual([0, 255, 0, 0.2667]);
        expect(parseHexAlpha('#00f8')).toEqual([0, 0, 255, 0.5333]);
        expect(parseHexAlpha('#123f')).toEqual([17, 34, 51, 1]);
        expect(parseHexAlpha('#abca')).toEqual([170, 187, 204, 0.6667]);
    });

    test('throws error for invalid hex colors with alpha', () => {
        expect(() => parseHexAlpha('#ff0000')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('#ff000')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('#ff0000000')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('#gggggggg')).toThrow('Invalid HEX color format');
        expect(() => parseHexAlpha('12345678')).toThrow('Invalid HEX color format');
    });
});

