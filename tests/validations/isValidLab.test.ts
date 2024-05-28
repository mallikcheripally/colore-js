import { isValidLab } from '@/validations/isValidLab';

describe('isValidLab', () => {
    test('valid Lab color values', () => {
        expect(isValidLab('lab(29.2345% 39.3825 20.0664)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / .5)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / 0.5)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / 50%)')).toBe(true);
        expect(isValidLab('lab(100% 0 0 / none)')).toBe(true);
        expect(isValidLab('lab(0% 0 0 / 0%)')).toBe(true);
        expect(isValidLab('lab(100 0 0)')).toBe(true);
        expect(isValidLab('lab(50 125 -125)')).toBe(true);
    });

    test('invalid Lab color values', () => {
        expect(isValidLab('lab(29.2345 39.3825)')).toBe(false); // Missing b value
        expect(isValidLab('lab(29.2345% 39.3825%)')).toBe(false); // Missing b value
        expect(isValidLab('lab(29.2345% 39.3825 20.0664 50%)')).toBe(false); // Extra value
        expect(isValidLab('lab(110 0 0)')).toBe(false); // L value out of range
        expect(isValidLab('lab(50 130 -130)')).toBe(false); // a and b values out of range
        expect(isValidLab('lab(50% 50% 50% 50%)')).toBe(false); // Invalid format
        expect(isValidLab('lab(50 50 50 / 1.5)')).toBe(false); // Alpha value out of range
    });

    test('valid Lab color values with extended ranges', () => {
        expect(isValidLab('lab(50 -160 160)')).toBe(false); // a and b values out of practical limit
        expect(isValidLab('lab(50 160 -160)')).toBe(false); // a and b values out of practical limit
        expect(isValidLab('lab(50 -125 125)')).toBe(true); // a and b values within practical limit
    });

    test('valid Lab color values with different formats', () => {
        expect(isValidLab('lab(29.2345% 39.3825 20.0664)')).toBe(true);
        expect(isValidLab('lab(50% -50% 50%)')).toBe(true);
        expect(isValidLab('lab(100 0 0 / 1)')).toBe(true);
        expect(isValidLab('lab(50 0 0 / 50%)')).toBe(true);
    });

    test('valid Lab color values with "none" keyword', () => {
        expect(isValidLab('lab(none none none / none)')).toBe(true);
        expect(isValidLab('lab(50 none none)')).toBe(true); // 'none' not allowed in a or b values
        expect(isValidLab('lab(none 0 0 / 0.5)')).toBe(true); // 'none' not allowed in L value
    });

    test('invalid Lab color values with incorrect formats', () => {
        expect(isValidLab('lab(50 50)')).toBe(false); // Missing one value
        expect(isValidLab('lab(50 50%)')).toBe(false); // Missing one value
        expect(isValidLab('lab(50 none 50 50)')).toBe(false); // Extra value
        expect(isValidLab('lab(50 50 / 50%)')).toBe(false); // Missing b value
        expect(isValidLab('lab(50 50%)')).toBe(false); // Missing one value
    });
});
