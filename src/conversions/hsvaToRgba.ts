import { hsvToRgb } from './hsvToRgb';

/**
 * Converts HSVA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number, g: number, b: number, a: number}} - The RGBA color string in the format "rgba(r, g, b, a)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSVA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | {r: number, g: number, b: number, a: number}} - The RGBA color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSVA color values to an RGBA color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {number} a - The alpha value (0-1).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number, g: number, b: number, a: number}} - The RGBA color string in the format "rgba(r, g, b, a)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hsvaToRgba(h: number, s: number, v: number, a: number, asString?: true): string;
export function hsvaToRgba(h: number, s: number, v: number, a: number, asString?: false): { r: number; g: number; b: number; a: number; };
export function hsvaToRgba(h: number, s: number, v: number, a: number, asString: boolean = true): string | { r: number; g: number; b: number; a: number; } {
    if (
        h < 0 || h > 360 ||
        s < 0 || s > 100 ||
        v < 0 || v > 100 ||
        a < 0 || a > 1
    ) {
        throw new Error(`Invalid HSVA color value ${h}, ${s}, ${v}, ${a}`);
    }

    const { r, g, b } = hsvToRgb(h, s, v, false);

    if (asString) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    return { r, g, b, a };
}
