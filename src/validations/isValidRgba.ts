/**
 * Checks if the input string is a valid RGBA color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid RGBA color, false otherwise.
 */
export function isValidRgba(color: string): boolean {
    const rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/;
    const match = color.match(rgbaRegex);
    return match !== null &&
        match.slice(1, 4).every(value => parseInt(value, 10) >= 0 && parseInt(value, 10) <= 255) &&
        parseFloat(match[4]) >= 0 && parseFloat(match[4]) <= 1;
}
