import { rgbRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid RGB color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid RGB color, false otherwise.
 */
export function isValidRgb(color: string): boolean {
    const match = color.match(rgbRegex);
    if (!match) return false;

    const isValidComponent = (value: string) => {
        if (value.includes('%')) {
            const percent = parseFloat(value);
            return percent >= 0 && percent <= 100;
        }
        const intValue = parseInt(value, 10);
        return intValue >= 0 && intValue <= 255;
    };

    return match.slice(1).every(isValidComponent);
}
