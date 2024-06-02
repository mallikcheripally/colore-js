import { lchRegex } from '@/utils/regex';

/**
 * Checks if the input string is a valid LCH color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid LCH color, false otherwise.
 */
export function isValidLch(color: string): boolean {
    const match = color.match(lchRegex);
    if (match === null) return false;

    const l = match[1];
    const lUnit = match[3];
    const c = match[4];
    const cUnit = match[6];
    const h = match[7];
    const hUnit = match[9];
    const alpha = match[11];
    const alphaUnit = match[12];

    const isValidL = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === '%') {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 100;
    };

    const isValidC = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === '%') {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 230;
    };

    const isValidH = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === 'deg' || unit === 'rad' || unit === 'turn') {
            return true;
        }
        const num = parseFloat(value);
        return !isNaN(num);
    };

    const isValidAlpha = (value: string, unit: string) => {
        if (value === 'none') return true;
        if (unit === '%') {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        if (value.startsWith('.') || value === '1' || value === '0') {
            const num = parseFloat(value);
            return num >= 0 && num <= 1;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 1;
    };

    return (
        isValidL(l, lUnit) &&
        isValidC(c, cUnit) &&
        isValidH(h, hUnit) &&
        (alpha === undefined || isValidAlpha(alpha.trim(), alphaUnit))
    );
}
