import { parseColorToRgba } from '@/parser/parseColorToRgba';

describe('parseColorToRgba', () => {
    test('parse HEX color', () => {
        expect(parseColorToRgba('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse HEX-ALPHA color', () => {
        expect(parseColorToRgba('#ff000080')).toEqual({ r: 255, g: 0, b: 0, a: 0.502 });
    });

    test('parse HSL color', () => {
        expect(parseColorToRgba('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse HSLA color', () => {
        expect(parseColorToRgba('hsla(0, 100%, 50%, 0.5)')).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
    });

    test('parse LAB color', () => {
        expect(parseColorToRgba('lab(53.23288 80.10933 67.2201)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse LCH color', () => {
        expect(parseColorToRgba('lch(53.23288 104.551 40.0)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse XYZ color', () => {
        expect(parseColorToRgba('xyz(41.24, 21.26, 1.93)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse RGB color', () => {
        expect(parseColorToRgba('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('parse RGBA color', () => {
        expect(parseColorToRgba('rgba(255, 0, 0, 0.5)')).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
    });

    test('parse named color', () => {
        expect(parseColorToRgba('red')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('throws error for invalid color format', () => {
        expect(() => parseColorToRgba('invalid-color')).toThrow('Invalid color format invalid-color');
    });
});
