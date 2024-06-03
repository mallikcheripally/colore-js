import { isValidHsla } from '@/validations/isValidHsla';
import { hslaRegex } from '@/utils/regex';
import {parseAlpha, parseComponent, parseHue, roundTo} from '@/utils/colorUtils';

/**
 * Parses an HSLA color string.
 *
 * This function extracts the hue, saturation, lightness, and alpha values from an HSLA color string.
 *
 * @param {string} color - The HSLA color string to parse.
 * @returns {{
 *     h: number;
 *     hUnit?: string | undefined;
 *     hDeg: number;
 *     s: number;
 *     sUnit?: string | undefined;
 *     l: number;
 *     lUnit?: string | undefined;
 *     a: number | undefined;
 *     aUnit?: string | undefined;
 *     aNum: number;
 * }} Returns an object value
 * @throws {Error} Throws an error if the color string is not a valid HSLA color.
 */
export function parseHsla(color: string): {
    h: number;
    hUnit?: string | undefined;
    hDeg: number;
    s: number;
    sUnit?: string | undefined;
    l: number;
    lUnit?: string | undefined;
    a: number | undefined;
    aUnit?: string | undefined;
    aNum: number;
} {
    const match = color.match(hslaRegex);
    if (!match || !isValidHsla(color)) {
        throw new Error('Invalid HSLA color format');
    }

    const h = parseComponent(match[1]);
    const hDeg = roundTo(parseHue(match[1], match[3]), 2);
    const hUnit = match[3];
    const s = parseComponent(match[4]);
    const sUnit = match[6];
    const l = parseComponent(match[7]);
    const lUnit = match[9];
    const a = parseAlpha(match[10]);
    const aUnit = match[10].includes('%') ? '%' : undefined;
    const aNum = match[10].includes('%') ? parseFloat(match[10]) / 100 : parseFloat(match[10]);

    return { h, hUnit, hDeg, s, sUnit, l, lUnit, a, aUnit, aNum };
}
