import { lchToRgb } from '@/conversions/lchToRgb';

describe('lchToRgb', () => {
    test('converts LCH to RGB correctly', () => {
        const red = lchToRgb(53.23, 104.55, 40.00, false);
        expect(red).toEqual({ r: 255, g: 0, b: 0 });

        const green = lchToRgb(87.74, 119.78, 136.02, false);
        expect(green).toEqual({ r: 0, g: 255, b: 0 });

        const blue = lchToRgb(32.30, 133.81, 306.29, false);
        expect(blue).toEqual({ r: 0, g: 0, b: 255 });

        const yellow = lchToRgb(97.14, 113.79, 102.85, false);
        expect(yellow).toEqual({ r: 251, g: 255, b: 0 });
    });

    test('handles edge cases correctly', () => {
        const zeroChroma = lchToRgb(50, 0, 0, false);
        expect(zeroChroma).toEqual({ r: 119, g: 119, b: 119 }); // Neutral gray

        const fullHue = lchToRgb(100, 100, 360, false);
        expect(fullHue).toEqual({ r: 255, g: 155, b: 255 });
    });

    test('throws errors for invalid values', () => {
        expect(() => lchToRgb(-10, 50, 50)).toThrow('Invalid LCH color value -10, 50, 50');
        expect(() => lchToRgb(110, 50, 50)).toThrow('Invalid LCH color value 110, 50, 50');
        expect(() => lchToRgb(50, -50, 50)).toThrow('Invalid LCH color value 50, -50, 50');
        expect(() => lchToRgb(50, 50, -10)).toThrow('Invalid LCH color value 50, 50, -10');
        expect(() => lchToRgb(50, 50, 400)).toThrow('Invalid LCH color value 50, 50, 400');
    });

    test('rounds numbers correctly in string output', () => {
        const roundedResult = lchToRgb(60, 25, 45, true);
        expect(roundedResult).toBe('rgb(185, 132, 114)');
    });
});
