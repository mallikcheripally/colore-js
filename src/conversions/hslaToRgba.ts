import { hslToRgb } from './hslToRgb';

/**
 * Converts HSLA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGBA color string in the format "rgba(r, g, b, a)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSLA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{r: number, g: number, b: number, a: number}} - The RGBA color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSLA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number, g: number, b: number, a: number}} - The RGBA color string in the format "rgba(r, g, b, a)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hslaToRgba(h: number, s: number, l: number, a: number, asString?: true): string;
export function hslaToRgba(h: number, s: number, l: number, a: number, asString?: false): { r: number; g: number; b: number; a: number; };
export function hslaToRgba(h: number, s: number, l: number, a: number, asString: boolean = true): string | { r: number; g: number; b: number; a: number; } {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) {
        throw new Error(`Invalid HSLA color value ${h}, ${s}, ${l}, ${a}`);
    }

    if (h === 360) {
        h = h % 360;
    }

    const { r, g, b } = hslToRgb(h, s, l, false);

    if (asString) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    return { r, g, b, a };
}
