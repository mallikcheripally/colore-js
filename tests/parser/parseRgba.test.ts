import { parseRgba } from "@/parser/parseRgba";

describe('parseRgba', () => {
    test('parses valid rgba colors', () => {
        expect(parseRgba('rgba(255, 0, 0, 1)')).toEqual([255, 0, 0, 1]);
        expect(parseRgba('rgba(100%, 0%, 0%, 0.5)')).toEqual([255, 0, 0, 0.5]);
        expect(parseRgba('rgba(0, 128, 255, 0.75)')).toEqual([0, 128, 255, 0.75]);
        expect(parseRgba('rgba(50%, 50%, 50%, 0.25)')).toEqual([127.5, 127.5, 127.5, 0.25]);
        expect(parseRgba('rgba(100%, 100%, 100%, none)')).toEqual([255, 255, 255, 1]);
    });

    test('parses rgba colors with spaces and case insensitive', () => {
        expect(parseRgba('RGBA( 255 , 0 , 0 , 1 )')).toEqual([255, 0, 0, 1]);
        expect(parseRgba('rgba(255 ,0 ,0,1)')).toEqual([255, 0, 0, 1]);
    });

    test('throws error for invalid rgba colors', () => {
        expect(() => parseRgba('rgba(256, 0, 0, 1)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, -1, 0, 1)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 300, 1)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0, 1.5)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0, 101%)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0, -0.5)')).toThrow('Invalid RGBA color format');
    });

    test('throws error for malformed rgba colors', () => {
        expect(() => parseRgba('rgba(255, 0, 0, 1, 0)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255,0,0,1')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0, 1 /)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba255, 0, 0, 1')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0 0)')).toThrow('Invalid RGBA color format');
    });
});
