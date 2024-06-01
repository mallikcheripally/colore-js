import { labRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid LAB color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid LAB color, false otherwise.
 */
export function isValidLab(color: string): boolean {
    const match = color.match(labRegex);
    if (match === null) return false;

    const l = match[1];
    const lUnit = match[3];
    const a = match[4];
    const aUnit = match[6];
    const b = match[7];
    const bUnit = match[9];
    const alpha = match[10];
    const alphaUnit = match[11];

    const isValidL = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === "%") {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 100;
    };

    const isValidAB = (value: string | 'none', unit: string) => {
        if (value === 'none') return true;
        if (unit === "%") {
            const num = parseFloat(value);
            return num >= -100 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= -125 && num <= 125;
    };

    const isValidAlpha = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === "%") {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 1;
    };

    return isValidL(l, lUnit) && isValidAB(a, aUnit) && isValidAB(b, bUnit) && (alpha === undefined || isValidAlpha(alpha, alphaUnit));
}

