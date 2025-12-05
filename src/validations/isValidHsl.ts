import { hslRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid HSL color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSL color, false otherwise.
 */
export function isValidHsl(color: string): boolean {
    const match = color.match(hslRegex);
    if (!match) return false;

    // Saturation and lightness must be percentages in this legacy comma syntax.
    const sUnit = match[6];
    const lUnit = match[9];
    if (sUnit !== '%' || lUnit !== '%') return false;

    const parseHue = (hue: string, unit: string | undefined): number => {
        let hueValue = parseFloat(hue);
        switch (unit) {
            case 'deg':
                return hueValue;
            case 'rad':
                return hueValue * (180 / Math.PI);
            case 'grad':
                return hueValue * (9 / 10);
            case 'turn':
                return hueValue * 360;
            default:
                return hueValue;
        }
    };


    const h = parseHue(match[1], match[3]);
    const s = parseFloat(match[4]);
    const l = parseFloat(match[7]);

    return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}
