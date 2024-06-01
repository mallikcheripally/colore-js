import { labRegex } from '@/utils/regex';
import { isValidLab } from '@/validations/isValidLab';

/**
 * Parses a LAB color string.
 *
 * @param {string} color - The LAB color string to parse.
 * @returns {{
 *     l: number;
 *     lUnit?: string;
 *     a: number;
 *     aUnit?: string;
 *     b: number;
 *     bUnit?: string;
 *     alpha?: number;
 *     alphaUnit?: string;
 * }} An object containing the LAB values and units.
 * @throws {Error} If the LAB color format is invalid.
 */
export function parseLab(color: string): {
    l: number;
    lUnit?: string;
    a: number;
    aUnit?: string;
    b: number;
    bUnit?: string;
    alpha?: number;
    alphaUnit?: string;
} {
    const match = color.match(labRegex);
    if (!match || !isValidLab(color)) throw new Error('Invalid LAB color format');

    const parseComponent = (value: string) => {
        if (value === 'none') return 0;
        return parseFloat(value);
    };

    const l = parseComponent(match[1]);
    const lUnit = match[3];
    const a = parseComponent(match[4]);
    const aUnit = match[6];
    const b = parseComponent(match[7]);
    const bUnit = match[9];
    const alpha = match[10] ? (match[7] === 'none' ? 1 : parseFloat(match[10])) : undefined;
    const alphaUnit = match[11];

    return { l, lUnit, a, aUnit, b, bUnit, alpha, alphaUnit };
}
