import {rgbaRegex} from "@/utils/regex";

/**
 * Checks if the provided RGBA color string is valid.
 *
 * This function validates an RGBA color string, ensuring it adheres to the format
 * specified in the CSS Color Module Level 4, including support for percentages and
 * the 'none' keyword.
 *
 * @param {string} color - The RGBA color string to validate.
 * @returns {boolean} True if the color string is valid, false otherwise.
 */
export function isValidRgba(color: string): boolean {
    const match = color.match(rgbaRegex);

    const parseValue = (value: string, isAlpha = false): number => {
        if (value === 'none') return isAlpha ? 1 : 0;
        if (value.includes('%')) {
            const percentValue = parseFloat(value) * (isAlpha ? 0.01 : 2.55);
            return Math.round(percentValue * 100) / 100;
        }
        return parseFloat(value);
    };

    return match !== null &&
        match.slice(1, 4).every(value => {
            const parsedValue = parseValue(value);
            return parsedValue >= 0 && parsedValue <= 255;
        }) &&
        parseValue(match[4], true) >= 0 && parseValue(match[4], true) <= 1;
}
