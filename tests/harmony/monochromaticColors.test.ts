import { monochromaticColors } from '@/harmony/monochromaticColors';

describe('monochromaticColors', () => {
    test('finds monochromatic colors for LAB color', () => {
        const result = monochromaticColors('lab(50 40 30)');
        expect(result).toEqual([
            'lab(10 40 30)',
            'lab(30 40 30)',
            'lab(50 40 30)',
            'lab(70 40 30)',
            'lab(90 40 30)',
        ]);
    });

    test('finds monochromatic colors for LCH color', () => {
        const result = monochromaticColors('lch(50 30 100)');
        expect(result).toEqual([
            'lch(10 30 100)',
            'lch(30 30 100)',
            'lch(50 30 100)',
            'lch(70 30 100)',
            'lch(90 30 100)',
        ]);
    });

    test('finds monochromatic colors for RGB color', () => {
        const result = monochromaticColors('rgb(255, 0, 0)');
        expect(result).toEqual([
            'rgb(51, 0, 0)',
            'rgb(153, 0, 0)',
            'rgb(255, 0, 0)',
            'rgb(255, 102, 102)',
            'rgb(255, 204, 204)',
        ]);
    });

    test('finds monochromatic colors for RGBA color', () => {
        const result = monochromaticColors('rgba(255, 0, 0, 0.5)');
        expect(result).toEqual([
            'rgba(51, 0, 0, 0.5)',
            'rgba(153, 0, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(255, 102, 102, 0.5)',
            'rgba(255, 204, 204, 0.5)',
        ]);
    });

    test('finds monochromatic colors for HEX color', () => {
        const result = monochromaticColors('#ff0000');
        expect(result).toEqual([
            '#330000',
            '#990000',
            '#ff0000',
            '#ff6666',
            '#ffcccc',
        ]);
    });

    test('finds monochromatic colors for HEX_ALPHA color', () => {
        const result = monochromaticColors('#ff000080');
        expect(result).toEqual([
            '#33000080',
            '#99000080',
            '#ff000080',
            '#ff666680',
            '#ffcccc80',
        ]);
    });

    test('finds monochromatic colors for HSL color', () => {
        const result = monochromaticColors('hsl(0, 100%, 50%)');
        expect(result).toEqual([
            'hsl(0, 100%, 10%)',
            'hsl(0, 100%, 30%)',
            'hsl(0, 100%, 50%)',
            'hsl(0, 100%, 70%)',
            'hsl(0, 100%, 90%)'
        ]);
    });

    test('finds monochromatic colors for HSLA color', () => {
        const result = monochromaticColors('hsla(0, 100%, 50%, 0.5)');
        expect(result).toEqual([
            'hsla(0, 100%, 10%, 0.5)',
            'hsla(0, 100%, 30%, 0.5)',
            'hsla(0, 100%, 50%, 0.5)',
            'hsla(0, 100%, 70%, 0.5)',
            'hsla(0, 100%, 90%, 0.5)',
        ]);
    });

    test('finds monochromatic colors for named color', () => {
        const result = monochromaticColors('red');
        expect(result).toEqual([
            'rgb(51, 0, 0)',
            'rgb(153, 0, 0)',
            'rgb(255, 0, 0)',
            'rgb(255, 102, 102)',
            'rgb(255, 204, 204)',
        ]);
    });
});
