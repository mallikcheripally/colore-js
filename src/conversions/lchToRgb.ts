import { labToRgb } from '@/conversions/labToRgb';
import { lchToLab } from '@/conversions/lchToLab';

/**
 * Converts LCH color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | { l: number; a: number; b: number;}} - The LCH color string in the format "lch(l, c, h)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LCH color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | { l: number; a: number; b: number;}} - The LCH color string in the format "lch(l, c, h)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LCH color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | { l: number; a: number; b: number;}} - The LCH color string in the format "lch(l, c, h)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function lchToRgb(l: number, c: number, h: number, asString?: true): string;
export function lchToRgb(l: number, c: number, h: number, asString?: false): { r: number; g: number; b: number };
export function lchToRgb(
    l: number,
    c: number,
    h: number,
    asString: boolean = true,
): string | { r: number; g: number; b: number } {
    const { l: labL, a: labA, b: labB } = lchToLab(l, c, h, false);
    const { r, g, b } = labToRgb(labL, labA, labB, false);

    if (asString) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    return { r, g, b };
}
