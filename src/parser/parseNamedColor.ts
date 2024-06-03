import { namedColorToRgbMap } from '@/utils/namedColors';

/**
 * Parses a named color and returns its RGB representation.
 *
 * @param {string} color - The named color string.
 * @returns {{r: number; g: number; b: number;}} - An object containing RGB values
 * @throws {Error} Throws an error if the color is not a valid named color.
 */
export function parseNamedColor(color: string): { r: number; g: number; b: number } {
    const colorKey = color.toLowerCase();
    if (!namedColorToRgbMap[colorKey]) {
        throw new Error('Invalid named color format');
    }
    return {
        r: namedColorToRgbMap[colorKey][0],
        g: namedColorToRgbMap[colorKey][1],
        b: namedColorToRgbMap[colorKey][2],
    }
}
