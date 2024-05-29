import { parseXyz } from '@/parser/parseXyz';

describe('parseXyz', () => {
    test('parses valid XYZ color strings', () => {
        expect(parseXyz('xyz(41.24, 21.26, 1.93)')).toEqual([41.24, 21.26, 1.93]);
        expect(parseXyz('xyz(0, 0, 0)')).toEqual([0, 0, 0]);
        expect(parseXyz('xyz(95.047, 100.000, 108.883)')).toEqual([95.047, 100.000, 108.883]);
    });

    test('parses XYZ color strings with negative values', () => {
        expect(parseXyz('xyz(-41.24, -21.26, -1.93)')).toEqual([-41.24, -21.26, -1.93]);
    });

    test('throws error for invalid XYZ color formats', () => {
        expect(() => parseXyz('xyz(41.24, 21.26)')).toThrow('Invalid XYZ color format');
        expect(() => parseXyz('xyz(41.24, 21.26, 1.93, 5)')).toThrow('Invalid XYZ color format');
        expect(() => parseXyz('xyz(41.24 21.26 1.93)')).toThrow('Invalid XYZ color format');
        expect(() => parseXyz('xyz(41.24, 21.26, one)')).toThrow('Invalid XYZ color format');
        expect(() => parseXyz('xyz(41.24, 21.26, )')).toThrow('Invalid XYZ color format');
    });
});
