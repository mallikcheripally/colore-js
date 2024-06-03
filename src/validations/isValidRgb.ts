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

    const isValidComponent = (value: string, unit: string) => {
        if (unit === "%") {
            const percent = parseFloat(value);
            return percent >= 0 && percent <= 100;
        }
        const intValue = parseInt(value, 10);
        return intValue >= 0 && intValue <= 255;
    };

    const r = match[1];
    const rUnit = match[2];
    const g = match[3];
    const gUnit = match[4];
    const b = match[5];
    const bUnit = match[6];

    return isValidComponent(r, rUnit) && isValidComponent(g, gUnit) && isValidComponent(b, bUnit);
}
