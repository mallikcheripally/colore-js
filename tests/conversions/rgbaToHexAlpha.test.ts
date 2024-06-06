import { rgbaToHexAlpha } from '@/conversions/rgbaToHexAlpha';

describe('rgbaToHexAlpha', () => {
    test('valid inputs', () => {
        expect(rgbaToHexAlpha(255, 0, 0, 0.5)).toBe('#ff000080');
        expect(rgbaToHexAlpha(0, 255, 0, 0.25)).toBe('#00ff0040');
        expect(rgbaToHexAlpha(0, 0, 255, 1)).toBe('#0000ffff');
        expect(rgbaToHexAlpha(128, 128, 128, 0)).toBe('#80808000');
    });

    test('invalid inputs', () => {
        expect(() => rgbaToHexAlpha(-1, 0, 0, 0.5)).toThrow('Invalid RGBA color values -1, 0, 0, 0.5');
        expect(() => rgbaToHexAlpha(0, 256, 0, 0.5)).toThrow('Invalid RGBA color values 0, 256, 0, 0.5');
        expect(() => rgbaToHexAlpha(0, 0, 0, 1.1)).toThrow('Invalid RGBA color values 0, 0, 0, 1.1');
        expect(() => rgbaToHexAlpha(0, 0, 0, -0.1)).toThrow('Invalid RGBA color values 0, 0, 0, -0.1');
    });
})
