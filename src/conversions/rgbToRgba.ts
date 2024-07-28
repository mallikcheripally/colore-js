/**
 * Converts RGB color values to an RGBA color string.
 *
 * This function takes red, green, and blue color values (0-255) and an alpha value (0-1) and converts them
 * to the equivalent RGBA (Red, Green, Blue, Alpha) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number; g: number; b: number; a: number;}} - The RGBA color string in the format "rgba(r, g, b, a)" or in object format.
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to an RGBA color string.
 *
 * This function takes red, green, and blue color values (0-255) and an alpha value (0-1) and converts them
 * to the equivalent RGBA (Red, Green, Blue, Alpha) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | {r: number; g: number; b: number; a: number;}} - The RGBA color string in the format "rgba(r, g, b, a)" or in object format.
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to an RGBA color string.
 *
 * This function takes red, green, and blue color values (0-255) and an alpha value (0-1) and converts them
 * to the equivalent RGBA (Red, Green, Blue, Alpha) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number; g: number; b: number; a: number;}} - The RGBA color string in the format "rgba(r, g, b, a)" or in object format.
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToRgba(r: number, g: number, b: number, a: number, asString?: true): string;
export function rgbToRgba(r: number, g: number, b: number, a: number, asString?: false): { r: number; g: number; b: number; a: number };
export function rgbToRgba(r: number, g: number, b: number, a: number, asString: boolean = true): string | { r: number; g: number; b: number; a: number } {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0 || a > 1) {
        throw new Error(`Invalid RGB color value ${r}, ${g}, ${b} or alpha ${a}`);
    }

    if (asString) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    return { r, g, b, a };
}
