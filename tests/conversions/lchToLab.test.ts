import { lchToLab } from '@/conversions/lchToLab';

describe('lchToLab', () => {
    test('converts LCH to LAB correctly', () => {
        expect(lchToLab(53.23, 104.55, 40.00)).toBe('lab(53.23, 80.09, 67.2)');
        expect(lchToLab(87.74, 119.78, 136.02)).toBe('lab(87.74, -86.19, 83.18)');

        const lab1 = lchToLab(50, 50, 180, false);
        expect(lab1.l).toBeCloseTo(50, 2);
        expect(lab1.a).toBeCloseTo(-50, 2);
        expect(lab1.b).toBeCloseTo(0, 2);
    });

    test('handles edge cases correctly', () => {
        const zeroChroma = lchToLab(50, 0, 0, false);
        expect(zeroChroma.l).toBeCloseTo(50, 2);
        expect(zeroChroma.a).toBeCloseTo(0, 2);
        expect(zeroChroma.b).toBeCloseTo(0, 2);

        const fullHue = lchToLab(100, 100, 360, false);
        expect(fullHue.l).toBeCloseTo(100, 2);
        expect(fullHue.a).toBeCloseTo(100, 2);
        expect(fullHue.b).toBeCloseTo(0, 2);
    });

    test('throws errors for invalid values', () => {
        expect(() => lchToLab(-10, 50, 50)).toThrow('Invalid LCH color value -10, 50, 50');
        expect(() => lchToLab(110, 50, 50)).toThrow('Invalid LCH color value 110, 50, 50');
        expect(() => lchToLab(50, -50, 50)).toThrow('Invalid LCH color value 50, -50, 50');
        expect(() => lchToLab(50, 50, -10)).toThrow('Invalid LCH color value 50, 50, -10');
        expect(() => lchToLab(50, 50, 400)).toThrow('Invalid LCH color value 50, 50, 400');
    });

    test('rounds numbers correctly in string output', () => {
        const roundedResult = lchToLab(60, 25, 45, true);
        expect(roundedResult).toBe('lab(60, 17.68, 17.68)');
    });
});
