import { lchToRgb } from '@/conversions/lchToRgb';

describe('lchToRgb', () => {
    test('converts LCH to RGB correctly', () => {
        expect(lchToRgb(53.23, 104.55, 40.00)).toEqual({ r: 255, g: 0, b: 0 });
        expect(lchToRgb(87.74, 119.78, 136.02)).toEqual({ r: 0, g: 255, b: 0 });
        expect(lchToRgb(32.3, 133.81, 306.29)).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('handles edge cases', () => {
        expect(lchToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
        expect(lchToRgb(100, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
    });
});
