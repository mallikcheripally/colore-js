import { hsvaToRgba } from '@/conversions/hsvaToRgba';

describe('hsvaToRgba', () => {
    test('converts HSVA to RGBA and returns string representation', () => {
        expect(hsvaToRgba(0, 100, 100, 0.5)).toBe('rgba(255, 0, 0, 0.5)');
        expect(hsvaToRgba(120, 100, 100, 0.25)).toBe('rgba(0, 255, 0, 0.25)');
        expect(hsvaToRgba(240, 100, 100, 1)).toBe('rgba(0, 0, 255, 1)');
        expect(hsvaToRgba(0, 0, 50, 0)).toBe('rgba(128, 128, 128, 0)');
    });

    test('converts HSVA to RGBA and returns object representation', () => {
        expect(hsvaToRgba(0, 100, 100, 0.5, false)).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
        expect(hsvaToRgba(120, 100, 100, 0.25, false)).toEqual({ r: 0, g: 255, b: 0, a: 0.25 });
        expect(hsvaToRgba(240, 100, 100, 1, false)).toEqual({ r: 0, g: 0, b: 255, a: 1 });
        expect(hsvaToRgba(0, 0, 50, 0, false)).toEqual({ r: 128, g: 128, b: 128, a: 0 });
    });

    test('throws error for invalid HSVA values', () => {
        expect(() => hsvaToRgba(-1, 0, 0, 0.5)).toThrow('Invalid HSVA color value -1, 0, 0, 0.5');
        expect(() => hsvaToRgba(0, 101, 0, 0.5)).toThrow('Invalid HSVA color value 0, 101, 0, 0.5');
        expect(() => hsvaToRgba(0, 0, 101, 0.5)).toThrow('Invalid HSVA color value 0, 0, 101, 0.5');
        expect(() => hsvaToRgba(0, 0, 0, 1.1)).toThrow('Invalid HSVA color value 0, 0, 0, 1.1');
    });
});
