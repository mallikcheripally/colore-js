import { parseNamedColor } from '@/parser/parseNamedColor';
import { namedColorToRgbMap } from '@/utils/namedColors';

describe('parseNamedColor', () => {
    test('parses valid named colors to RGB', () => {
        expect(parseNamedColor('red')).toEqual({ r: 255, g: 0, b: 0});
        expect(parseNamedColor('blue')).toEqual({ r: 0, g: 0, b: 255 });
        expect(parseNamedColor('forestgreen')).toEqual({ r: 34, g: 139, b: 34});
        expect(parseNamedColor('ReBeccAPurplE')).toEqual({ r: 102, g: 51, b: 153});
    });

    test('throws error for invalid named colors', () => {
        expect(() => parseNamedColor('redd')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('blu')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('greenish')).toThrow('Invalid named color format');
        expect(() => parseNamedColor('')).toThrow('Invalid named color format');
    });

    test('validates and parses all named colors', () => {
        for (const color in namedColorToRgbMap) {
            expect(parseNamedColor(color)).toEqual({
                r: namedColorToRgbMap[color][0],
                g: namedColorToRgbMap[color][1],
                b: namedColorToRgbMap[color][2],
            });
        }
    });
});
