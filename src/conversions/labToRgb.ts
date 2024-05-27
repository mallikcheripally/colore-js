import { xyzToRgb } from './xyzToRgb';
import { labToXyz } from './labToXyz';

/**
 * Converts LAB color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} a - The a* value (-128 to 127).
 * @param {number} b - The b* value (-128 to 127).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGB color string in the format "rgb(r, g, b)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} a - The a* value (-128 to 127).
 * @param {number} b - The b* value (-128 to 127).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {r: number, g: number, b: number} - The RGB color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} a - The a* value (-128 to 127).
 * @param {number} b - The b* value (-128 to 127).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {r: number, g: number, b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function labToRgb(l: number, a: number, b: number, asString?: true): string;
export function labToRgb(l: number, a: number, b: number, asString?: false): { r: number; g: number; b: number };
export function labToRgb(l: number, a: number, b: number, asString: boolean = true): string | { r: number; g: number; b: number } {
    if (l < 0 || l > 100 || a < -128 || a > 127 || b < -128 || b > 127) {
        throw new Error(`Invalid LAB color value ${l}, ${a},${b}`);
    }
    // @ts-ignore
    const { x, y, z } = labToXyz(l, a, b, false);
    const { r, g, b: bVal } = xyzToRgb(x, y, z, false);

    if (asString) {
        return `rgb(${r}, ${g}, ${bVal})`;
    }

    return { r, g, b: bVal };
}
