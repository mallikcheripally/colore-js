import { detectColorFormat } from './detectColorFormat';
import { parseRgb } from './parseRgb';
import { parseRgba } from './parseRgba';
import { parseHsl } from './parseHsl';
import { parseHsla } from './parseHsla';
import { parseHex } from './parseHex';
import { parseHexAlpha } from './parseHexAlpha';
import { parseLab } from './parseLab';
import { parseLch } from './parseLch';
import { parseXyz } from './parseXyz';
import { parseNamedColor } from './parseNamedColor';

/**
 * Decomposes a color string into its components.
 *
 * This function detects the format of the input color string, parses it using the appropriate parser,
 * and returns the corresponding color components as an object.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {object} - The decomposed color components as an object.
 * @throws {Error} - Throws an error if the input color format is unsupported or invalid.
 */
export function decomposeColor(color: string): any {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex':
            return parseHex(color);
        case 'hex-alpha':
            return parseHexAlpha(color);
        case 'rgb':
            return parseRgb(color);
        case 'rgba':
            return parseRgba(color);
        case 'hsl':
            return parseHsl(color);
        case 'hsla':
            return parseHsla(color);
        case 'lab':
            return parseLab(color);
        case 'lch':
            return parseLch(color);
        case 'xyz':
            return parseXyz(color);
        case 'named':
            return parseNamedColor(color);
        default:
            throw new Error(`Unsupported color format: ${color}`);
    }
}
