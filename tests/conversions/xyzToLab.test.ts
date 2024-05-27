import { xyzToLab } from '@/conversions/xyzToLab';

// Utility function to round to a specified precision
function roundTo(num: number, precision: number) {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}

describe('xyzToLab', () => {
    test('converts XYZ to LAB string correctly', () => {
        expect(xyzToLab(41.24, 21.26, 1.93)).toBe('lab(53.233, 80.109, 67.22)'); // Red
        expect(xyzToLab(35.76, 71.52, 11.92)).toBe('lab(87.737, -86.185, 83.181)'); // Green
        expect(xyzToLab(18.05, 7.22, 95.05)).toBe('lab(32.303, 79.197, -107.864)'); // Blue
        expect(xyzToLab(77.00, 92.78, 13.85)).toBe('lab(97.138, -21.556, 94.482)'); // Yellow
        expect(xyzToLab(0.00, 0.00, 0.00)).toBe('lab(0, 0, 0)'); // Black
        expect(xyzToLab(95.05, 100.00, 108.88)).toBe('lab(100, 0.005, 0.002)'); // White
        expect(xyzToLab(20.52, 21.59, 23.32)).toBe('lab(53.589, -0.003, 0.32)'); // Grey
    });

    test('converts XYZ to LAB object correctly', () => {
        let result = xyzToLab(41.24, 21.26, 1.93, false);
        expect(result.l).toBeCloseTo(53.233, 3);
        expect(result.a).toBeCloseTo(80.109, 3);
        expect(result.b).toBeCloseTo(67.220, 3);

        result = xyzToLab(35.76, 71.52, 11.92, false);
        expect(result.l).toBeCloseTo(87.737, 3);
        expect(result.a).toBeCloseTo(-86.185, 3);
        expect(result.b).toBeCloseTo(83.181, 3);

        result = xyzToLab(18.05, 7.22, 95.05, false);
        expect(result.l).toBeCloseTo(32.303, 3);
        expect(result.a).toBeCloseTo(79.197, 3);
        expect(result.b).toBeCloseTo(-107.864, 3);

        result = xyzToLab(77.00, 92.78, 13.85, false);
        expect(result.l).toBeCloseTo(97.138, 3);
        expect(result.a).toBeCloseTo(-21.556, 3);
        expect(result.b).toBeCloseTo(94.482, 3);

        result = xyzToLab(0.00, 0.00, 0.00, false);
        expect(result.l).toBeCloseTo(0.000, 3);
        expect(result.a).toBeCloseTo(0.000, 3);
        expect(result.b).toBeCloseTo(0.000, 3);

        result = xyzToLab(95.05, 100.00, 108.88, false);
        expect(result.l).toBeCloseTo(100.000, 3);
        expect(result.a).toBeCloseTo(0.005, 3);
        expect(result.b).toBeCloseTo(0.002, 3);

        result = xyzToLab(20.52, 21.59, 23.32, false);
        expect(result.l).toBeCloseTo(53.589, 3);
        expect(result.a).toBeCloseTo(-0.003, 3);
        expect(result.b).toBeCloseTo(0.32, 3);
    });

    test('handles intermediate values correctly', () => {
        let result = xyzToLab(48.05, 42.37, 7.97, false);
        expect(result.l).toBeCloseTo(71.125, 3);
        expect(result.a).toBeCloseTo(22.77, 3);
        expect(result.b).toBeCloseTo(66.554, 3);

        result = xyzToLab(25.0, 35.0, 50.0, false);
        expect(result.l).toBeCloseTo(65.749, 3);
        expect(result.a).toBeCloseTo(-32.006, 3);
        expect(result.b).toBeCloseTo(-13.354, 3);

        result = xyzToLab(20.0, 25.0, 30.0, false);
        expect(result.l).toBeCloseTo(57.075, 3);
        expect(result.a).toBeCloseTo(-17.585, 3);
        expect(result.b).toBeCloseTo(-4.15, 3);

        result = xyzToLab(30.0, 40.0, 50.0, false);
        expect(result.l).toBeCloseTo(69.47, 3);
        expect(result.a).toBeCloseTo(-27.971, 3);
        expect(result.b).toBeCloseTo(-6.939, 3);
    });

    test('throws error for invalid values', () => {
        expect(() => xyzToLab(-10, 50, 50)).toThrow('Invalid XYZ color value -10, 50, 50');
        expect(() => xyzToLab(100, -10, 50)).toThrow('Invalid XYZ color value 100, -10, 50');
        expect(() => xyzToLab(100, 50, -10)).toThrow('Invalid XYZ color value 100, 50, -10');
    });
});
