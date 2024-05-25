/**
 * Checks if the input string is a valid HSLA color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSLA color, false otherwise.
 */
export function isValidHsla(color: string): boolean {
    const hslaRegex = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0|1|0?\.\d+)\s*\)$/;
    const match = color.match(hslaRegex);
    return match !== null &&
        parseInt(match[1], 10) >= 0 && parseInt(match[1], 10) <= 360 &&
        parseInt(match[2], 10) >= 0 && parseInt(match[2], 10) <= 100 &&
        parseInt(match[3], 10) >= 0 && parseInt(match[3], 10) <= 100 &&
        parseFloat(match[4]) >= 0 && parseFloat(match[4]) <= 1;
}
