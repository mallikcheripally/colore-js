import { isValidLab } from '@/validations/isValidLab';

describe('isValidLab', () => {
    test('valid LAB colors', () => {
        expect(isValidLab('lab(29.2345% 39.3825 20.0664)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / .5)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / 0.5)')).toBe(true);
        expect(isValidLab('lab(52.2345% 40.1645 59.9971 / 50%)')).toBe(true);
        expect(isValidLab('lab(100% 0 0 / none)')).toBe(true);
        expect(isValidLab('lab(0% 0 0 / 0%)')).toBe(true);
        expect(isValidLab('lab(100 0 0)')).toBe(true);
        expect(isValidLab('lab(50 125 -125)')).toBe(true);
        expect(isValidLab('lab(50 -125 125)')).toBe(true); // a and b values within practical limit
        expect(isValidLab('lab(29.2345% 39.3825 20.0664)')).toBe(true);
        expect(isValidLab('lab(50% -50% 50%)')).toBe(true);
        expect(isValidLab('lab(100 0 0 / 1)')).toBe(true);
        expect(isValidLab('lab(50 0 0 / 50%)')).toBe(true);
        expect(isValidLab('lab(none none none / none)')).toBe(true);
        expect(isValidLab('lab(50 none none)')).toBe(true); // 'none' allowed in L
        expect(isValidLab('lab(none 0 0 / 0.5)')).toBe(true); // 'none' allowed in L
    });

    test('invalid LAB colors', () => {
        expect(isValidLab('lab(101 0 0)')).toBe(false);
        expect(isValidLab('lab(50 150 0)')).toBe(false);
        expect(isValidLab('lab(50 0 150)'  )).toBe(false);
        expect(isValidLab('lab(50 0 0 / 1.5)')).toBe(false);
        expect(isValidLab('lab(-10 0 0)')).toBe(false);
        expect(isValidLab('lab(50 -130 0)')).toBe(false);
        expect(isValidLab('lab(50 0 130)')).toBe(false);
    });
});
