import { parseHsla } from "@/parser/parseHsla";

describe('parseHsla', () => {
    test('parses valid HSLA colors correctly', () => {
        expect(parseHsla('hsla(120, 100%, 50%, 0.5)')).toEqual([120, 100, 50, 0.5]);
        expect(parseHsla('hsla(240, 50%, 50%, 1)')).toEqual([240, 50, 50, 1]);
        expect(parseHsla('hsla(360, 100%, 100%, 0)')).toEqual([360, 100, 100, 0]);
        expect(parseHsla('hsla(0, 0%, 0%, 0.25)')).toEqual([0, 0, 0, 0.25]);
    });

    test('parses HSLA colors with different units for hue correctly', () => {
        expect(parseHsla('hsla(180deg, 100%, 50%, 0.5)')).toEqual([180, 100, 50, 0.5]);
        expect(parseHsla('hsla(3.14rad, 100%, 50%, 0.5)')).toEqual([180, 100, 50, 0.5]);
        expect(parseHsla('hsla(200grad, 100%, 50%, 0.5)')).toEqual([180, 100, 50, 0.5]);
        expect(parseHsla('hsla(0.5turn, 100%, 50%, 0.5)')).toEqual([180, 100, 50, 0.5]);
    });

    test('parses HSLA colors with different alpha values correctly', () => {
        expect(parseHsla('hsla(120, 100%, 50%, 0.75)')).toEqual([120, 100, 50, 0.75]);
        expect(parseHsla('hsla(240, 50%, 50%, 50%)')).toEqual([240, 50, 50, 0.5]);
        expect(parseHsla('hsla(360, 100%, 100%, none)')).toEqual([360, 100, 100, 1]);
        expect(parseHsla('hsla(0, 0%, 0%, 0%)')).toEqual([0, 0, 0, 0]);
    });

    test('throws error for invalid HSLA colors', () => {
        expect(() => parseHsla('hsla(120, 100, 50, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 100%, 50)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 100, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120deg, 100%, 50, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 100%, 50%, 1.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(-10, 100%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(370, 100%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, -10%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 110%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 100%, -10%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(120, 100%, 110%, 0.5)')).toThrow('Invalid HSLA color format');
    });
});
