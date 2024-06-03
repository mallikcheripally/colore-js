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
import { parseHexAlpha } from './parseHexAlpha';
import { parseHex } from '@/parser/parseHex';

/**
 * Converts any valid color format to RGB.
 *
 * @param {string} color - The input color in any valid format.
 * @returns {object} - The RGB representation of the color.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function parseColorToRgba(color: string): { r: number; g: number; b: number; a?: number } {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex': {
            const { r, g, b } = parseHex(color);
            return { r, g, b };
        }

        case 'hex-alpha': {
            const { r, g, b, a } = parseHexAlpha(color);
            return { r, g, b, a };
        }

        case 'hsl': {
            const { hDeg, s, l } = parseHsl(color);
            return hslToRgb(hDeg, s, l, false);
        }

        case 'hsla': {
            const { hDeg, s, l, aNum } = parseHsla(color);
            const rgb = hslToRgb(hDeg, s, l, false);
            return {
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
                a: aNum,
            };
        }

        case 'lab': {
            const { l, a, b, alphaNum } = parseLab(color);
            const rgb = labToRgb(l, a, b, false);
            return {
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
                a: alphaNum,
            };
        }

        case 'lch': {
            const { l, c, hDeg, alphaNum } = parseLch(color);
            const rgb = lchToRgb(l, c, hDeg, false);
            return {
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
                a: alphaNum,
            };
        }

        case 'xyz': {
            const { x, y, z } = parseXyz(color);
            return xyzToRgb(x, y, z, false);
        }

        case 'rgb': {
            const { rNum, gNum, bNum } = parseRgb(color);
            return { r: rNum, g: gNum, b: bNum, };
        }

        case 'rgba': {
            const { rNum, gNum, bNum, aNum } = parseRgba(color);
            return { r: rNum, g: gNum, b: bNum, a: aNum, };
        }

        case 'named': {
            const { r, g, b } = parseNamedColor(color);
            return { r, g, b };
        }

        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
