import { decomposeColor } from '@/parser/decomposeColor';

describe('decomposeColor', () => {
    test('decomposeColor should decompose a hex color', () => {
        expect(decomposeColor('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
    });

    test('decomposeColor should decompose a hex-alpha color', () => {
        expect(decomposeColor('#ff573380')).toEqual({ r: 255, g: 87, b: 51, a: 0.502 });
    });

    test('decomposeColor should decompose an rgb color', () => {
        expect(decomposeColor('rgb(255, 87, 51)')).toEqual({ r: 255, rUnit: undefined, rNum: 255, g: 87, gUnit: undefined, gNum: 87, b: 51, bUnit: undefined, bNum: 51 });
    });

    test('decomposeColor should decompose an rgba color', () => {
        expect(decomposeColor('rgba(255, 87, 51, 0.5)')).toEqual({ r: 255, rUnit: undefined, rNum: 255, g: 87, gUnit: undefined, gNum: 87, b: 51, bUnit: undefined, bNum: 51, a: 0.5, aUnit: undefined, aNum: 0.5 });
    });

    test('decomposeColor should decompose an hsl color', () => {
        expect(decomposeColor('hsl(9, 100%, 60%)')).toEqual({ h: 9, hUnit: undefined, hDeg: 9, s: 100, sUnit: '%', l: 60, lUnit: '%' });
    });

    test('decomposeColor should decompose an hsla color', () => {
        expect(decomposeColor('hsla(9, 100%, 60%, 0.5)')).toEqual({ h: 9, hUnit: undefined, hDeg: 9, s: 100, sUnit: '%', l: 60, lUnit: '%', a: 0.5, aUnit: undefined, aNum: 0.5 });
    });

    test('decomposeColor should decompose a lab color', () => {
        expect(decomposeColor('lab(53.23288% 80.1093 -67.2201)')).toEqual({ l: 53.23288, lUnit: '%', a: 80.1093, aUnit: undefined, b: -67.2201, bUnit: undefined, alpha: undefined, alphaUnit: undefined });
    });

    test('decomposeColor should decompose a lch color', () => {
        expect(decomposeColor('lch(53.23288% 104.5518 40.8521)')).toEqual({ l: 53.23288, lUnit: '%', c: 104.5518, cUnit: undefined, h: 40.8521, hUnit: undefined, hDeg: 40.8521, alpha: undefined, alphaUnit: undefined });
    });

    test('decomposeColor should decompose an xyz color', () => {
        expect(decomposeColor('xyz(41.24, 21.26, 1.93)')).toEqual({ x: 41.24, y: 21.26, z: 1.93 });
    });

    test('decomposeColor should decompose a named color', () => {
        expect(decomposeColor('red')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposeColor should throw an error for an unsupported color format', () => {
        expect(() => decomposeColor('invalidColor')).toThrow('Invalid color format invalidColor');
    });
})
