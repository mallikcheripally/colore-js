import { parseHsla } from "@/parser/parseHsla";

describe('parseHsla', () => {
    test('parses HSLA color with numbers correctly', () => {
        const result = parseHsla('hsla(180, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined,
            aNum: 0.5,
        });
    });

    test('parses HSLA color with degrees correctly', () => {
        const result = parseHsla('hsla(3.14rad, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 3.14,
            hUnit: 'rad',
            hDeg: 179.91,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined,
            aNum: 0.5,
        });
    });

    test('parses HSLA color with percentages correctly', () => {
        const result = parseHsla('hsla(180, 100%, 50%, 50%)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 50,
            aUnit: '%',
            aNum: 0.5,
        });
    });

    test('parses HSLA color with different units correctly', () => {
        const result = parseHsla('hsla(50grad, 100%, 50%, 50%)');
        expect(result).toEqual({
            h: 50,
            hUnit: 'grad',
            hDeg: 45,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 50,
            aUnit: '%',
            aNum: 0.5,
        });
    });

    test('parses HSLA color with spaces correctly', () => {
        const result = parseHsla('hsla( 180 , 100% , 50% , 0.5 )');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined,
            aNum: 0.5,
        });
    });

    test('throws error for invalid HSLA color format', () => {
        expect(() => parseHsla('hsla(361, 100%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, -1%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, 100%, 101%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, 100%, 50%, 1.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(100%, 100%, 100%, 200%)')).toThrow('Invalid HSLA color format');
    });
});
