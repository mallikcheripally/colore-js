import { blendColors } from '@/manipulations/blendColors';
import { BlendingModes } from '@/utils/blendingModes';

describe('blendColors', () => {
    test('blends two colors using NORMAL mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.NORMAL, 0.5)).toBe('rgb(128, 0, 128)');
    });

    test('blends two colors using MULTIPLY mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.MULTIPLY)).toBe('rgb(0, 0, 0)');
    });

    test('blends two colors using SCREEN mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.SCREEN)).toBe('rgb(255, 0, 255)');
    });

    test('blends two colors using OVERLAY mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.OVERLAY)).toBe('rgb(255, 0, 0)');
    });

    test('blends two colors using DARKEN mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.DARKEN)).toBe('rgb(0, 0, 0)');
    });

    test('blends two colors using LIGHTEN mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.LIGHTEN)).toBe('rgb(255, 0, 255)');
    });

    test('blends two colors using DIFFERENCE mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.DIFFERENCE)).toBe('rgb(255, 0, 255)');
    });

    test('blends two colors using EXCLUSION mode', () => {
        expect(blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.EXCLUSION)).toBe('rgb(255, 0, 255)');
    });

    test('throws error for unsupported blending mode', () => {
        expect(() => blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'unsupported')).toThrow('Unsupported blending mode: unsupported');
    });
});
