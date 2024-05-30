import { isValidHexAlpha } from '@/validations/isValidHexAlpha';

/**
 * Parses a HEX color string with alpha to its RGBA components.
 *
 * This function takes a HEX color string with alpha and converts it to the equivalent RGBA components.
 * It supports both 4-digit and 8-digit HEX formats.
 *
 * @param {string} color - The HEX color string with alpha to parse.
 * @returns {[number, number, number, number]} The RGBA components as an array [r, g, b, a].
 * @throws {Error} Throws an error if the HEX color format is invalid.
 */
export function parseHexAlpha(color: string): [number, number, number, number] {
    if (!isValidHexAlpha(color)) {
        throw new Error('Invalid HEX color format');
    }

    let r, g, b, a;

    const roundToPrecision = (value: number, precision: number) => {
        const factor = Math.pow(10, precision);
        return Math.round(value * factor) / factor;
    };

    if (color.length === 5) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
        a = roundToPrecision(parseInt(color[4] + color[4], 16) / 255, 4);
    } else {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
        a = roundToPrecision(parseInt(color[7] + color[8], 16) / 255, 4);
    }

    return [r, g, b, a];
}
