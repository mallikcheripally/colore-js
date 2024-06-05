import { recomposeColor } from '@/parser/recomposeColor';

describe('recomposeColor', () => {
    test('recomposes hex color', () => {
        expect(recomposeColor('#ff5733', { r: 255, g: 87, b: 51 })).toBe('#ff5733');
    });

    test('recomposes hex-alpha color', () => {
        expect(recomposeColor('#ff573380', { r: 255, g: 87, b: 51, a: 0.5 })).toBe('#ff573380');
    });

    test('recomposes rgb color', () => {
        expect(recomposeColor('rgb(255, 87, 51)', { r: 255, g: 87, b: 51 })).toBe('rgb(255, 87, 51)');
        expect(recomposeColor('rgb(50%, 25%, 10%)', { r: 50, rUnit: '%', g: 25, gUnit: '%', b: 10, bUnit: '%' })).toBe('rgb(50%, 25%, 10%)');
    });

    test('recomposes rgba color', () => {
        expect(recomposeColor('rgba(255, 87, 51, 0.5)', { r: 255, g: 87, b: 51, a: 0.5 })).toBe('rgba(255, 87, 51, 0.5)');
        expect(recomposeColor('rgba(50%, 25%, 10%, 50%)', { r: 50, rUnit: '%', g: 25, gUnit: '%', b: 10, bUnit: '%', a: 50, aUnit: '%' })).toBe('rgba(50%, 25%, 10%, 50%)');
    });

    test('recomposes hsl color', () => {
        expect(recomposeColor('hsl(120, 100%, 50%)', { h: 120, s: 100, l: 50, sUnit: '%', lUnit: '%' })).toBe('hsl(120, 100%, 50%)');
    });

    test('recomposes hsla color', () => {
        expect(recomposeColor('hsla(120, 100%, 50%, 0.5)', { h: 120, s: 100, l: 50, a: 0.5, sUnit: '%', lUnit: '%' })).toBe('hsla(120, 100%, 50%, 0.5)');
    });

    test('recomposes lab color', () => {
        expect(recomposeColor('lab(52.2345% 40.1645 59.9971)', { l: 52.2345, a: 40.1645, b: 59.9971, lUnit: '%' })).toBe('lab(52.2345% 40.1645 59.9971)');
        expect(recomposeColor('lab(52.2345% 40.1645 59.9971 / 0.5)', { l: 52.2345, a: 40.1645, b: 59.9971, alpha: 0.5, lUnit: '%' })).toBe('lab(52.2345% 40.1645 59.9971 / 0.5)');
    });

    test('recomposes lch color', () => {
        expect(recomposeColor('lch(52.2345% 40.1645 59.9971)', { l: 52.2345, c: 40.1645, h: 59.9971, lUnit: '%' })).toBe('lch(52.2345% 40.1645 59.9971)');
        expect(recomposeColor('lch(52.2345% 40.1645 59.9971 / 0.5)', { l: 52.2345, c: 40.1645, h: 59.9971, alpha: 0.5, lUnit: '%' })).toBe('lch(52.2345% 40.1645 59.9971 / 0.5)');
    });

    test('recomposes xyz color', () => {
        expect(recomposeColor('xyz(0.4124, 0.3576, 0.1805)', { x: 0.4124, y: 0.3576, z: 0.1805 })).toBe('xyz(0.41, 0.36, 0.18)');
    });

    test('recomposes named color', () => {
        expect(recomposeColor('red', { r: 255, g: 0, b: 0 })).toBe('rgb(255, 0, 0)');
    });

    test('throws error for invalid color format', () => {
        expect(() => recomposeColor('rbg(100, 150, 200)', { r: 100, g: 200, b: 200 })).toThrow('Invalid color format rbg(100, 150, 200)');
    })
})
