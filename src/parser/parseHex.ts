import { isValidHex } from '@/validations/isValidHex';

/**
 * Parses a HEX color string to its RGB components.
 *
 * This function takes a HEX color string and converts it to the equivalent RGB components.
 * It supports both 3-digit and 6-digit HEX formats.
 *
 * @param {string} color - The HEX color string to parse.
 * @returns {{ r: number; g: number; b: number; }} An object containing RGB values
 * @throws {Error} Throws an error if the HEX color format is invalid.
 */
export function parseHex(color: string): { r: number; g: number; b: number; } {
    if (!isValidHex(color)) {
        throw new Error('Invalid HEX color format');
    }

    let r, g, b;

    if (color.length === 4) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
    } else {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
    }

    return { r, g, b };
}
