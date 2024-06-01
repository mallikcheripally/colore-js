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

    const [, l, , a, , b, , alpha] = match;

    const isValidL = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 100;
    };

    const isValidAB = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
            const num = parseFloat(value);
            return num >= -100 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= -125 && num <= 125;
    };

    const isValidAlpha = (value: string) => {
        if (value === 'none') return true;
        if (value.includes('%')) {
            const num = parseFloat(value);
            return num >= 0 && num <= 100;
        }
        const num = parseFloat(value);
        return num >= 0 && num <= 1;
    };

    return isValidL(l) && isValidAB(a) && isValidAB(b) && (alpha === undefined || isValidAlpha(alpha));
}

