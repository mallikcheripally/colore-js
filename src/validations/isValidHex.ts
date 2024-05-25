/**
 * Checks if the input string is a valid Hex color format.
 * Supports both shorthand (#RGB) and standard (#RRGGBB) hex formats.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid hex color, false otherwise.
 */
export function isValidHex(color: string): boolean {
    const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
    return hexRegex.test(color);
}
