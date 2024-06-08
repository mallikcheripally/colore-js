import { rgbToLab } from '@/conversions/rgbToLab';

describe('rgbToLab', () => {
    test('converts RGB to LAB correctly', () => {
        expect(rgbToLab(255, 0, 0, true)).toBe('lab(53.24079, 80.09246, 67.2032)');
        expect(rgbToLab(0, 255, 0, true)).toBe('lab(87.73472, -86.18272, 83.17932)');
        expect(rgbToLab(0, 0, 255, true)).toBe('lab(32.29701, 79.18752, -107.86016)');
    });

    test('converts RGB to LAB and returns an object', () => {
        expect(rgbToLab(255, 0, 0, false)).toEqual({ l: 53.24079, a: 80.09246, b: 67.2032 });
        expect(rgbToLab(0, 255, 0, false)).toEqual({ l: 87.73472, a: -86.18272, b: 83.17932 });
        expect(rgbToLab(0, 0, 255, false)).toEqual({ l: 32.29701, a: 79.18752, b: -107.86016 });
    });
})
