import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';

/**
 * Converts HSLA color values to Hex Alpha color values.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @returns {string} - The Hex Alpha color string in the format "#RRGGBBAA".
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hslaToHexAlpha(h: number, s: number, l: number, a: number): string {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) {
        throw new Error(`Invalid HSLA color value ${h}, ${s}, ${l}, ${a}`);
    }

    if (h === 360) {
        h = h % 360;
    }

    const { r, g, b } = hslToRgb(h, s, l, false);
    const hex = rgbToHex(r, g, b);

    const alphaHex = Math.round(a * 255).toString(16).padStart(2, '0');

    return `${hex}${alphaHex}`;
}
