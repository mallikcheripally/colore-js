import { parseHsl } from "@/parser/parseHsl";

describe('parseHsl', () => {
    test('parses HSL colors correctly', () => {
        expect(parseHsl('hsl(120, 100%, 50%)')).toEqual([120, 100, 50]);
        expect(parseHsl('hsl(240, 50%, 50%)')).toEqual([240, 50, 50]);
        expect(parseHsl('hsl(360, 100%, 100%)')).toEqual([360, 100, 100]);
        expect(parseHsl('hsl(0, 0%, 0%)')).toEqual([0, 0, 0]);
    });

    test('parses HSL colors with different units for hue correctly', () => {
        expect(parseHsl('hsl(180deg, 100%, 50%)')).toEqual([180, 100, 50]);
        expect(parseHsl('hsl(3.14rad, 100%, 50%)')).toEqual([180, 100, 50]);
        expect(parseHsl('hsl(200grad, 100%, 50%)')).toEqual([180, 100, 50]);
        expect(parseHsl('hsl(0.5turn, 100%, 50%)')).toEqual([180, 100, 50]);
    });

    test('throws error for invalid HSL colors', () => {
        expect(() => parseHsl('hsl(120, 100, 50)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(120, 100%, 50)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(120, 100, 50%)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(120deg, 100%, 50)')).toThrow('Invalid HSL color format');
        expect(() => parseHsl('hsl(120, 100%, 50%, 1)')).toThrow('Invalid HSL color format');
    });
});

