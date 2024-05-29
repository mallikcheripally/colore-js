import { namedColorToRgbMap } from '@/utils/namedColors';

/**
 * Parses a named color and returns its RGB representation.
 *
 * @param {string} color - The named color string.
 * @returns {[number, number, number]} - The RGB representation of the color.
 * @throws {Error} Throws an error if the color is not a valid named color.
 */
export function parseNamedColor(color: string): [number, number, number] {
    const colorKey = color.toLowerCase();
    if (!namedColorToRgbMap[colorKey]) {
        throw new Error('Invalid named color format');
    }
    return namedColorToRgbMap[colorKey];
}
