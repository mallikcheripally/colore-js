import { parseHsl } from "@/parser/parseHsl";

describe('parseHsl', () => {
    test('parses HSL color with degrees', () => {
        const result = parseHsl('hsl(180deg, 100%, 50%)');
        expect(result).toEqual({
            h: 180,
            hUnit: 'deg',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('parses HSL color with radians', () => {
        const result = parseHsl('hsl(3.14rad, 100%, 50%)');
        expect(result).toEqual({
            h: 3.14,
            hUnit: 'rad',
            hDeg: 179.9087476710785,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('parses HSL color with gradians', () => {
        const result = parseHsl('hsl(200grad, 100%, 50%)');
        expect(result).toEqual({
            h: 200,
            hUnit: 'grad',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('parses HSL color with turns', () => {
        const result = parseHsl('hsl(0.5turn, 100%, 50%)');
        expect(result).toEqual({
            h: 0.5,
            hUnit: 'turn',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('parses HSL color without unit (default to degrees)', () => {
        const result = parseHsl('hsl(180, 100%, 50%)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('throws error for invalid HSL color', () => {
        expect(() => parseHsl('hsl(370, 100%, 50%)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(180, 110%, 50%)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(180, 100%, 110%)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(abc, 100%, 50%)')).toThrow('Invalid HSL color format');
    });

    test('parses HSL color with mixed case units', () => {
        const result = parseHsl('hsl(180DeG, 100%, 50%)');
        expect(result).toEqual({
            h: 180,
            hUnit: 'DeG',
            hDeg: 180,
            s: 100,
            sUnit: '%',
            l: 50,
            lUnit: '%'
        });
    });

    test('parses HSL color with no units for saturation and lightness', () => {
        const result = parseHsl('hsl(180, 100, 50)');
        expect(result).toEqual({
            h: 180,
            hUnit: undefined,
            hDeg: 180,
            s: 100,
            sUnit: undefined,
            l: 50,
            lUnit: undefined
        });
    });
});


