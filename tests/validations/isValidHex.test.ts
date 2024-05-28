import { isValidHex } from '@/validations/isValidHex';

describe('isValidHex', () => {
    test('validates 3-digit hex colors', () => {
        expect(isValidHex('#123')).toBe(true);
        expect(isValidHex('#abc')).toBe(true);
    });

    test('validates 6-digit hex colors', () => {
        expect(isValidHex('#123456')).toBe(true);
        expect(isValidHex('#abcdef')).toBe(true);
    });

    test('invalidates incorrect hex colors', () => {
        expect(isValidHex('#12')).toBe(false);
        expect(isValidHex('#12345')).toBe(false);
        expect(isValidHex('#1234567')).toBe(false);
        expect(isValidHex('#1234')).toBe(false);
        expect(isValidHex('#abcdefaa')).toBe(false);
        expect(isValidHex('#ggg')).toBe(false);
        expect(isValidHex('123456')).toBe(false);
    });
});
