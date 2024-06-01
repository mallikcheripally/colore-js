import { isValidHsla } from '@/validations/isValidHsla';

describe('isValidHsla', () => {
    test('valid HSLA colors', () => {
        expect(isValidHsla('hsla(180deg, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(3.14rad, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(200grad, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(0.5turn, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(180, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(180, 100%, 50%, 50%)')).toBe(true);
        expect(isValidHsla('hsla(180deg, 100%, 50%, 100%)')).toBe(true);
        expect(isValidHsla('hsla(180deg, 100%, 50%, 0%)')).toBe(true);
    });

    test('invalid HSLA colors', () => {
        expect(isValidHsla('hsla(370deg, 100%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(180, 110%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(180, 100%, 150%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(180, 100%, 50%, 1.5)')).toBe(false);
        expect(isValidHsla('hsla(180, 100%, 50%, -0.5)')).toBe(false);
    });

    test('valid HSLA colors with mixed case units', () => {
        expect(isValidHsla('hsla(180DeG, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(3.14Rad, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(200GraD, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(0.5TuRn, 100%, 50%, 0.5)')).toBe(true);
    });

    test('valid HSLA colors with integer alpha', () => {
        expect(isValidHsla('hsla(180, 100%, 50%, 1)')).toBe(true);
        expect(isValidHsla('hsla(180, 100%, 50%, 0)')).toBe(true);
    });

    test('valid HSLA colors with alpha as percentage', () => {
        expect(isValidHsla('hsla(180, 100%, 50%, 50%)')).toBe(true);
        expect(isValidHsla('hsla(180, 100%, 50%, 100%)')).toBe(true);
        expect(isValidHsla('hsla(180, 100%, 50%, 0%)')).toBe(true);
    });
});
