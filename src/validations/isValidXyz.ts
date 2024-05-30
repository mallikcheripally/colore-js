import { xyzRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid XYZ color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid XYZ color, false otherwise.
 */
export function isValidXyz(color: string): boolean {
    const match = color.match(xyzRegex);
    return match !== null;
}
