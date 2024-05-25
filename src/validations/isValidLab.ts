/**
 * Checks if the input string is a valid LAB color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid LAB color, false otherwise.
 */
export function isValidLab(color: string): boolean {
    const labRegex = /^lab\(\s*(\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*\)$/;
    const match = color.match(labRegex);
    return match !== null && parseFloat(match[1]) >= 0 && parseFloat(match[1]) <= 100;
}
