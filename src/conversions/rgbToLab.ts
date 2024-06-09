import { rgbToXyz } from './rgbToXyz';
import { xyzToLab } from './xyzToLab';

/**
 * Converts RGB color values to LAB color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The LAB color string in the format "lab(l, a, b)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to LAB color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{l: number, a: number, b: number}} - The LAB color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to LAB color values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {l: number, a: number, b: number}} - The LAB color string in the format "lab(l, a, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToLab(r: number, g: number, b: number, asString?: true): string;
export function rgbToLab(r: number, g: number, b: number, asString?: false): { l: number; a: number; b: number };
export function rgbToLab(
    r: number,
    g: number,
    b: number,
    asString: boolean = true,
): string | { l: number; a: number; b: number } {
    const { x, y, z } = rgbToXyz(r, g, b, false);
    const { l, a, b: bVal } = xyzToLab(x, y, z, false);

    if (asString) {
        return `lab(${l} ${a} ${bVal})`;
    }
    return { l, a, b: bVal };
}
