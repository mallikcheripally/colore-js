import { hslaRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid HSLA color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSLA color, false otherwise.
 */
export function isValidHsla(color: string): boolean {
    const match = color.match(hslaRegex);
    if (!match) return false;

    // Saturation and lightness must be percentages in this legacy comma syntax.
    const sUnit = match[6];
    const lUnit = match[9];
    if (sUnit !== '%' || lUnit !== '%') return false;

    const h = parseFloat(match[1]);
    const s = parseFloat(match[4]);
    const l = parseFloat(match[7]);
    const a = match[10].includes('%') ? parseFloat(match[10]) / 100 : parseFloat(match[10]);

    const isValidHue = (value: number, unit: string | undefined): boolean => {
        switch (unit) {
            case 'deg':
                return value >= 0 && value <= 360;
            case 'rad':
                return value >= 0 && value <= 2 * Math.PI;
            case 'grad':
                return value >= 0 && value <= 400;
            case 'turn':
                return value >= 0 && value <= 1;
            default:
                return value >= 0 && value <= 360;
        }
    };

    return isValidHue(h, match[3]) &&
        s >= 0 && s <= 100 &&
        l >= 0 && l <= 100 &&
        a >= 0 && a <= 1;
}
