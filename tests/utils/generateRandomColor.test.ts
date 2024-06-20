import { generateRandomColor } from '@/utils/generateRandomColor';
import { ColorFormats } from '@/utils/colorFormats';
import {hexAlphaRegex, hexRegex, hslaRegex, hslRegex, labRegex, lchRegex, rgbaRegex, rgbRegex} from '@/utils/regex';

describe('generateRandomColor', () => {
    test('generates a random RGB color as a string', () => {
        const color = generateRandomColor(ColorFormats.RGB, true);
        expect(color).toMatch(rgbRegex);
    });

    test('generates a random RGB color as an object', () => {
        const color = generateRandomColor(ColorFormats.RGB, false);
        expect(color).toHaveProperty('r');
        expect(color).toHaveProperty('g');
        expect(color).toHaveProperty('b');
    });

    test('generates a random Hex color as a string', () => {
        const color = generateRandomColor(ColorFormats.HEX);
        expect(color).toMatch(hexRegex);
    });

    test('generates a random Hex Alpha color as a string', () => {
        const color = generateRandomColor(ColorFormats.HEX_ALPHA);
        expect(color).toMatch(hexAlphaRegex);
    });

    test('generates a random HSL color as a string', () => {
        const color = generateRandomColor(ColorFormats.HSL, true);
        expect(color).toMatch(hslRegex);
    });

    test('generates a random HSL color as an object', () => {
        const color = generateRandomColor(ColorFormats.HSL, false);
        expect(color).toHaveProperty('h');
        expect(color).toHaveProperty('s');
        expect(color).toHaveProperty('l');
    });

    test('generates a random RGBA color as a string', () => {
        const color = generateRandomColor(ColorFormats.RGBA, true);
        expect(color).toMatch(rgbaRegex);
    });

    test('generates a random RGBA color as an object', () => {
        const color = generateRandomColor(ColorFormats.RGBA, false);
        expect(color).toHaveProperty('r');
        expect(color).toHaveProperty('g');
        expect(color).toHaveProperty('b');
        expect(color).toHaveProperty('a');
    });

    test('generates a random HSLA color as a string', () => {
        const color = generateRandomColor(ColorFormats.HSLA, true);
        expect(color).toMatch(hslaRegex);
    });

    test('generates a random HSLA color as an object', () => {
        const color = generateRandomColor(ColorFormats.HSLA, false);
        expect(color).toHaveProperty('h');
        expect(color).toHaveProperty('s');
        expect(color).toHaveProperty('l');
        expect(color).toHaveProperty('a');
    });

    test('generates a random LAB color as a string', () => {
        const color = generateRandomColor(ColorFormats.LAB, true);
        expect(color).toMatch(labRegex);
    });

    test('generates a random LAB color as an object', () => {
        const color = generateRandomColor(ColorFormats.LAB, false);
        expect(color).toHaveProperty('l');
        expect(color).toHaveProperty('a');
        expect(color).toHaveProperty('b');
    });

    test('generates a random LCH color as a string', () => {
        const color = generateRandomColor(ColorFormats.LCH, true);
        expect(color).toMatch(lchRegex);
    });

    test('generates a random LCH color as an object', () => {
        const color = generateRandomColor(ColorFormats.LCH, false);
        expect(color).toHaveProperty('l');
        expect(color).toHaveProperty('c');
        expect(color).toHaveProperty('h');
    });

    test('throw error if color is not supported', () => {
        expect(() => generateRandomColor('named', true)).toThrow('Unsupported color format: named');
    });
});
