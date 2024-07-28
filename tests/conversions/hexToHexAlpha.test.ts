import { hexToHexAlpha } from '@/conversions/hexToHexAlpha';

describe('hexToHexAlpha', () => {
    test('converts a HEX color string to a HEX color string with alpha 0.5', () => {
        expect(hexToHexAlpha('#ff0000', 0.5)).toBe('#ff000080');
    });

    test('throws an error for an invalid alpha value greater than 1', () => {
        expect(() => hexToHexAlpha('#0000ff', 1.5)).toThrow('Invalid alpha value 1.5');
    });

    test('throws an error for an invalid alpha value less than 0', () => {
        expect(() => hexToHexAlpha('#0000ff', -0.1)).toThrow('Invalid alpha value -0.1');
    });

    test('throws an error for an invalid HEX color string', () => {
        expect(() => hexToHexAlpha('#00ff0g', 0.5)).toThrow('Invalid HEX color #00ff0g');
    });

    test('converts a shorthand HEX color string to a HEX color string with alpha', () => {
        expect(hexToHexAlpha('#f00', 0.5)).toBe('#ff000080');
    });

    test('converts a HEX color string with max RGB values to a HEX color string with alpha', () => {
        expect(hexToHexAlpha('#ffffff', 0.8)).toBe('#ffffffcc');
    });

    test('converts a HEX color string with min RGB values to a HEX color string with alpha', () => {
        expect(hexToHexAlpha('#000000', 0.3)).toBe('#0000004d');
    });

    test('handles alpha value of 0', () => {
        expect(hexToHexAlpha('#00ff00', 0)).toBe('#00ff0000');
    });

    test('handles alpha value of 1', () => {
        expect(hexToHexAlpha('#00ff00', 1)).toBe('#00ff00ff');
    });
});
