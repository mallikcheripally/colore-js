import { lchRegex } from '@/utils/regex';

/**
 * Parses an LCH color string into its components.
 *
 * This function takes an LCH color string and parses it into an array of its components.
 *
 * @param {string} color - The LCH color string to parse.
 * @returns {[number, number, number, number?]} An array containing the LCH components [L, C, H, A?].
 * @throws {Error} Throws an error if the LCH color string is invalid.
 */
export function parseLch(color: string): [number, number, number, number?] {
    const match = color.match(lchRegex);
    if (!match) throw new Error('Invalid LCH color format');

    const [, l, , c, , h, , , , alpha] = match;

    const parseComponent = (value: string, percentage = false) => {
        if (value === 'none') return 0;
        return parseFloat(value);
    };

    const parseHue = (value: string) => {
        if (value === 'none') return 0;
        if (value.includes('deg')) {
            return parseFloat(value);
        } else if (value.includes('rad')) {
            return (parseFloat(value) * 180) / Math.PI;
        } else if (value.includes('turn')) {
            return parseFloat(value) * 360;
        }
        return parseFloat(value);
    };

    const parseAlpha = (value: string) => {
        if (value === 'none') return 1;
        if (value.includes('%')) {
            return parseFloat(value) / 100;
        }
        return parseFloat(value);
    };

    const lValue = parseComponent(l, true);
    const cValue = parseComponent(c, true);
    const hValue = parseHue(h);
    const alphaValue = alpha ? parseAlpha(alpha.trim()) : 1;

    const roundTo = (num: number, precision: number) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    if (lValue < 0 || lValue > 100) throw new Error('Invalid LCH color format');
    if (cValue < 0 || cValue > 230) throw new Error('Invalid LCH color format');
    if (hValue < -360 || hValue > 360) throw new Error('Invalid LCH color format');
    if (alphaValue < 0 || alphaValue > 1) throw new Error('Invalid LCH color format');

    return [lValue, cValue, roundTo(hValue, 3), alphaValue];
}
