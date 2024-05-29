import { parseNamedColor } from '@/parser/parseNamedColor';
import { namedColorToRgbMap } from '@/utils/namedColors';

describe('parseNamedColor', () => {
    test('parses valid named colors to RGB', () => {
        expect(parseNamedColor('red')).toEqual([255, 0, 0]);
        expect(parseNamedColor('blue')).toEqual([0, 0, 255]);
        expect(parseNamedColor('forestgreen')).toEqual([34, 139, 34]);
        expect(parseNamedColor('ReBeccAPurplE')).toEqual([102, 51, 153]);
    });

    test('throws error for invalid named colors', () => {
        expect(() => parseNamedColor('redd')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('blu')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('greenish')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('')).toThrow('Invalid named color format');
    });

    test('validates and parses all named colors', () => {
        for (const color in namedColorToRgbMap) {
            expect(parseNamedColor(color)).toEqual(namedColorToRgbMap[color]);
        }
    });
});
