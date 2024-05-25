/**
 * Checks if the input string is a valid LCH color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid LCH color, false otherwise.
 */
export function isValidLch(color: string): boolean {
    const lchRegex = /^lch\(\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*\)$/;
    const match = color.match(lchRegex);
    return match !== null && parseFloat(match[1]) >= 0 && parseFloat(match[2]) >= 0;
}
