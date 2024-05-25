import { xyzToLab } from '@/conversions/xyzToLab';

describe('xyzToLab', () => {
    test('converts XYZ values to LAB color values correctly', () => {
        let [l, a, b] = xyzToLab(41.24, 21.26, 1.93);
        expect(l).toBeCloseTo(53.23, 0.25);
        expect(a).toBeCloseTo(80.11, 0.25);
        expect(b).toBeCloseTo(67.22, 0.25);

        [l, a, b] = xyzToLab(35.76, 71.52, 11.92);
        expect(l).toBeCloseTo(87.74, 0.25);
        expect(a).toBeCloseTo(-86.18, 0.25);
        expect(b).toBeCloseTo(83.18, 0.25);

        [l, a, b] = xyzToLab(18.05, 7.22, 95.05);
        expect(l).toBeCloseTo(32.30, 0.25);
        expect(a).toBeCloseTo(79.19, 0.25);
        expect(b).toBeCloseTo(-107.86, 0.25);

        [l, a, b] = xyzToLab(77.00, 92.78, 13.85);
        expect(l).toBeCloseTo(97.14, 0.25);
        expect(a).toBeCloseTo(-21.55, 0.25);
        expect(b).toBeCloseTo(94.48, 0.25);

        [l, a, b] = xyzToLab(53.81, 78.74, 106.97);
        expect(l).toBeCloseTo(91.11, 0.25);
        expect(a).toBeCloseTo(-48.08, 0.25);
        expect(b).toBeCloseTo(-14.14, 0.25);

        [l, a, b] = xyzToLab(59.29, 28.48, 96.98);
        expect(l).toBeCloseTo(60.32, 0.25);
        expect(a).toBeCloseTo(98.25, 0.25);
        expect(b).toBeCloseTo(-60.84, 0.25);

        [l, a, b] = xyzToLab(0.00, 0.00, 0.00);
        expect(l).toBeCloseTo(0, 0.25);
        expect(a).toBeCloseTo(0, 0.25);
        expect(b).toBeCloseTo(0, 0.25);

        [l, a, b] = xyzToLab(95.05, 100.00, 108.88);
        expect(l).toBeCloseTo(100.00, 0.25);
        expect(a).toBeCloseTo(0.01, 0.25);
        expect(b).toBeCloseTo(0.01, 0.25);
    });

    test('handles edge cases', () => {
        let [l, a, b] = xyzToLab(20.52, 21.59, 23.32);
        expect(l).toBeCloseTo(53.59, 0.25);
        expect(a).toBeCloseTo(0.00, 0.25);
        expect(b).toBeCloseTo(0.32, 0.25);

        [l, a, b] = xyzToLab(48.05, 42.37, 7.97);
        expect(l).toBeCloseTo(71.12, 0.25);
        expect(a).toBeCloseTo(22.77, 0.25);
        expect(b).toBeCloseTo(66.55, 0.25);
    });
});
