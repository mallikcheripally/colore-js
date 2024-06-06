import { hslaToRgba } from '@/conversions/hslaToRgba';

describe('hslaToRgba', () => {
    test('converts HSLA to RGBA and returns string representation', () => {
        expect(hslaToRgba(0, 100, 50, 0.5)).toBe('rgba(255, 0, 0, 0.5)');
        expect(hslaToRgba(120, 100, 50, 0.25)).toBe('rgba(0, 255, 0, 0.25)');
        expect(hslaToRgba(240, 100, 50, 1)).toBe('rgba(0, 0, 255, 1)');
        expect(hslaToRgba(0, 0, 50, 0)).toBe('rgba(128, 128, 128, 0)');
    });

    test('converts HSLA to RGBA and returns object representation', () => {
        expect(hslaToRgba(0, 100, 50, 0.5, false)).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
        expect(hslaToRgba(120, 100, 50, 0.25, false)).toEqual({ r: 0, g: 255, b: 0, a: 0.25 });
        expect(hslaToRgba(240, 100, 50, 1, false)).toEqual({ r: 0, g: 0, b: 255, a: 1 });
        expect(hslaToRgba(0, 0, 50, 0, false)).toEqual({ r: 128, g: 128, b: 128, a: 0 });
    });

    test('throws error for invalid HSLA values', () => {
        expect(() => hslaToRgba(-1, 0, 0, 0.5)).toThrow('Invalid HSLA color value -1, 0, 0, 0.5');
        expect(() => hslaToRgba(0, 101, 0, 0.5)).toThrow('Invalid HSLA color value 0, 101, 0, 0.5');
        expect(() => hslaToRgba(0, 0, 101, 0.5)).toThrow('Invalid HSLA color value 0, 0, 101, 0.5');
        expect(() => hslaToRgba(0, 0, 0, 1.1)).toThrow('Invalid HSLA color value 0, 0, 0, 1.1');
    });
});
