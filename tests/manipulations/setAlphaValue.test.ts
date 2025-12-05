import { setAlphaValue } from '@/manipulations/setAlphaValue';

describe('setAlphaValue', () => {
    test('sets alpha value for RGBA color', () => {
        expect(setAlphaValue('rgba(255, 0, 0, 0.5)', 0.8)).toBe('rgba(255, 0, 0, 0.8)');
        expect(setAlphaValue('rgba(0, 255, 0, 0.3)', 0.5)).toBe('rgba(0, 255, 0, 0.5)');
        expect(setAlphaValue('rgba(0, 0, 255, 50%)', 0.6)).toBe('rgba(0, 0, 255, 0.6)');
    });

    test('sets alpha value for HSLA color', () => {
        expect(setAlphaValue('hsla(120, 100%, 50%, 0.5)', 0.8)).toBe('hsla(120, 100%, 50%, 0.8)');
        expect(setAlphaValue('hsla(240, 100%, 50%, 0.3)', 0.5)).toBe('hsla(240, 100%, 50%, 0.5)');
    });

    test('sets alpha value for HEX_ALPHA color', () => {
        expect(setAlphaValue('#ff000080', 0.9)).toBe('#ff0000e6');
        expect(setAlphaValue('#00ff004d', 0.7)).toBe('#00ff00b3');
    });

    test('sets alpha value for RGB color', () => {
        expect(setAlphaValue('rgb(255, 0, 0)', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
        expect(setAlphaValue('rgb(0, 255, 0)', 0.8)).toBe('rgba(0, 255, 0, 0.8)');
    });

    test('sets alpha value for HSL color', () => {
        expect(setAlphaValue('hsl(120, 100%, 50%)', 0.5)).toBe('hsla(120, 100%, 50%, 0.5)');
        expect(setAlphaValue('hsl(240, 100%, 50%)', 0.8)).toBe('hsla(240, 100%, 50%, 0.8)');
    });

    test('sets alpha value for HEX color', () => {
        expect(setAlphaValue('#ff0000', 0.5)).toBe('#ff000080');
        expect(setAlphaValue('#00ff00', 0.8)).toBe('#00ff00cc');
    });

    test('sets alpha value for LAB color', () => {
        expect(setAlphaValue('lab(50 40 30)', 0.5)).toBe('rgba(191, 88, 70, 0.5)');
        expect(setAlphaValue('lab(75 -25 25)', 0.8)).toBe('rgba(154, 196, 138, 0.8)');
    });

    test('sets alpha value for LCH color', () => {
        expect(setAlphaValue('lch(50 30 30)', 0.5)).toBe('rgba(167, 101, 95, 0.5)');
        expect(setAlphaValue('lch(75 25 250)', 0.8)).toBe('rgba(137, 191, 227, 0.8)');
    });

    test('sets alpha value for XYZ color', () => {
        expect(setAlphaValue('xyz(41.24, 21.26, 1.93)', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('sets alpha value for NAMED color', () => {
        expect(setAlphaValue('red', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
        expect(setAlphaValue('blue', 0.8)).toBe('rgba(0, 0, 255, 0.8)');
    });

    test('throws error for unsupported color format', () => {
        expect(() => setAlphaValue('invalidColor', 0.5)).toThrow('Invalid color format invalidColor');
    });

    test('throws error for invalid alpha value', () => {
        expect(() => setAlphaValue('rgba(255, 0, 0, 0.5)', 1.5)).toThrow('Invalid alpha value 1.5. Alpha should be between 0 and 1.');
        expect(() => setAlphaValue('rgba(255, 0, 0, 0.5)', -0.1)).toThrow('Invalid alpha value -0.1. Alpha should be between 0 and 1.');
    });
});
