import { isValidLab } from '@/validations/isValidLab';

describe('isValidLab', () => {
    test('validates LAB color format', () => {
        expect(isValidLab('lab(53.23, 80.09, 67.2)')).toBe(true);
        expect(isValidLab('lab(87.74, -86.18, 83.18)')).toBe(true);
        expect(isValidLab('lab(32.3, 79.2, -107.86)')).toBe(true);
        expect(isValidLab('lab(97.14, -21.55, 94.48)')).toBe(true);
    });

    test('invalidates incorrect LAB color format', () => {
        expect(isValidLab('lab(101, 80.09, 67.2)')).toBe(false); // Lightness > 100
        expect(isValidLab('lab(-1, 80.09, 67.2)')).toBe(false); // Lightness < 0
        expect(isValidLab('lab(53.23, 80.09)')).toBe(false); // Missing B value
        expect(isValidLab('lab(53.23, 80.09, 67.2%)')).toBe(false); // Percentage in B value
        expect(isValidLab('lab(53.23, 80.09, sixty)')).toBe(false); // Non-numeric B value
        expect(isValidLab('rgb(255, 0, 0)')).toBe(false); // RGB format
    });

    test('validates LAB color format with different spacing', () => {
        expect(isValidLab('lab( 53.23 , 80.09 , 67.2 )')).toBe(true); // Extra spaces
        expect(isValidLab('lab(53.23,80.09,67.2)')).toBe(true); // No spaces
    });
});
