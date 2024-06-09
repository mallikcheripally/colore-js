import { rebuildColorFromRgba } from '@/parser/rebuildColorFromRgba';

describe('rebuildColorFromRgba', () => {
    test('rebuilds HEX color from RGBA components', () => {
        expect(rebuildColorFromRgba('#ff0000', { r: 255, g: 0, b: 0, a: 1 })).toBe('#ff0000');
        expect(rebuildColorFromRgba('#00ff00', { r: 0, g: 255, b: 0, a: 1 })).toBe('#00ff00');
        expect(rebuildColorFromRgba('#0000ff', { r: 0, g: 0, b: 255, a: 1 })).toBe('#0000ff');
    });

    test('rebuilds HEX_ALPHA color from RGBA components', () => {
        expect(rebuildColorFromRgba('#ff000080', { r: 255, g: 0, b: 0, a: 0.5 })).toBe('#ff000080');
        expect(rebuildColorFromRgba('#00ff00cc', { r: 0, g: 255, b: 0, a: 0.8 })).toBe('#00ff00cc');
        expect(rebuildColorFromRgba('#0000ff33', { r: 0, g: 0, b: 255, a: 0.2 })).toBe('#0000ff33');
    });

    test('rebuilds RGB color from RGBA components', () => {
        expect(rebuildColorFromRgba('rgb(255, 0, 0)', { r: 255, g: 0, b: 0, a: 1 })).toBe('rgb(255, 0, 0)');
        expect(rebuildColorFromRgba('rgb(0, 255, 0)', { r: 0, g: 255, b: 0, a: 1 })).toBe('rgb(0, 255, 0)');
        expect(rebuildColorFromRgba('rgb(0, 0, 255)', { r: 0, g: 0, b: 255, a: 1 })).toBe('rgb(0, 0, 255)');
    });

    test('rebuilds RGBA color from RGBA components', () => {
        expect(rebuildColorFromRgba('rgba(255, 0, 0, 0.5)', { r: 255, g: 0, b: 0, a: 0.5 })).toBe('rgba(255, 0, 0, 0.5)');
        expect(rebuildColorFromRgba('rgba(0, 255, 0, 0.8)', { r: 0, g: 255, b: 0, a: 0.8 })).toBe('rgba(0, 255, 0, 0.8)');
        expect(rebuildColorFromRgba('rgba(0, 0, 255, 0.2)', { r: 0, g: 0, b: 255, a: 0.2 })).toBe('rgba(0, 0, 255, 0.2)');
    });

    test('rebuilds HSL color from RGBA components', () => {
        expect(rebuildColorFromRgba('hsl(0, 100%, 50%)', { r: 255, g: 0, b: 0, a: 1 })).toBe('hsl(0, 100%, 50%)');
        expect(rebuildColorFromRgba('hsl(120, 100%, 50%)', { r: 0, g: 255, b: 0, a: 1 })).toBe('hsl(120, 100%, 50%)');
        expect(rebuildColorFromRgba('hsl(240, 100%, 50%)', { r: 0, g: 0, b: 255, a: 1 })).toBe('hsl(240, 100%, 50%)');
    });

    test('rebuilds HSLA color from RGBA components', () => {
        expect(rebuildColorFromRgba('hsla(0, 100%, 50%, 0.5)', { r: 255, g: 0, b: 0, a: 0.5 })).toBe('hsla(0, 100%, 50%, 0.5)');
        expect(rebuildColorFromRgba('hsla(120, 100%, 50%, 0.8)', { r: 0, g: 255, b: 0, a: 0.8 })).toBe('hsla(120, 100%, 50%, 0.8)');
        expect(rebuildColorFromRgba('hsla(240, 100%, 50%, 0.2)', { r: 0, g: 0, b: 255, a: 0.2 })).toBe('hsla(240, 100%, 50%, 0.2)');
    });

    test('rebuilds LAB color from RGBA components', () => {
        expect(rebuildColorFromRgba('lab(53.233 80.109 67.220)', { r: 255, g: 0, b: 0, a: 1 })).toEqual('lab(53.24079 80.09246 67.2032)');
    });

    test('rebuilds LCH color from RGBA components', () => {
        expect(rebuildColorFromRgba('lch(53.233 104.551 40.000)', { r: 255, g: 0, b: 0, a: 1 })).toEqual('lch(53.24079 104.55177 39.99901)');
    });

    test('throws error for unsupported color format', () => {
        expect(() => rebuildColorFromRgba('unknown(255, 0, 0)', { r: 255, g: 0, b: 0, a: 1 })).toThrow('Unsupported color format: unknown');
    });
});
