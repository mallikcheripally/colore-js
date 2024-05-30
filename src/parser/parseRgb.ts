import { isValidRgb } from '@/validations/isValidRgb';
import { rgbRegex } from '@/utils/regex';

/**
 * Parses an RGB color string and returns an array of color components.
 *
 * This function takes a valid RGB color string and decomposes it into
 * an array of its individual red, green, and blue components.
 *
 * @param {string} color - The RGB color string to parse.
 * @returns {[number, number, number]} An array containing the red, green, and blue components.
 * @throws {Error} Throws an error if the color format is invalid.
 */
export function parseRgb(color: string): [number, number, number] {
    const match = color.match(rgbRegex);
    if (!match || !isValidRgb(color)) throw new Error('Invalid RGB color format');

    const parseComponent = (value: string) => {
        if (value.includes('%')) {
            return Math.round(parseFloat(value) * 2.55);
        }
        return parseInt(value, 10);
    };

    const r = parseComponent(match[1]);
    const g = parseComponent(match[2]);
    const b = parseComponent(match[3]);

    return [r, g, b];
}
