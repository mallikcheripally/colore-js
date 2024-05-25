/**
 * Checks if the input string is a valid RGB color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid RGB color, false otherwise.
 */
export function isValidRgb(color: string): boolean {
    const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    const match = color.match(rgbRegex);
    return match !== null && match.slice(1).every(value => parseInt(value, 10) >= 0 && parseInt(value, 10) <= 255);
}
