import { desaturateColor } from '@/manipulations/desaturateColor';

describe('desaturateColor', () => {
    test('desaturates an HSL color', () => {
        expect(desaturateColor('hsl(0, 100%, 50%)', 50)).toBe('hsl(0, 50%, 50%)');
    });

    test('desaturates an HSLA color', () => {
        expect(desaturateColor('hsla(0, 100%, 50%, 0.5)', 50)).toBe('hsla(0, 50%, 50%, 0.5)');
    });

    test('desaturates an RGB color', () => {
        expect(desaturateColor('rgb(255, 0, 0)', 50)).toBe('rgb(191, 64, 64)');
    });

    test('desaturates an RGBA color', () => {
        expect(desaturateColor('rgba(255, 0, 0, 0.5)', 50)).toBe('rgba(191, 64, 64, 0.5)');
    });

    test('desaturates a HEX color', () => {
        expect(desaturateColor('#ff0000', 50)).toBe('#bf4040');
    });

    test('desaturates a HEX_ALPHA color', () => {
        expect(desaturateColor('#ff000080', 50)).toBe('#bf404080');
    });

    test('desaturates a LAB color', () => {
        expect(desaturateColor('lab(50% 40 60)', 50)).toBe('lab(50% 20 30)');
    });

    test('desaturates a LCH color', () => {
        expect(desaturateColor('lch(50% 30 100)', 50)).toBe('lch(50% 15 100)');
    });

    test('throws an error for invalid amount', () => {
        expect(() => desaturateColor('hsl(0, 50%, 50%)', 150)).toThrow('Invalid amount 150. Amount should be between 0 and 100.')
    })

    test('throws an error for unsupported color format', () => {
        expect(() => desaturateColor('red', 50)).toThrow('Unsupported color format red for desaturation');
    });
});
