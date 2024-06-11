import { analogousColors } from '@/harmony/analogousColors';

describe('analogousColors', () => {
    test('finds analogous colors for HSL color', () => {
        const result = analogousColors('hsl(30, 100%, 50%)');
        expect(result).toEqual([
            'hsl(60, 100%, 50%)',
            'hsl(0, 100%, 50%)',
        ]);
    });

    test('finds analogous colors for HSLA color', () => {
        const result = analogousColors('hsla(30, 100%, 50%, 0.5)');
        expect(result).toEqual([
            'hsla(60, 100%, 50%, 0.5)',
            'hsla(0, 100%, 50%, 0.5)',
        ]);
    });

    test('finds analogous colors for RGB color', () => {
        const result = analogousColors('rgb(255, 0, 0)');
        expect(result).toEqual([
            'rgb(255, 128, 0)',
            'rgb(255, 0, 128)',
        ]);
    });

    test('finds analogous colors for RGBA color', () => {
        const result = analogousColors('rgba(255, 0, 0, 0.5)');
        expect(result).toEqual([
            'rgba(255, 128, 0, 0.5)',
            'rgba(255, 0, 128, 0.5)',
        ]);
    });

    test('finds analogous colors for HEX color', () => {
        const result = analogousColors('#ff0000');
        expect(result).toEqual([
            '#ff8000',
            '#ff0080',
        ]);
    });

    test('finds analogous colors for HEX-ALPHA color', () => {
        const result = analogousColors('#ff000080');
        expect(result).toEqual([
            '#ff800080',
            '#ff008080',
        ]);
    });

    test('finds analogous colors for LAB color', () => {
        const result = analogousColors('lab(50 40 30)');
        expect(result).toEqual([
            'lab(50 19.64 45.98)',
            'lab(50 49.64 5.98)',
        ]);
    });

    test('finds analogous colors for LCH color', () => {
        const result = analogousColors('lch(50 30 100)');
        expect(result).toEqual([
            'lch(50 30 130)',
            'lch(50 30 70)',
        ]);
    });

    test('finds analogous colors for named color', () => {
        const result = analogousColors('red');
        expect(result).toEqual([
            'rgb(255, 128, 0)',
            'rgb(255, 0, 128)',
        ]);
    });
});
