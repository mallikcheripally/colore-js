import { rgbToHsl } from './rgbToHsl';

/**
 * Converts RGBA color values to HSLA format.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSLA color string in the format "hsla(h, s%, l%, a)"
 * @throws {Error} - Throws an error if the input color values are out of range.
 */
/**
 * Converts RGBA color values to HSLA format.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string} - The HSLA color in object format
 * @throws {Error} - Throws an error if the input color values are out of range.
 */
/**
 * Converts RGBA color values to HSLA format.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSLA color string in the format "hsla(h, s%, l%, a)" or in object format
 * @throws {Error} - Throws an error if the input color values are out of range.
 */
export function rgbaToHsla(r: number, g: number, b: number, a: number, asString?: true): string;
export function rgbaToHsla(r: number, g: number, b: number, a: number, asString?: false): { h: number; s: number; l: number; a: number; };
export function rgbaToHsla(r: number, g: number, b: number, a: number, asString: boolean = true): string | { h: number; s: number; l: number; a: number; } {
    if (
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255 ||
        a < 0 || a > 1
    ) {
        throw new Error(`Invalid RGBA color values ${r}, ${g}, ${b}, ${a}`);
    }

    const { h, s, l } = rgbToHsl(r, g, b, false);

    if (asString) {
        return `hsla(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%, ${a})`;
    }

    return { h, s, l, a };
}
