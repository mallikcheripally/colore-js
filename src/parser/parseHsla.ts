import { isValidHsla } from '@/validations/isValidHsla';
import { hslaRegex } from '@/utils/regex';

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
 *     a: number;
 *     aUnit?: string | undefined;
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
    a: number;
    aUnit?: string | undefined;
} {
    const match = color.match(hslaRegex);
    if (!match || !isValidHsla(color)) {
        throw new Error('Invalid HSLA color format');
    }

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

    const roundTo = (num: number, precision: number): number => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    const h = parseFloat(match[1]);
    const hDeg = roundTo(parseHue(match[1], match[3]), 2);
    const hUnit = match[3];
    const s = parseFloat(match[4]);
    const sUnit = match[6];
    const l = parseFloat(match[7]);
    const lUnit = match[9];
    const a = match[10].includes('%') ? parseFloat(match[10]) / 100 : parseFloat(match[10]);
    const aUnit = match[10].includes('%') ? '%' : undefined;

    return { h, hUnit, hDeg, s, sUnit, l, lUnit, a, aUnit };
}
