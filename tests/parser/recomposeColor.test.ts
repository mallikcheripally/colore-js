import { recomposeColor } from '@/parser/recomposeColor';

describe('recomposeColor', () => {
    test('recomposes hex color correctly', () => {
        expect(recomposeColor('#ff0000', [255, 0, 0])).toBe('#ff0000');
    });

    test('recomposes hex alpha color correctly', () => {
        expect(recomposeColor('#ff000080', [255, 0, 0, 128])).toBe('#ff000080');
    });

    test('recomposes rgb color correctly', () => {
        expect(recomposeColor('rgb(255, 0, 0)', [255, 0, 0])).toBe('rgb(255, 0, 0)');
    });

    test('recomposes rgba color correctly', () => {
        expect(recomposeColor('rgba(255, 0, 0, 0.5)', [255, 0, 0, 0.5])).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('recomposes hsl color correctly', () => {
        expect(recomposeColor('hsl(0, 100%, 50%)', [0, 100, 50])).toBe('hsl(0, 100%, 50%)');
    });

    test('recomposes hsla color correctly', () => {
        expect(recomposeColor('hsla(0, 100%, 50%, 0.5)', [0, 100, 50, 0.5])).toBe('hsla(0, 100%, 50%, 0.5)');
    });

    test('recomposes lch color correctly', () => {
        expect(recomposeColor('lch(53.24% 104.55 40)', [53.24, 104.55, 40])).toBe('lch(53.24% 104.55 40)');
    });

    test('recomposes lab color correctly', () => {
        expect(recomposeColor('lab(53.23% 80.09 67.2)', [53.23, 80.09, 67.2])).toBe('lab(53.23% 80.09 67.2)');
    });

    test('recomposes xyz color correctly', () => {
        expect(recomposeColor('xyz(41.24, 21.26, 1.93)', [41.24, 21.26, 1.93])).toBe('xyz(41.24, 21.26, 1.93)');
    });

    test('recomposes named color correctly', () => {
        expect(recomposeColor('red', [255, 0, 0])).toBe('red');
    });

    test('throws error for unrecognized color format', () => {
        expect(() => recomposeColor('invalidColor', [255, 0, 0])).toThrow('Unsupported color format: invalidColor');
    });
});
