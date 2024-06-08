import { rgbToLch } from '@/conversions/rgbToLch';

describe('rgbToLch', () => {
    test('converts RGB to LCH string', () => {
        expect(rgbToLch(255, 0, 0, true)).toBe('lch(53.24079, 104.55177, 39.99901)');
        expect(rgbToLch(0, 255, 0, true)).toBe('lch(87.73472, 119.77588, 136.01595)');
        expect(rgbToLch(0, 0, 255, true)).toBe('lch(32.29701, 133.80761, 306.28494)');
    });

    test('converts RGB to LCH object', () => {
        expect(rgbToLch(255, 0, 0, false)).toEqual({ l: 53.24079, c: 104.55177, h: 39.99901 });
        expect(rgbToLch(0, 255, 0, false)).toEqual({ l: 87.73472, c: 119.77588, h: 136.01595 });
        expect(rgbToLch(0, 0, 255, false)).toEqual({ l: 32.29701, c: 133.80761, h: 306.28494 });
    });

    test('throws error for invalid RGB values', () => {
        expect(() => rgbToLch(-1, 0, 0)).toThrow('Invalid RGB color value -1, 0, 0');
        expect(() => rgbToLch(256, 0, 0)).toThrow('Invalid RGB color value 256, 0, 0');
        expect(() => rgbToLch(0, -1, 0)).toThrow('Invalid RGB color value 0, -1, 0');
        expect(() => rgbToLch(0, 256, 0)).toThrow('Invalid RGB color value 0, 256, 0');
        expect(() => rgbToLch(0, 0, -1)).toThrow('Invalid RGB color value 0, 0, -1');
        expect(() => rgbToLch(0, 0, 256)).toThrow('Invalid RGB color value 0, 0, 256');
    });
});
