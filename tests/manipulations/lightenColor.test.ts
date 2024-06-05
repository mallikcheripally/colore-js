import { lightenColor } from '@/manipulations/lightenColor';

describe('lightenColor', () => {
    test('throws error for invalid amount', () => {
        expect(() => lightenColor('rgb(100, 100, 100)', -10)).toThrow('Invalid amount -10. Amount should be between 0 and 100.');
        expect(() => lightenColor('rgb(100, 100, 100)', 110)).toThrow('Invalid amount 110. Amount should be between 0 and 100.');
    });

    test('lightens HSL color', () => {
        expect(lightenColor('hsl(0, 100%, 50%)', 20)).toBe('hsl(0, 100%, 70%)');
    });

    test('lightens HSLA color', () => {
        expect(lightenColor('hsla(0, 100%, 50%, 0.5)', 20)).toBe('hsla(0, 100%, 70%, 0.5)');
    });

    test('lightens LAB color', () => {
        expect(lightenColor('lab(50% 40 50)', 20)).toBe('lab(70% 40 50)');
    });

    test('lightens LCH color', () => {
        expect(lightenColor('lch(50% 40 50)', 20)).toBe('lch(70% 40 50)');
    });

    test('lightens RGB color', () => {
        expect(lightenColor('rgb(100, 100, 100)', 20)).toBe('rgb(131, 131, 131)');
        expect(lightenColor('rgb(50%, 50%, 50%)', 20)).toBe('rgb(60%, 60%, 60%)');
    });

    test('lightens RGBA color', () => {
        expect(lightenColor('rgba(100, 100, 100, 0.5)', 20)).toBe('rgba(131, 131, 131, 0.5)');
        expect(lightenColor('rgba(50%, 50%, 50%, 0.5)', 20)).toBe('rgba(60%, 60%, 60%, 0.5)');
    });

    test('lightens HEX color', () => {
        expect(lightenColor('#646464', 20)).toBe('#838383');
        expect(lightenColor('#808080', 20)).toBe('#999999');
    });

    test('lightens HEX-Alpha color', () => {
        expect(lightenColor('#64646480', 20)).toBe('#83838380');
        expect(lightenColor('#80808080', 20)).toBe('#99999980');
    });

    test('lightens XYZ color', () => {
        expect(lightenColor('xyz(20, 21, 23)', 20)).toBe('xyz(30.11, 31.53, 34.63)');
    });

    test('lightens named color', () => {
        expect(lightenColor('darkgray', 20)).toBe('rgb(186, 186, 186)');
        expect(lightenColor('darkgrey', 20)).toBe('rgb(186, 186, 186)');
    });

    test('throws error for invalid format', () => {
        expect(() => lightenColor('rbg(100, 100, 100)', 10)).toThrow('Invalid color format rbg(100, 100, 100)');
    })
});
