import { isValidXyz } from '@/validations/isValidXyz';

describe('isValidXyz', () => {
    test('validates XYZ color format', () => {
        expect(isValidXyz('xyz(41.24, 21.26, 1.93)')).toBe(true);
        expect(isValidXyz('xyz(35.76, 71.52, 11.92)')).toBe(true);
        expect(isValidXyz('xyz(18.05, 7.22, 95.05)')).toBe(true);
        expect(isValidXyz('xyz(77.00, 92.78, 13.85)')).toBe(true);
    });

    test('invalidates incorrect XYZ color format', () => {
        expect(isValidXyz('xyz(41.24, 21.26)')).toBe(false); // Missing Z value
        expect(isValidXyz('xyz(41.24, 21.26, 1.93%)')).toBe(false); // Percentage in Z value
        expect(isValidXyz('xyz(41.24, 21.26, 1.93, 50)')).toBe(false); // Extra value
        expect(isValidXyz('xyz(41.24, 21.26, one)')).toBe(false); // Non-numeric Z value
        expect(isValidXyz('rgb(255, 0, 0)')).toBe(false); // RGB format
    });

    test('validates XYZ color format with different spacing', () => {
        expect(isValidXyz('xyz( 41.24 , 21.26 , 1.93 )')).toBe(true); // Extra spaces
        expect(isValidXyz('xyz(41.24,21.26,1.93)')).toBe(true); // No spaces
    });
});
