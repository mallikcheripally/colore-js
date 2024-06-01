import { parseHsla } from "@/parser/parseHsla";

describe('parseHsla', () => {
    test('parses HSLA color with degrees', () => {
        const result = parseHsla('hsla(180deg, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 180,
            hUnit: 'deg',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined
        });
    });

    test('parses HSLA color with radians', () => {
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
            aUnit: undefined
        });
    });

    test('parses HSLA color with gradians', () => {
        const result = parseHsla('hsla(200grad, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 200,
            hUnit: 'grad',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined
        });
    });

    test('parses HSLA color with turns', () => {
        const result = parseHsla('hsla(0.5turn, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 0.5,
            hUnit: 'turn',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined
        });
    });

    test('parses HSLA color without unit (default to degrees)', () => {
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
            aUnit: undefined
        });
    });

    test('parses HSLA color with alpha percentage', () => {
        const result = parseHsla('hsla(180, 100%, 50%, 50%)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: '%'
        });
    });

    test('parses HSLA color with mixed case units', () => {
        const result = parseHsla('hsla(180DeG, 100%, 50%, 0.5)');
        expect(result).toEqual({
            h: 180,
            hUnit: 'DeG',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0.5,
            aUnit: undefined
        });
    });

    test('throws error for invalid HSLA color', () => {
        expect(() => parseHsla('hsla(370, 100%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, 110%, 50%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, 100%, 150%, 0.5)')).toThrow('Invalid HSLA color format');
        expect(() => parseHsla('hsla(180, 100%, 50%, 1.5)')).toThrow('Invalid HSLA color format');
    });

    test('parses HSLA color with integer alpha', () => {
        const result = parseHsla('hsla(180, 100%, 50%, 1)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 1,
            aUnit: undefined
        });
    });

    test('parses HSLA color with alpha as 0%', () => {
        const result = parseHsla('hsla(180, 100%, 50%, 0%)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%',
            a: 0,
            aUnit: '%'
        });
    });
});
