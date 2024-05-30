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

    const [, l, , c, , h, , , , alpha] = match;

    const isValidL = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 100;
    };

    const isValidC = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 230;
    };

    const isValidH = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('deg') || value.includes('rad') || value.includes('turn')) {
            return true;
        }
        const num = parseFloat(value);
        return !isNaN(num);
    };

    const isValidAlpha = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
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

    return isValidL(l) && isValidC(c) && isValidH(h) && (alpha === undefined || isValidAlpha(alpha.trim()));
}
