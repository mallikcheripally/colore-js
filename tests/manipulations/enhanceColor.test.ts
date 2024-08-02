import { enhanceColor } from '@/index';

describe('enhanceColor', () => {
    test('lightens a dark RGB color', () => {
        expect(enhanceColor('rgb(50, 50, 50)', 20)).toBe('rgb(91, 91, 91)');
    });

    test('darkens a light RGB color', () => {
        expect(enhanceColor('rgb(200, 200, 200)', 20)).toBe('rgb(160, 160, 160)');
    });

    test('lightens a dark RGBA color', () => {
        expect(enhanceColor('rgba(50, 50, 50, 0.5)', 20)).toBe('rgba(91, 91, 91, 0.5)');
    });

    test('darkens a light RGBA color', () => {
        expect(enhanceColor('rgba(200, 200, 200, 0.5)', 20)).toBe('rgba(160, 160, 160, 0.5)');
    });

    test('lightens a dark HEX color', () => {
        expect(enhanceColor('#333333', 20)).toBe('#5c5c5c');
    });

    test('darkens a light HEX color', () => {
        expect(enhanceColor('#CCCCCC', 20)).toBe('#a3a3a3');
    });

    test('lightens a dark HEX_ALPHA color', () => {
        expect(enhanceColor('#33333380', 20)).toBe('#5c5c5c80');
    });

    test('darkens a light HEX_ALPHA color', () => {
        expect(enhanceColor('#CCCCCC80', 20)).toBe('#a3a3a380');
    });

    test('lightens a dark HSL color', () => {
        expect(enhanceColor('hsl(0, 0%, 20%)', 20)).toBe('hsl(0, 0%, 40%)');
    });

    test('darkens a light HSL color', () => {
        expect(enhanceColor('hsl(0, 0%, 80%)', 20)).toBe('hsl(0, 0%, 60%)');
    });

    test('lightens a dark HSLA color', () => {
        expect(enhanceColor('hsla(0, 0%, 20%, 0.5)', 20)).toBe('hsla(0, 0%, 40%, 0.5)');
    });

    test('darkens a light HSLA color', () => {
        expect(enhanceColor('hsla(0, 0%, 80%, 0.5)', 20)).toBe('hsla(0, 0%, 60%, 0.5)');
    });

    test('lightens a dark LAB color', () => {
        expect(enhanceColor('lab(20 0 0)', 20)).toBe('lab(40 0 0)');
    });

    test('darkens a light LAB color', () => {
        expect(enhanceColor('lab(80 0 0)', 20)).toBe('lab(60 0 0)');
    });

    test('lightens a dark LCH color', () => {
        expect(enhanceColor('lch(20 0 0)', 20)).toBe('lch(40 0 0)');
    });

    test('darkens a light LCH color', () => {
        expect(enhanceColor('lch(80 0 0)', 20)).toBe('lch(60 0 0)');
    });

    test('lightens a dark named color', () => {
        expect(enhanceColor('navy', 20)).toBe('rgb(51, 51, 153)');
    });

    test('darkens a light named color', () => {
        expect(enhanceColor('white', 20)).toBe('rgb(204, 204, 204)');
    });

    test('throws error for unsupported color format', () => {
        expect(() => enhanceColor('invalid-color', 20)).toThrow(
            'Invalid color format invalid-color'
        );
    });

    test('throws error for out-of-range amount', () => {
        expect(() => enhanceColor('rgb(50, 50, 50)', -10)).toThrow(
            'Invalid amount -10. Amount should be between 0 and 100.'
        );
    });
});
