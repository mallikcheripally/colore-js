import { hsvToRgb } from './hsvToRgb';

/**
 * Converts HSV color values to a HEX color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @returns {string} The HEX color string in the format "#RRGGBB".
 */
export function hsvToHex(h: number, s: number, v: number): string {
    const rgb = hsvToRgb(h, s, v);
    const result = rgb.match(/\d+/g)?.map(Number);

    if (!result || result.length !== 3) {
        throw new Error('Invalid RGB value.');
    }

    const [r, g, b] = result;

    const toHex = (n: number) => n.toString(16).padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
