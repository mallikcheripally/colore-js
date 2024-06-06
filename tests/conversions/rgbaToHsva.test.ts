import { rgbaToHsva } from '@/conversions/rgbaToHsva';

describe('rgbaToHsva', () => {
    test('converts RGBA to HSVA and returns string representation', () => {
        expect(rgbaToHsva(255, 0, 0, 0.5)).toBe('hsva(0, 100%, 100%, 0.5)');
        expect(rgbaToHsva(0, 255, 0, 0.25)).toBe('hsva(120, 100%, 100%, 0.25)');
        expect(rgbaToHsva(0, 0, 255, 1)).toBe('hsva(240, 100%, 100%, 1)');
        expect(rgbaToHsva(128, 128, 128, 0)).toBe('hsva(0, 0%, 50%, 0)');
    });

    test('converts RGBA to HSVA and returns object representation', () => {
        expect(rgbaToHsva(255, 0, 0, 0.5, false)).toEqual({ h: 0, s: 100, v: 100, a: 0.5 });
        expect(rgbaToHsva(0, 255, 0, 0.25, false)).toEqual({ h: 120, s: 100, v: 100, a: 0.25 });
        expect(rgbaToHsva(0, 0, 255, 1, false)).toEqual({ h: 240, s: 100, v: 100, a: 1 });
        expect(rgbaToHsva(128, 128, 128, 0, false)).toEqual({ h: 0, s: 0, v: 50, a: 0 });
    });

    test('throws error for invalid RGBA values', () => {
        expect(() => rgbaToHsva(-1, 0, 0, 0.5)).toThrow('Invalid RGBA color values -1, 0, 0, 0.5');
        expect(() => rgbaToHsva(0, 256, 0, 0.5)).toThrow('Invalid RGBA color values 0, 256, 0, 0.5');
        expect(() => rgbaToHsva(0, 0, 0, 1.1)).toThrow('Invalid RGBA color values 0, 0, 0, 1.1');
        expect(() => rgbaToHsva(0, 0, 0, -0.1)).toThrow('Invalid RGBA color values 0, 0, 0, -0.1');
    });
});
