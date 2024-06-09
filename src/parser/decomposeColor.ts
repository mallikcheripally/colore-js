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
import {ColorFormat, ColorFormats} from "@/utils/colorFormats";

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
    const format: ColorFormat = detectColorFormat(color);

    switch (format) {
        case ColorFormats.HEX:
            return parseHex(color);

        case ColorFormats.HEX_ALPHA:
            return parseHexAlpha(color);

        case ColorFormats.RGB:
            return parseRgb(color);

        case ColorFormats.RGBA:
            return parseRgba(color);

        case ColorFormats.HSL:
            return parseHsl(color);

        case ColorFormats.HSLA:
            return parseHsla(color);

        case ColorFormats.LAB:
            return parseLab(color);

        case ColorFormats.LCH:
            return parseLch(color);

        case ColorFormats.XYZ:
            return parseXyz(color);

        case ColorFormats.NAMED:
            return parseNamedColor(color);

        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
