import { hexToRgb } from '@/conversions/hexToRgb';
import { hslToRgb } from '@/conversions/hslToRgb';
import { labToRgb } from '@/conversions/labToRgb';
import { lchToRgb } from '@/conversions/lchToRgb';
import { xyzToRgb } from '@/conversions/xyzToRgb';
import { detectColorFormat } from './detectColorFormat';
import { parseRgb } from './parseRgb';
import { parseRgba } from './parseRgba';
import { parseLab } from './parseLab';
import { parseHsl } from './parseHsl';
import { parseHsla } from './parseHsla';
import { parseLch } from './parseLch';
import { parseXyz } from './parseXyz';
import { parseNamedColor } from './parseNamedColor';

/**
 * Converts any valid color format to RGB.
 *
 * @param {string} color - The input color in any valid format.
 * @returns {object} - The RGB representation of the color.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function decomposeColor(color: string): { r: number; g: number; b: number; a?: number } {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex':
        case 'hex-alpha': {
            return hexToRgb(color, false);
        }

        case 'hsl': {
            const [h, s, l] = parseHsl(color);
            return hslToRgb(h, s, l, false);
        }

        case 'hsla': {
            const [hslaH, hslaS, hslaL] = parseHsla(color);
            return hslToRgb(hslaH, hslaS, hslaL, false);
        }

        case 'lab': {
            const [lVal, a, b] = parseLab(color);
            return labToRgb(lVal, a, b, false);
        }

        case 'lch': {
            const [lchL, c, hVal] = parseLch(color);
            return lchToRgb(lchL, c, hVal, false);
        }

        case 'xyz': {
            const [x, y, z] = parseXyz(color);
            return xyzToRgb(x, y, z, false);
        }

        case 'rgb': {
            const rgb = parseRgb(color);
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2],
            };
        }

        case 'rgba': {
            const rgba = parseRgba(color);
            return {
                r: rgba[0],
                g: rgba[1],
                b: rgba[2],
                a: rgba[3],
            };
        }

        case 'named': {
            const [ r, g, b ] = parseNamedColor(color);
            return { r, g, b };
        }

        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
