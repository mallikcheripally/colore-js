/**
 * Parses an RGBA color string into its individual components.
 *
 * This function takes an RGBA color string and returns an array of its components
 * (red, green, blue, and alpha). The values can be represented as either numbers
 * or percentages.
 *
 * @param {string} color - The RGBA color string to parse.
 * @returns {[number, number, number, number]} An array containing the red, green, blue, and alpha values.
 * @throws {Error} Throws an error if the color string is not a valid RGBA format.
 */
export function parseRgba(color: string): [number, number, number, number] {
    const rgbaRegex = /^rgba\(\s*(\d{1,3}%?|none)\s*,\s*(\d{1,3}%?|none)\s*,\s*(\d{1,3}%?|none)\s*,\s*(0|1|0?\.\d+|none|0?%|100%)\s*\)$/i;
    const match = color.match(rgbaRegex);
    if (!match) throw new Error('Invalid RGBA color format');

    const parseValue = (value: string, isAlpha = false): number => {
        if (value === 'none') return isAlpha ? 1 : 0;
        if (value.includes('%')) {
            const percentValue = parseFloat(value) * (isAlpha ? 0.01 : 2.55);
            return Math.round(percentValue * 100) / 100;
        }
        return parseFloat(value);
    };

    const r = parseValue(match[1]);
    const g = parseValue(match[2]);
    const b = parseValue(match[3]);
    const a = parseValue(match[4], true);

    return [r, g, b, a];
}
