import { decomposeColor } from '@/parser/decomposeColor';

describe('decomposeColor', () => {
    test('converts hex to rgb', () => {
        expect(decomposeColor('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
        expect(decomposeColor('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts hsl to rgb', () => {
        expect(decomposeColor('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0 });
        expect(decomposeColor('hsl(120, 100%, 50%)')).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts lab to rgb', () => {
        expect(decomposeColor('lab(53.23, 80.09, 67.2)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts lch to rgb', () => {
        expect(decomposeColor('lch(53.23, 104.55, 40.00)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts xyz to rgb', () => {
        expect(decomposeColor('xyz(41.24, 21.26, 1.93)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts named color to rgb', () => {
        expect(decomposeColor('red')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('throws error for invalid color format', () => {
        expect(() => decomposeColor('invalid-color')).toThrow('Invalid color format invalid-color');
    });
});
