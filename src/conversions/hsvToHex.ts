import { hsvToRgb } from './hsvToRgb';
import { rgbToHex } from './rgbToHex';

/**
 * Converts HSV color values to a HEX color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @returns {string} The HEX color string in the format "#RRGGBB".
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hsvToHex(h: number, s: number, v: number): string {
    if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100) {
        throw new Error(`Invalid HSV color value ${h}, ${s}, ${v}`);
    }

    if (h === 360) {
        h = h % 360;
    }

    // @ts-ignore
    const { r, g, b } = hsvToRgb(h, s, v, false);
    return rgbToHex(r, g, b);
}
