import { isValidHexAlpha } from '@/validations/isValidHexAlpha';

describe('isValidHexAlpha', () => {
    test('validates standard hex colors with alpha', () => {
        expect(isValidHexAlpha('#ffffffff')).toBe(true);
        expect(isValidHexAlpha('#00000000')).toBe(true);
        expect(isValidHexAlpha('#12345678')).toBe(true);
        expect(isValidHexAlpha('#ABCDEF12')).toBe(true);
    });

    test('validates shorthand hex colors with alpha', () => {
        expect(isValidHexAlpha('#ffff')).toBe(true);
        expect(isValidHexAlpha('#0000')).toBe(true);
        expect(isValidHexAlpha('#1234')).toBe(true);
        expect(isValidHexAlpha('#ABCD')).toBe(true);
    });

    test('invalidates incorrect hex colors with alpha', () => {
        expect(isValidHexAlpha('ffffffff')).toBe(false);
        expect(isValidHexAlpha('#ffffff')).toBe(false);
        expect(isValidHexAlpha('#12345G78')).toBe(false);
        expect(isValidHexAlpha('#12')).toBe(false);
        expect(isValidHexAlpha('#XYZ1')).toBe(false);
    });
});
