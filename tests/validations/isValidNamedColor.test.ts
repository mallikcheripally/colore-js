import { isValidNamedColor } from '@/validations/isValidNamedColor';

describe('isValidNamedColor', () => {
    test('validates named CSS colors', () => {
        expect(isValidNamedColor('red')).toBe(true);
        expect(isValidNamedColor('blue')).toBe(true);
        expect(isValidNamedColor('yellow')).toBe(true);
        expect(isValidNamedColor('aliceblue')).toBe(true);
        expect(isValidNamedColor('darkseagreen')).toBe(true);
    });

    test('validates named CSS colors case insensitively', () => {
        expect(isValidNamedColor('Red')).toBe(true);
        expect(isValidNamedColor('BLUE')).toBe(true);
        expect(isValidNamedColor('YeLlOw')).toBe(true);
    });

    test('invalidates non-named CSS colors', () => {
        expect(isValidNamedColor('notacolor')).toBe(false);
        expect(isValidNamedColor('bluish')).toBe(false);
        expect(isValidNamedColor('darkblueish')).toBe(false);
        expect(isValidNamedColor('reddish')).toBe(false);
    });

    test('invalidates empty strings and non-string values', () => {
        expect(isValidNamedColor('')).toBe(false);
        expect(isValidNamedColor(' ')).toBe(false);
        // @ts-ignore
        expect(isValidNamedColor(null)).toBe(false);
        // @ts-ignore
        expect(isValidNamedColor(undefined)).toBe(false);
    });
});
