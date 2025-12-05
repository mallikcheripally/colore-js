import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { ColorFormats } from '@/utils/colorFormats';
import { parseRgb } from '@/parser/parseRgb';
import { rgbToRgba } from '@/conversions/rgbToRgba';
import { parseHsl } from '@/parser/parseHsl';
import { hslToHsla } from '@/conversions/hslToHsla';
import { hexToHexAlpha } from '@/conversions/hexToHexAlpha';
import { parseNamedColor } from '@/parser/parseNamedColor';

/**
 * Sets the alpha value of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} alpha - The alpha value to set (0-1).
 * @returns {string} - The color with the new alpha value in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid or if the alpha value is out of range.
 */
export function setAlphaValue(color: string, alpha: number): string {
    if (alpha < 0 || alpha > 1) {
        throw new Error(`Invalid alpha value ${alpha}. Alpha should be between 0 and 1.`);
    }

    const format = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    switch (format) {
        case ColorFormats.RGBA:
        case ColorFormats.HSLA:
        case ColorFormats.HEX_ALPHA:
            decomposed.a = alpha;
            decomposed.aUnit = '';
            break;
        case ColorFormats.RGB:
            const rgb = parseRgb(color);
            return rgbToRgba(rgb.r, rgb.g, rgb.b, alpha);
        case ColorFormats.HSL:
            const hsl = parseHsl(color);
            return hslToHsla(hsl.hDeg, hsl.s, hsl.l, alpha);
        case ColorFormats.HEX:
            return hexToHexAlpha(color, alpha);
        case ColorFormats.LAB:
        case ColorFormats.LCH: {
            const rgba = parseColorToRgba(color);
            return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${alpha})`;
        }
        case ColorFormats.XYZ: {
            const rgba = parseColorToRgba(color);
            return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${alpha})`;
        }
        case ColorFormats.NAMED: {
            const namedColor = parseNamedColor(color);
            return rgbToRgba(namedColor.r, namedColor.g, namedColor.b, alpha);
        }
    }

    return recomposeColor(color, decomposed);
}
