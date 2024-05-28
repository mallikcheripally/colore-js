import { parseRgb } from "@/parser/parseRgb";

describe('parseRgb', () => {
    test('parses valid rgb colors', () => {
        expect(parseRgb('rgb(255, 0, 0)')).toEqual([255, 0, 0]);
        expect(parseRgb('rgb(100%, 0%, 0%)')).toEqual([255, 0, 0]);
    });

    test('parses rgb colors with spaces and case insensitive', () => {
        expect(parseRgb('RGB( 255 , 0 , 0 )')).toEqual([255, 0, 0]);
        expect(parseRgb('rgb(255 ,0 ,0)')).toEqual([255, 0, 0]);
    });

    test('throws error for invalid rgb colors', () => {
        expect(() => parseRgb('rgb(256, 0, 0)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(255, 0, 0, 1)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(255, 0, 0, 2)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(255, 0, 0, -1)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgba(255, 0, 0, -0.1)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgba(255, 0, 0, 1.1)')).toThrow('Invalid RGB color format');
    });
});
