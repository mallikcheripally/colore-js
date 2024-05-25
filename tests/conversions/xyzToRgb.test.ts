import { xyzToRgb } from '@/conversions/xyzToRgb';

const EPSILON = 1; // Allowable difference due to floating-point arithmetic

function arraysAreClose(received: [number, number, number], expected: [number, number, number], precision: number = EPSILON) {
    return Math.abs(received[0] - expected[0]) <= precision &&
        Math.abs(received[1] - expected[1]) <= precision &&
        Math.abs(received[2] - expected[2]) <= precision;
}

describe('xyzToRgb', () => {
    test('converts XYZ values to RGB color values correctly', () => {
        expect(arraysAreClose(xyzToRgb(41.24, 21.26, 1.93), [255, 0, 0])).toBe(true);
        expect(arraysAreClose(xyzToRgb(35.76, 71.52, 11.92), [0, 255, 0])).toBe(true);
        expect(arraysAreClose(xyzToRgb(18.05, 7.22, 95.05), [0, 0, 255])).toBe(true);
        expect(arraysAreClose(xyzToRgb(77.00, 92.78, 13.85), [255, 255, 0])).toBe(true);
        expect(arraysAreClose(xyzToRgb(53.81, 78.74, 106.97), [0, 255, 255])).toBe(true);
        expect(arraysAreClose(xyzToRgb(59.29, 28.48, 96.98), [255, 0, 255])).toBe(true);
        expect(arraysAreClose(xyzToRgb(0.00, 0.00, 0.00), [0, 0, 0])).toBe(true);
        expect(arraysAreClose(xyzToRgb(95.05, 100.00, 108.88), [255, 255, 255])).toBe(true);
    });

    test('handles edge cases', () => {
        expect(arraysAreClose(xyzToRgb(20.52, 21.59, 23.32), [128, 128, 128])).toBe(true);
    });
});
