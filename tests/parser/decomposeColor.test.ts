import { decomposeColor } from '@/parser/decomposeColor';

describe('decomposeColor', () => {
    test('decomposes HEX color', () => {
        expect(decomposeColor('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes HEX-ALPHA color', () => {
        expect(decomposeColor('#ff000080')).toEqual({ r: 255, g: 0, b: 0, a: 0.502 });
    });

    test('decomposes HSL color', () => {
        expect(decomposeColor('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes HSLA color', () => {
        expect(decomposeColor('hsla(0, 100%, 50%, 0.5)')).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
    });

    test('decomposes LAB color', () => {
        expect(decomposeColor('lab(53.23288 80.10933 67.2201)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes LCH color', () => {
        expect(decomposeColor('lch(53.23288 104.551 40.0)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes XYZ color', () => {
        expect(decomposeColor('xyz(41.24, 21.26, 1.93)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes RGB color', () => {
        expect(decomposeColor('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('decomposes RGBA color', () => {
        expect(decomposeColor('rgba(255, 0, 0, 0.5)')).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
    });

    test('decomposes named color', () => {
        expect(decomposeColor('red')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('throws error for invalid color format', () => {
        expect(() => decomposeColor('invalid-color')).toThrow('Invalid color format invalid-color');
    });
});

