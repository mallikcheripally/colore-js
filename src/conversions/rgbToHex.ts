/**
 * Converts RGB color values to a HEX color string.
 *
 * This function takes red, green, and blue color values (0-255) and converts them
 * to the equivalent hexadecimal color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @returns {string} The hexadecimal color string in the format "#RRGGBB".
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToHex(r: number, g: number, b: number): string {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`Invalid RGB color value ${r}, ${g}, ${b}`);
    }

    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
