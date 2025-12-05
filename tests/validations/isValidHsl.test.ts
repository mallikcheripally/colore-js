import { isValidHsl } from '@/validations/isValidHsl';

describe('isValidHsl', () => {
    test('validates HSL colors correctly', () => {
        expect(isValidHsl('hsl(120, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(240, 50%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(360, 100%, 100%)')).toBe(true);
        expect(isValidHsl('hsl(0, 0%, 0%)')).toBe(true);
    });

    test('validates HSL colors with different units for hue correctly', () => {
        expect(isValidHsl('hsl(180deg, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(3.14rad, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(200grad, 100%, 50%)')).toBe(true);
        expect(isValidHsl('hsl(0.5turn, 100%, 50%)')).toBe(true);
    });

    test('invalidates incorrect HSL colors', () => {
        expect(isValidHsl('hsl(120, 100, 150)')).toBe(false);
        expect(isValidHsl('hsl(120, 101%, 50)')).toBe(false);
        expect(isValidHsl('hsl(120, 101, 50%)')).toBe(false);
        expect(isValidHsl('hsl(420deg, 100%, 50)')).toBe(false);
        expect(isValidHsl('hsl(120, 100%, 50%, 1)')).toBe(false);
        expect(isValidHsl('hsl(-10, 100%, 50%)')).toBe(false);
        expect(isValidHsl('hsl(370, 100%, 50%)')).toBe(false);
        expect(isValidHsl('hsl(120, -10%, 50%)')).toBe(false);
        expect(isValidHsl('hsl(120, 110%, 50%)')).toBe(false);
        expect(isValidHsl('hsl(120, 100%, -10%)')).toBe(false);
        expect(isValidHsl('hsl(120, 100%, 110%)')).toBe(false);
        expect(isValidHsl('hsl(120, 100, 50)')).toBe(false);
        expect(isValidHsl('hsl(120, 100%, 50)')).toBe(false);
        expect(isValidHsl('hsl(120, 100, 50%)')).toBe(false);
    });
});
