import { parseLab } from "@/parser/parseLab";

describe('parseLab', () => {
    test('parses LAB color with percentage and number values correctly', () => {
        expect(parseLab('lab(52.2345% 40.1645 59.9971 / 0.5)')).toEqual({
            l: 52.2345,
            lUnit: '%',
            a: 40.1645,
            aUnit: undefined,
            b: 59.9971,
            bUnit: undefined,
            alpha: 0.5,
            alphaUnit: undefined
        });
        expect(parseLab('lab(50 125 -125)')).toEqual({
            l: 50,
            lUnit: undefined,
            a: 125,
            aUnit: undefined,
            b: -125,
            bUnit: undefined,
            alpha: undefined,
            alphaUnit: undefined
        });
        expect(parseLab('lab(52.2345% 40.1645 59.9971 / 50%)')).toEqual({
            l: 52.2345,
            lUnit: '%',
            a: 40.1645,
            aUnit: undefined,
            b: 59.9971,
            bUnit: undefined,
            alpha: 50,
            alphaUnit: '%'
        });
    });

    test('parses LAB color with none values correctly', () => {
        expect(parseLab('lab(none none none / none)')).toEqual({
            l: 0,
            lUnit: undefined,
            a: 0,
            aUnit: undefined,
            b: 0,
            bUnit: undefined,
            alpha: 1,
            alphaUnit: undefined
        });
        expect(parseLab('lab(50 none none)')).toEqual({
            l: 50,
            lUnit: undefined,
            a: 0,
            aUnit: undefined,
            b: 0,
            bUnit: undefined,
            alpha: undefined,
            alphaUnit: undefined
        });
    });

    test('throws error for invalid LAB color format', () => {
        expect(() => parseLab('lab(101 0 0)')).toThrow('Invalid LAB color format');
        expect(() => parseLab('lab(50 150 0)')).toThrow('Invalid LAB color format');
        expect(() => parseLab('lab(50 0 150)')).toThrow('Invalid LAB color format');
        expect(() => parseLab('lab(50 0 0 / 1.5)')).toThrow('Invalid LAB color format');
    });
});

