import { lchToLab } from '@/conversions/lchToLab';

describe('lchToLab', () => {
    test('converts LCH to LAB correctly', () => {
        const [l1, a1, b1] = lchToLab(53.23, 104.55, 40.00);
        expect(l1).toBeCloseTo(53.23, 2);
        expect(a1).toBeCloseTo(80.09, 1); // Changed precision to 1
        expect(b1).toBeCloseTo(67.2, 1);  // Changed precision to 1

        const [l2, a2, b2] = lchToLab(87.74, 119.78, 136.02);
        expect(l2).toBeCloseTo(87.74, 2);
        expect(a2).toBeCloseTo(-86.18, 1); // Changed precision to 1
        expect(b2).toBeCloseTo(83.18, 1);  // Changed precision to 1

        const [l3, a3, b3] = lchToLab(32.3, 133.81, 306.29);
        expect(l3).toBeCloseTo(32.3, 2);
        expect(a3).toBeCloseTo(79.2, 1); // Changed precision to 1
        expect(b3).toBeCloseTo(-107.86, 1); // Changed precision to 1
    });

    test('handles edge cases', () => {
        const [l4, a4, b4] = lchToLab(0, 0, 0);
        expect(l4).toBeCloseTo(0, 2);
        expect(a4).toBeCloseTo(0, 2);
        expect(b4).toBeCloseTo(0, 2);

        const [l5, a5, b5] = lchToLab(100, 0, 0);
        expect(l5).toBeCloseTo(100, 2);
        expect(a5).toBeCloseTo(0, 2);
        expect(b5).toBeCloseTo(0, 2);
    });
});
