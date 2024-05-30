import { isValidHsla } from '@/validations/isValidHsla';
import { hslaRegex } from '@/utils/regex';

/**
 * Parses an HSLA color string.
 *
 * This function extracts the hue, saturation, lightness, and alpha values from an HSLA color string.
 *
 * @param {string} color - The HSLA color string to parse.
 * @returns {[number, number, number, number]} An array containing the hue, saturation, lightness, and alpha values.
 * @throws {Error} Throws an error if the color string is not a valid HSLA color.
 */
export function parseHsla(color: string): [number, number, number, number] {
    const match = color.match(hslaRegex);
    if (!match || !isValidHsla(color)) throw new Error('Invalid HSLA color format');

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

    const h = Math.round(parseHue(match[1], match[2]));
    const s = parseFloat(match[3]);
    const l = parseFloat(match[4]);
    let a = match[5] === 'none' ? 1 : parseFloat(match[5]);

    if (match[5].endsWith('%')) {
        a = parseFloat(match[5]) / 100;
    }

    return [h, s, l, a];
}
