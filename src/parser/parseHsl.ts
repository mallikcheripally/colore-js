import { isValidHsl } from '@/validations/isValidHsl';
import { hslRegex } from '@/utils/regex';

/**
 * Parses an HSL color string and returns an object containing the hue, saturation, and lightness values.
 *
 * @param {string} color - The HSL color string to parse.
 * @returns {{h: number, hUnit?: string | undefined, hDeg: number, s: number, sUnit?: string | undefined, l: number, lUnit?: string | undefined}} - An object containing the hue, saturation, and lightness values along with the hue unit.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function parseHsl(color: string): { h: number; hUnit?: string | undefined; hDeg: number; s: number; sUnit?: string | undefined; l: number; lUnit?: string | undefined; } {
    const match = color.match(hslRegex);
    if (!match || !isValidHsl(color)) {
        throw new Error('Invalid HSL color format');
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

    const h = parseFloat(match[1]);
    const hDeg = parseHue(match[1], match[3]);
    const hUnit = match[3];
    const s = parseFloat(match[4]);
    const sUnit = match[6];
    const l = parseFloat(match[7]);
    const lUnit = match[9];

    return { h, hUnit, hDeg, s, sUnit, l, lUnit };
}
