import { hslToHsla } from '@/conversions/hslToHsla';

describe('hslToHsla', () => {
    test('converts HSL to HSLA string', () => {
        expect(hslToHsla(0, 100, 50, 0.5)).toBe('hsla(0, 100%, 50%, 0.5)');
        expect(hslToHsla(120, 50, 50, 0.75)).toBe('hsla(120, 50%, 50%, 0.75)');
        expect(hslToHsla(240, 100, 25, 1)).toBe('hsla(240, 100%, 25%, 1)');
    });

    test('converts HSL to HSLA object', () => {
        expect(hslToHsla(0, 100, 50, 0.5, false)).toEqual({ h: 0, s: 100, l: 50, a: 0.5 });
        expect(hslToHsla(120, 50, 50, 0.75, false)).toEqual({ h: 120, s: 50, l: 50, a: 0.75 });
        expect(hslToHsla(240, 100, 25, 1, false)).toEqual({ h: 240, s: 100, l: 25, a: 1 });
    });

    test('throws an error for invalid HSL values', () => {
        expect(() => hslToHsla(-10, 100, 50, 0.5)).toThrow('Invalid HSL or Alpha value -10, 100, 50, 0.5');
        expect(() => hslToHsla(0, 200, 50, 0.5)).toThrow('Invalid HSL or Alpha value 0, 200, 50, 0.5');
        expect(() => hslToHsla(0, 100, 150, 0.5)).toThrow('Invalid HSL or Alpha value 0, 100, 150, 0.5');
        expect(() => hslToHsla(0, 100, 50, -0.5)).toThrow('Invalid HSL or Alpha value 0, 100, 50, -0.5');
    });

    test('throws an error for invalid Alpha values', () => {
        expect(() => hslToHsla(0, 100, 50, 1.5)).toThrow('Invalid HSL or Alpha value 0, 100, 50, 1.5');
        expect(() => hslToHsla(0, 100, 50, -0.1)).toThrow('Invalid HSL or Alpha value 0, 100, 50, -0.1');
    });
});
