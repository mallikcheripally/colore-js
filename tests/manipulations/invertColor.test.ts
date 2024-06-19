import { invertColor } from '@/manipulations/invertColor';

describe('invertColor', () => {
    test('inverts RGB color', () => {
        const result = invertColor('rgb(255, 0, 0)');
        expect(result).toBe('rgb(0, 255, 255)');
    });

    test('inverts RGBA color', () => {
        const result = invertColor('rgba(255, 0, 0, 0.5)');
        expect(result).toBe('rgba(0, 255, 255, 0.5)');
    });

    test('inverts HEX color', () => {
        const result = invertColor('#ff0000');
        expect(result).toBe('#00ffff');
    });

    test('inverts HEX_ALPHA color', () => {
        const result = invertColor('#ff000080');
        expect(result).toBe('#00ffff80');
    });

    test('inverts HSL color', () => {
        const result = invertColor('hsl(0, 100%, 50%)');
        expect(result).toBe('hsl(0, 100%, 50%)'); // Lightness is inverted
    });

    test('inverts HSLA color', () => {
        const result = invertColor('hsla(0, 100%, 50%, 0.5)');
        expect(result).toBe('hsla(0, 100%, 50%, 0.5)'); // Lightness is inverted
    });

    test('inverts LAB color', () => {
        const result = invertColor('lab(50 40 30)');
        expect(result).toBe('lab(50 -40 -30)');
    });

    test('inverts LCH color', () => {
        const result = invertColor('lch(50 30 100)');
        expect(result).toBe('lch(50 30 280)');
    });

    test('inverts named color', () => {
        const result = invertColor('red');
        expect(result).toBe('rgb(0, 255, 255)');
    });
});
