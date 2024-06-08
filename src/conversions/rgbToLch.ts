import { rgbToXyz } from './rgbToXyz';
import { xyzToLab } from './xyzToLab';
import { labToLch } from './labToLch';

/**
 * Converts RGB color values to LCH color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The LCH color string in the format "lch(l, c, h)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to LCH color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{l: number, c: number, h: number}} - The LCH color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to LCH color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {l: number, c: number, h: number}} - The LCH color string in the format "lch(l, c, h)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToLch(r: number, g: number, b: number, asString?: true): string;
export function rgbToLch(r: number, g: number, b: number, asString?: false): { l: number; c: number; h: number };
export function rgbToLch(r: number, g: number, b: number, asString: boolean = true): string | { l: number; c: number; h: number } {
    const { x, y, z } = rgbToXyz(r, g, b, false);
    const { l, a, b: labB } = xyzToLab(x, y, z, false);
    // @ts-ignore
    const lch = labToLch(l, a, labB, asString);

    return lch;
}
