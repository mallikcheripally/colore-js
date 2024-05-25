import { isValidHex } from '@/validations/isValidHex';

describe('isValidHex', () => {
    test('validates standard hex colors', () => {
        expect(isValidHex('#ffffff')).toBe(true);
        expect(isValidHex('#000000')).toBe(true);
        expect(isValidHex('#123456')).toBe(true);
        expect(isValidHex('#ABCDEF')).toBe(true);
    });

    test('validates shorthand hex colors', () => {
        expect(isValidHex('#fff')).toBe(true);
        expect(isValidHex('#000')).toBe(true);
        expect(isValidHex('#123')).toBe(true);
        expect(isValidHex('#ABC')).toBe(true);
    });

    test('invalidates incorrect hex colors', () => {
        expect(isValidHex('ffffff')).toBe(false);
        expect(isValidHex('#ffff')).toBe(false);
        expect(isValidHex('#12345G')).toBe(false);
        expect(isValidHex('#12')).toBe(false);
        expect(isValidHex('#XYZ')).toBe(false);
    });
});
