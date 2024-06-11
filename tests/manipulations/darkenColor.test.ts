import { darkenColor } from '@/manipulations/darkenColor';

describe('darkenColor', () => {
    test('darkens an HSL color', () => {
        const result = darkenColor('hsl(0, 100%, 50%)', 20);
        expect(result).toBe('hsl(0, 100%, 30%)');
    });

    test('darkens an HSLA color', () => {
        const result = darkenColor('hsla(0, 100%, 50%, 0.5)', 20);
        expect(result).toBe('hsla(0, 100%, 30%, 0.5)');
    });

    test('darkens a LAB color', () => {
        const result = darkenColor('lab(50 20 20)', 20);
        expect(result).toBe('lab(30 20 20)');
    });

    test('darkens an LCH color', () => {
        const result = darkenColor('lch(50 30 20)', 20);
        expect(result).toBe('lch(30 30 20)');
    });

    test('darkens an RGB color', () => {
        const result = darkenColor('rgb(255, 0, 0)', 20);
        expect(result).toBe('rgb(204, 0, 0)');
    });

    test('darkens an RGBA color', () => {
        const result = darkenColor('rgba(255, 0, 0, 0.5)', 20);
        expect(result).toBe('rgba(204, 0, 0, 0.5)');
    });

    test('darkens a HEX color', () => {
        const result = darkenColor('#ff0000', 20);
        expect(result).toBe('#cc0000');
    });

    test('darkens a HEX-ALPHA color', () => {
        const result = darkenColor('#ff000080', 20);
        expect(result).toBe('#cc000080');
    });

    test('darkens an XYZ color', () => {
        const result = darkenColor('xyz(41.24, 21.26, 1.93)', 20);
        expect(result).toBe('xyz(24.90525, 12.84177, 1.16743)');
    });

    test('darkens a named color', () => {
        const result = darkenColor('red', 20);
        expect(result).toBe('rgb(204, 0, 0)');
    });

    test('throws an error for invalid amount', () => {
        expect(() => darkenColor('rgb(255, 0, 0)', -10)).toThrow('Invalid amount -10. Amount should be between 0 and 100.');
        expect(() => darkenColor('rgb(255, 0, 0)', 110)).toThrow('Invalid amount 110. Amount should be between 0 and 100.');
    });

    test('throws an error for invalid color format', () => {
        expect(() => darkenColor('invalid-color', 20)).toThrow('Invalid color format invalid-color');
    });

    test('darkens RGB color with percentage units', () => {
        const result = darkenColor('rgb(100%, 0%, 0%)', 20);
        expect(result).toBe('rgb(80%, 0%, 0%)');
    });

    test('darkens RGBA color with percentage units', () => {
        const result = darkenColor('rgba(100%, 0%, 0%, 50%)', 20);
        expect(result).toBe('rgba(80%, 0%, 0%, 50%)');
    });
});
