/**
 * Checks if the input string is a valid HSL color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSL color, false otherwise.
 */
export function isValidHsl(color: string): boolean {
    const hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
    const match = color.match(hslRegex);
    return match !== null &&
        parseInt(match[1], 10) >= 0 && parseInt(match[1], 10) <= 360 &&
        parseInt(match[2], 10) >= 0 && parseInt(match[2], 10) <= 100 &&
        parseInt(match[3], 10) >= 0 && parseInt(match[3], 10) <= 100;
}
