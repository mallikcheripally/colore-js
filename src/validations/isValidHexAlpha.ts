import { hexAlphaRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid Hex color format with alpha.
 * Supports both shorthand (#RGBA) and standard (#RRGGBBAA) hex formats.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid hex color with alpha, false otherwise.
 */
export function isValidHexAlpha(color: string): boolean {
    return hexAlphaRegex.test(color);
}
