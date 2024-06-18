import { hslaToHexAlpha } from '@/conversions/hslaToHexAlpha';

describe('hslaToHexAlpha', () => {
    test('converts HSLA to Hex Alpha correctly', () => {
        expect(hslaToHexAlpha(0, 100, 50, 1)).toBe('#ff0000ff'); // Red
        expect(hslaToHexAlpha(360, 100, 50, 1)).toBe('#ff0000ff'); // Red
        expect(hslaToHexAlpha(120, 100, 50, 0.5)).toBe('#00ff0080'); // Green with 50% opacity
        expect(hslaToHexAlpha(240, 100, 50, 0.25)).toBe('#0000ff40'); // Blue with 25% opacity
        expect(hslaToHexAlpha(0, 0, 100, 0.75)).toBe('#ffffffbf'); // White with 75% opacity
        expect(hslaToHexAlpha(0, 0, 0, 0.1)).toBe('#0000001a'); // Black with 10% opacity
    });

    test('throws an error for invalid HSLA values', () => {
        expect(() => hslaToHexAlpha(-1, 100, 50, 1)).toThrow('Invalid HSLA color value -1, 100, 50, 1');
        expect(() => hslaToHexAlpha(0, 101, 50, 1)).toThrow('Invalid HSLA color value 0, 101, 50, 1');
        expect(() => hslaToHexAlpha(0, 100, 101, 1)).toThrow('Invalid HSLA color value 0, 100, 101, 1');
        expect(() => hslaToHexAlpha(0, 100, 50, 1.1)).toThrow('Invalid HSLA color value 0, 100, 50, 1.1');
    });
});
