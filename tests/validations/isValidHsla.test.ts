import { isValidHsla } from '@/validations/isValidHsla';

describe('isValidHsla', () => {
    test('validates HSLA colors correctly', () => {
        expect(isValidHsla('hsla(120, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(240, 50%, 50%, 1)')).toBe(true);
        expect(isValidHsla('hsla(360, 100%, 100%, 0)')).toBe(true);
        expect(isValidHsla('hsla(0, 0%, 0%, 0.25)')).toBe(true);
    });

    test('validates HSLA colors with different units for hue correctly', () => {
        expect(isValidHsla('hsla(180deg, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(3.14rad, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(200grad, 100%, 50%, 0.5)')).toBe(true);
        expect(isValidHsla('hsla(0.5turn, 100%, 50%, 0.5)')).toBe(true);
    });

    test('validates HSLA colors with different alpha values correctly', () => {
        expect(isValidHsla('hsla(120, 100%, 50%, 0.75)')).toBe(true);
        expect(isValidHsla('hsla(240, 50%, 50%, 50%)')).toBe(true);
        expect(isValidHsla('hsla(360, 100%, 100%, none)')).toBe(true);
        expect(isValidHsla('hsla(0, 0%, 0%, 0%)')).toBe(true);
    });

    test('invalidates incorrect HSLA colors', () => {
        expect(isValidHsla('hsla(120, 100, 50, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, 100%, 50)')).toBe(false);
        expect(isValidHsla('hsla(120, 100, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120deg, 100%, 50, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, 100%, 50%, 1.5)')).toBe(false);
        expect(isValidHsla('hsla(-10, 100%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(370, 100%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, -10%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, 110%, 50%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, 100%, -10%, 0.5)')).toBe(false);
        expect(isValidHsla('hsla(120, 100%, 110%, 0.5)')).toBe(false);
    });
});
