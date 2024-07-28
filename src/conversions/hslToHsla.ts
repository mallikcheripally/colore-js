/**
 * Converts an HSL color value to an HSLA color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent HSLA (Hue, Saturation, Lightness, Alpha) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSLA color string in the format "hsla(h, s%, l%, a)".
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts an HSL color value to an HSLA color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent HSLA (Hue, Saturation, Lightness, Alpha) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{h: number; s: number; l: number; a: number}} - The HSLA color as an object.
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts an HSL color value to an HSLA color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent HSLA (Hue, Saturation, Lightness, Alpha) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; l: number; a: number}} - The HSLA color string in the format "hsla(h, s%, l%, a)" or in object format.
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hslToHsla(h: number, s: number, l: number, a: number, asString?: true): string;
export function hslToHsla(h: number, s: number, l: number, a: number, asString?: false): { h: number; s: number; l: number; a: number };
export function hslToHsla(h: number, s: number, l: number, a: number, asString: boolean = true): string | { h: number; s: number; l: number; a: number } {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) {
        throw new Error(`Invalid HSL or Alpha value ${h}, ${s}, ${l}, ${a}`);
    }

    if (asString) {
        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }

    return { h, s, l, a };
}
