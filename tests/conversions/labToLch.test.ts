import { labToLch } from '@/conversions/labToLch';

describe('labToLch', () => {
    test('converts LAB to LCH correctly (string format)', () => {
        const result = labToLch(50, 20, 30);
        expect(result).toBe('lch(50 36.05551 56.30993)');
    });

    test('converts LAB to LCH correctly (object format)', () => {
        const result = labToLch(50, 20, 30, false);
        expect(result).toEqual({ l: 50, c: 36.05551, h: 56.30993 });
    });

    test('handles edge cases for LAB values (string format)', () => {
        const result = labToLch(0, 0, 0);
        expect(result).toBe('lch(0 0 0)');

        const result2 = labToLch(100, 0, 0);
        expect(result2).toBe('lch(100 0 0)');

        const result3 = labToLch(50, -128, 127);
        expect(result3).toBe('lch(50 180.31362 135.22469)');
    });

    test('handles edge cases for LAB values (object format)', () => {
        const result = labToLch(0, 0, 0, false);
        expect(result).toEqual({ l: 0, c: 0, h: 0 });

        const result2 = labToLch(100, 0, 0, false);
        expect(result2).toEqual({ l: 100, c: 0, h: 0 });

        const result3 = labToLch(50, -128, 127, false);
        expect(result3).toEqual({ l: 50, c: 180.31362, h: 135.22469 });
    });

    test('throws error for invalid LAB values', () => {
        expect(() => labToLch(-10, 20, 30)).toThrow('Invalid LAB color values -10, 20, 30');
        expect(() => labToLch(110, 20, 30)).toThrow('Invalid LAB color values 110, 20, 30');
        expect(() => labToLch(50, -130, 30)).toThrow('Invalid LAB color values 50, -130, 30');
        expect(() => labToLch(50, 130, 30)).toThrow('Invalid LAB color values 50, 130, 30');
        expect(() => labToLch(50, 20, -130)).toThrow('Invalid LAB color values 50, 20, -130');
        expect(() => labToLch(50, 20, 130)).toThrow('Invalid LAB color values 50, 20, 130');
    });
});
