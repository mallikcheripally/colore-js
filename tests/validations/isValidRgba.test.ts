import { isValidRgba } from '@/validations/isValidRgba';

describe('isValidRgba', () => {
    test('validates rgba colors correctly', () => {
        expect(isValidRgba('rgba(255, 0, 0, 1)')).toBe(true);
        expect(isValidRgba('rgba(100%, 0%, 0%, 0.5)')).toBe(true);
        expect(isValidRgba('rgba(0, 128, 255, 0.75)')).toBe(true);
        expect(isValidRgba('rgba(50%, 50%, 50%, 0.25)')).toBe(true);
        expect(isValidRgba('rgba(100%, 100%, 100%, none)')).toBe(true);
        expect(isValidRgba('rgba(255, 255, 255, none)')).toBe(true);
        expect(isValidRgba('rgba(none, none, none, none)')).toBe(true);
    });

    test('invalidates incorrect rgba colors', () => {
        expect(isValidRgba('rgba(256, 0, 0, 1)')).toBe(false);
        expect(isValidRgba('rgba(255, -1, 0, 1)')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 300, 1)')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0, 1.5)')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0, 101%)')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0, -0.5)')).toBe(false);
    });

    test('invalidates malformed rgba colors', () => {
        expect(isValidRgba('rgba(255, 0, 0, 1, 0)')).toBe(false);
        expect(isValidRgba('rgba(255,0,0,1')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0, 1 /)')).toBe(false);
        expect(isValidRgba('rgba255, 0, 0, 1')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0 0)')).toBe(false);
        expect(isValidRgba('rgba(255, 0, 0)')).toBe(false);
    });
});
