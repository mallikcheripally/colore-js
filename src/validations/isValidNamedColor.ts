import { namedColors } from '@/utils/namedColors';

/**
 * Checks if the input string is a valid named CSS color.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid named CSS color, false otherwise.
 */
export function isValidNamedColor(color: string): boolean {
    return namedColors.includes(color?.toLowerCase());
}
