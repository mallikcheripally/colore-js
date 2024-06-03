import { lchRegex } from '@/utils/regex';
import { isValidLch } from '@/validations/isValidLch';
import { parseAlpha, parseComponent, parseHue } from '@/utils/colorUtils';

/**
 * Parses an LCH color string into its components.
 *
 * This function takes an LCH color string and parses it into an array of its components.
 *
 * @param {string} color - The LCH color string to parse.
 * @returns {{
 *     l: number;
 *     lUnit?: string;
 *     c: number;
 *     cUnit?: string;
 *     h: number;
 *     hUnit?: string;
 *     hDeg: number;
 *     alpha?: number;
 *     alphaUnit?: string;
 *     alphaNum?: number;
 * }} An object containing the LAB values and units.
 * @throws {Error} Throws an error if the LCH color string is invalid.
 */
export function parseLch(color: string): {
    l: number;
    lUnit?: string;
    c: number;
    cUnit?: string;
    h: number;
    hUnit?: string;
    hDeg: number;
    alpha?: number;
    alphaUnit?: string;
    alphaNum?: number;
} {
    const match = color.match(lchRegex);
    if (!match || !isValidLch(color)) throw new Error('Invalid LCH color format');

    const l = match[1];
    const lUnit = match[3];
    const c = match[4];
    const cUnit = match[6];
    const h = match[7];
    const hUnit = match[9];
    const alpha = match[11];
    const alphaUnit = match[12];

    return {
        l: parseComponent(l),
        lUnit,
        c: parseComponent(c),
        cUnit,
        h: parseComponent(h),
        hUnit,
        hDeg: parseHue(h, hUnit),
        alpha: parseAlpha(alpha),
        alphaUnit,
        alphaNum: match[10] ? match[10].includes('%') ? parseFloat(match[10]) / 100 : parseFloat(match[10]) : undefined,
    };
}
