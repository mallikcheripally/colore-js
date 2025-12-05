import { generateInterpolatedColors } from '@/generators/generateInterpolatedColors';

describe('generateInterpolatedColors', () => {
    test('generates interpolated colors between two RGB colors', () => {
        const result = generateInterpolatedColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', 5);
        expect(result).toEqual([
            'rgb(255, 0, 0)',
            'rgb(204, 0, 51)',
            'rgb(153, 0, 102)',
            'rgb(102, 0, 153)',
            'rgb(51, 0, 204)',
            'rgb(0, 0, 255)',
        ]);
    });

    test('generates interpolated colors between two RGBA colors', () => {
        const result = generateInterpolatedColors('rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 0.5)', 2);
        expect(result).toEqual([
            'rgba(255, 0, 0, 1)',
            'rgba(128, 0, 128, 0.75)',
            'rgba(0, 0, 255, 0.5)',
        ]);
    });

    test('generates interpolated colors between two HSL colors', () => {
        const result = generateInterpolatedColors('hsl(0, 100%, 50%)', 'hsl(240, 100%, 50%)', 4);
        expect(result).toEqual([
            'hsl(0, 100%, 50%)',
            'hsl(60, 100%, 50%)',
            'hsl(120, 100%, 50%)',
            'hsl(180, 100%, 50%)',
            'hsl(240, 100%, 50%)',
        ]);
    });

    test('generates interpolated colors between two HSLA colors', () => {
        const result = generateInterpolatedColors('hsla(0, 100%, 50%, 0.5)', 'hsla(240, 100%, 50%, 0.5)', 4);
        expect(result).toEqual([
            'hsla(0, 100%, 50%, 0.5)',
            'hsla(60, 100%, 50%, 0.5)',
            'hsla(120, 100%, 50%, 0.5)',
            'hsla(180, 100%, 50%, 0.5)',
            'hsla(240, 100%, 50%, 0.5)',
        ]);
    });

    test('generates interpolated colors between two HEX colors', () => {
        const result = generateInterpolatedColors('#ff0000', '#0000ff', 3);
        expect(result).toEqual([
            '#ff0000',
            '#aa0055',
            '#5500aa',
            '#0000ff',
        ]);
    });

    test('generates interpolated colors between two HEX Alpha colors', () => {
        const result = generateInterpolatedColors('#ff0000ff', '#0000ffff', 3);
        expect(result).toEqual([
            '#ff0000ff',
            '#aa0055ff',
            '#5500aaff',
            '#0000ffff',
        ]);
    });

    test('returns colors as objects when asString is false', () => {
        const result = generateInterpolatedColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', 2, false);
        expect(result).toEqual([
            { r: 255, g: 0, b: 0 },
            { r: 128, g: 0, b: 128 },
            { r: 0, g: 0, b: 255 },
        ]);
    });

    test('generates interpolated colors between two LAB colors', () => {
        const result = generateInterpolatedColors('lab(50 40 30)', 'lab(80 20 10)', 2);
        expect(result).toEqual([
            'lab(50 40 30)',
            "lab(65 30 20)",
            "lab(80 20 10)",
        ]);
    });

    test('generates interpolated colors between two LCH colors', () => {
        const result = generateInterpolatedColors('lch(50 30 100)', 'lch(80 20 200)', 2);
        expect(result).toEqual([
            'lch(50 30 100)',
            "lch(65 25 150)",
            "lch(80 20 200)",
        ]);
    });

    test('throws when steps is not a positive integer', () => {
        expect(() => generateInterpolatedColors('rgb(0, 0, 0)', 'rgb(255, 255, 255)', 0)).toThrow(
            'Steps must be a positive integer',
        );
        expect(() => generateInterpolatedColors('rgb(0, 0, 0)', 'rgb(255, 255, 255)', -1)).toThrow();
    });
});
