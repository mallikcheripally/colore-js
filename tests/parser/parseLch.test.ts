import { parseLch } from "@/parser/parseLch";

describe('parseLch', () => {
    test('parses LCH color without alpha correctly', () => {
        const result = parseLch('lch(52.2345% 40.1645 59.9971)');
        expect(result).toEqual({
            l: 52.2345,
            lUnit: '%',
            c: 40.1645,
            cUnit: undefined,
            h: 59.9971,
            hUnit: undefined,
            hDeg: 59.9971,
            alpha: undefined,
            alphaUnit: undefined,
        });
    });

    test('parses LCH color with alpha correctly', () => {
        const result = parseLch('lch(52.2345% 40.1645 59.9971 / 0.5)');
        expect(result).toEqual({
            l: 52.2345,
            lUnit: '%',
            c: 40.1645,
            cUnit: undefined,
            h: 59.9971,
            hUnit: undefined,
            hDeg: 59.9971,
            alpha: 0.5,
            alphaUnit: undefined,
        });
    });

    test('parses LCH color with alpha percentage correctly', () => {
        const result = parseLch('lch(52.2345% 40.1645 59.9971 / 50%)');
        expect(result).toEqual({
            l: 52.2345,
            lUnit: '%',
            c: 40.1645,
            cUnit: undefined,
            h: 59.9971,
            hUnit: undefined,
            hDeg: 59.9971,
            alpha: 50,
            alphaUnit: '%',
        });
    });

    test('parses LCH color with units correctly', () => {
        const result = parseLch('lch(52.2345% 40.1645% 59.9971deg)');
        expect(result).toEqual({
            l: 52.2345,
            lUnit: '%',
            c: 40.1645,
            cUnit: '%',
            h: 59.9971,
            hUnit: 'deg',
            hDeg: 59.9971,
            alpha: undefined,
            alphaUnit: undefined,
        });
    });

    test('parses LCH color with radians correctly', () => {
        const result = parseLch('lch(50 230 2rad)');
        expect(result).toEqual({
            l: 50,
            lUnit: undefined,
            c: 230,
            cUnit: undefined,
            h: 2,
            hUnit: 'rad',
            hDeg: 114.59155902616465,
            alpha: undefined,
            alphaUnit: undefined,
        });
    });

    test('parses LCH color with turns correctly', () => {
        const result = parseLch('lch(50 230 0.5turn)');
        expect(result).toEqual({
            l: 50,
            lUnit: undefined,
            c: 230,
            cUnit: undefined,
            h: 0.5,
            hUnit: 'turn',
            hDeg: 180,
            alpha: undefined,
            alphaUnit: undefined,
        });
    });

    test('throws error for invalid LCH color format', () => {
        expect(() => parseLch('lch(101 0 0)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(50 250 0)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(150 0 150)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(50 0 0 / 1.5)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(-10 0 0)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(50 -130 0)')).toThrow('Invalid LCH color format');
    });
});

