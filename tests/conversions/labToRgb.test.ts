import { labToRgb } from '@/conversions/labToRgb';

describe('labToRgb', () => {
    test('converts LAB to RGB correctly', () => {
        expect(labToRgb(53.23, 80.09, 67.2)).toEqual({ r: 255, g: 0, b: 0 });
        expect(labToRgb(87.74, -86.18, 83.18)).toEqual({ r: 0, g: 255, b: 0 });
        expect(labToRgb(32.3, 79.2, -107.86)).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('handles edge cases', () => {
        expect(labToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
        expect(labToRgb(100, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
    });
});
