import { parseLab } from "@/parser/parseLab";

describe('parseLab', () => {
    test('parses valid lab colors', () => {
        expect(parseLab('lab(50 125 -125)')).toEqual([50, 125, -125]);
        expect(parseLab('lab(29.2345% 39.3825 20.0664)')).toEqual([29.2345, 39.3825, 20.0664]);
        expect(parseLab('lab(52.2345% 40.1645 59.9971)')).toEqual([52.2345, 40.1645, 59.9971]);
        expect(parseLab('lab(52.2345% 40.1645 59.9971 / .5)')).toEqual([52.2345, 40.1645, 59.9971, 0.5]);
        expect(parseLab('lab(52.2345% 40.1645 59.9971 / 0.5)')).toEqual([52.2345, 40.1645, 59.9971, 0.5]);
        expect(parseLab('lab(52.2345% 40.1645 59.9971 / 50%)')).toEqual([52.2345, 40.1645, 59.9971, 0.5]);
        expect(parseLab('lab(100% 0 0 / none)')).toEqual([100, 0, 0, 1]);
        expect(parseLab('lab(0% 0 0 / 0%)')).toEqual([0, 0, 0, 0]);
        expect(parseLab('lab(100 0 0)')).toEqual([100, 0, 0]);
        expect(parseLab('lab(50 125 -125)')).toEqual([50, 125, -125]);
        expect(parseLab('lab(50 -125 125)')).toEqual([50, -125, 125]);
        expect(parseLab('lab(50% -50% 50%)')).toEqual([50, -50, 50]);
        expect(parseLab('lab(100 0 0 / 1)')).toEqual([100, 0, 0, 1]);
        expect(parseLab('lab(50 0 0 / 50%)')).toEqual([50, 0, 0, 0.5]);
        expect(parseLab('lab(none none none / none)')).toEqual([0, 0, 0, 1]);
        expect(parseLab('lab(50 none none)')).toEqual([50, 0, 0]);
        expect(parseLab('lab(none 0 0 / 0.5)')).toEqual([0, 0, 0, 0.5]);
    });

    test('throws error for invalid lab colors', () => {
        expect(() => parseLab('lab(101, 0, -126)')).toThrow('Invalid LAB color format'); // L value out of range
        expect(() => parseLab('lab(50 0 0, 1.5)')).toThrow('Invalid LAB color format'); // Alpha value out of range
    });
});
