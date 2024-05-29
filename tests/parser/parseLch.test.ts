import { parseLch } from "@/parser/parseLch";

describe('parseLch', () => {
    test('parses valid LCH color strings', () => {
        expect(parseLch('lch(29.2345% 44.2 27)')).toEqual([0.292345, 44.2, 27, 1]);
        expect(parseLch('lch(52.2345% 72.2 56.2)')).toEqual([0.522345, 72.2, 56.2, 1]);
        expect(parseLch('lch(52.2345% 72.2 56.2 / .5)')).toEqual([0.522345, 72.2, 56.2, 0.5]);
        expect(parseLch('lch(52.2345% 72.2 56.2 / 0.5)')).toEqual([0.522345, 72.2, 56.2, 0.5]);
        expect(parseLch('lch(52.2345% 72.2 56.2 / 50%)')).toEqual([0.522345, 72.2, 56.2, 0.5]);
        expect(parseLch('lch(100% 0 0 / none)')).toEqual([1, 0, 0, 1]);
        expect(parseLch('lch(0% 0 0 / 0%)')).toEqual([0, 0, 0, 0]);
        expect(parseLch('lch(100 0 0)')).toEqual([100, 0, 0, 1]);
        expect(parseLch('lch(50 125 -125)')).toEqual([50, 125, -125, 1]);
        expect(parseLch('lch(50 230 360deg)')).toEqual([50, 230, 360, 1]);
        expect(parseLch('lch(50 230 2rad)')).toEqual([50, 230, 114.592, 1]);
        expect(parseLch('lch(50 230 0.5turn)')).toEqual([50, 230, 180, 1]);
    });

    test('parses valid LCH color strings with percentages', () => {
        expect(parseLch('lch(50% 50% 50)')).toEqual([0.5, 0.5, 50, 1]);
    });

    test('parses valid LCH color strings with none values', () => {
        expect(parseLch('lch(none 50% 50)')).toEqual([0, 0.5, 50, 1]);
        expect(parseLch('lch(50% none 50)')).toEqual([0.5, 0, 50, 1]);
        expect(parseLch('lch(50% 50% none)')).toEqual([0.5, 0.5, 0, 1]);
    });

    test('throws error for invalid LCH colors', () => {
        expect(() => parseLch('lch(101 0 0)')).toThrow('Invalid LCH color format');
        expect(() => parseLch('lch(50 0 0 / 1.5)')).toThrow('Invalid LCH color format');
    });
});


