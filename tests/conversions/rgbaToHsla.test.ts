import { rgbaToHsla } from '@/conversions/rgbaToHsla';

describe('rgbaToHsla', () => {
    test('converts RGBA to HSLA string correctly', () => {
        expect(rgbaToHsla(255, 0, 0, 0.5)).toBe('hsla(0, 100%, 50%, 0.5)');
        expect(rgbaToHsla(0, 255, 0, 0.25)).toBe('hsla(120, 100%, 50%, 0.25)');
        expect(rgbaToHsla(0, 0, 255, 1)).toBe('hsla(240, 100%, 50%, 1)');
        expect(rgbaToHsla(128, 128, 128, 0)).toBe('hsla(0, 0%, 50%, 0)');
    });

    test('converts RGBA to HSLA object correctly', () => {
        expect(rgbaToHsla(255, 0, 0, 0.5, false)).toEqual({ h: 0, s: 100, l: 50, a: 0.5 });
        expect(rgbaToHsla(0, 255, 0, 0.25, false)).toEqual({ h: 120, s: 100, l: 50, a: 0.25 });
        expect(rgbaToHsla(0, 0, 255, 1, false)).toEqual({ h: 240, s: 100, l: 50, a: 1 });
        expect(rgbaToHsla(128, 128, 128, 0, false)).toEqual({ h: 0, s: 0, l: 50, a: 0 });
    });

    test('invalid inputs', () => {
        expect(() => rgbaToHsla(-1, 0, 0, 0.5)).toThrow('Invalid RGBA color values -1, 0, 0, 0.5');
        expect(() => rgbaToHsla(0, 256, 0, 0.5)).toThrow('Invalid RGBA color values 0, 256, 0, 0.5');
        expect(() => rgbaToHsla(0, 0, 0, 1.1)).toThrow('Invalid RGBA color values 0, 0, 0, 1.1');
        expect(() => rgbaToHsla(0, 0, 0, -0.1)).toThrow('Invalid RGBA color values 0, 0, 0, -0.1');
    });
})

