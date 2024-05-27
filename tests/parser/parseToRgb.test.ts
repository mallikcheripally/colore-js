import { parseToRgb } from '@/parser/parseToRgb';

describe('parseToRgb', () => {
    test('converts hex to rgb', () => {
        expect(parseToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
        expect(parseToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts hsl to rgb', () => {
        expect(parseToRgb('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0 });
        expect(parseToRgb('hsl(120, 100%, 50%)')).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts lab to rgb', () => {
        expect(parseToRgb('lab(53.23, 80.09, 67.2)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts lch to rgb', () => {
        expect(parseToRgb('lch(53.23, 104.55, 40.00)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts xyz to rgb', () => {
        expect(parseToRgb('xyz(41.24, 21.26, 1.93)')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts named color to rgb', () => {
        expect(parseToRgb('red')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('throws error for invalid color format', () => {
        expect(() => parseToRgb('invalid-color')).toThrow('Invalid color format invalid-color');
    });
});
