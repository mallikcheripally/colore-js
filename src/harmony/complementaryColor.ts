import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import { rebuildColorFromRgba } from '@/parser/rebuildColorFromRgba';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Finds the complementary color of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {string} - The complementary color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function complementaryColor(color: string): string {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);
    let complementaryColor: { r: number; g: number; b: number; a: number };

    switch (format) {
        case ColorFormats.HSL:
        case ColorFormats.HSLA: {
            const { h, s, l, a } = decomposed;
            const newH = (h + 180) % 360;
            complementaryColor = hslaToRgba(newH, s, l, a, false);
            break;
        }

        case ColorFormats.RGB:
        case ColorFormats.RGBA: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            const newH = (hsl.h + 180) % 360;
            // @ts-ignore
            complementaryColor = hslToRgb(newH, hsl.s, hsl.l, false);
            complementaryColor.a = decomposed.a;
            break;
        }

        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            const newH = (hsl.h + 180) % 360;
            // @ts-ignore
            complementaryColor = hslToRgb(newH, hsl.s, hsl.l, false);
            break;
        }

        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            const newH = (hsla.h + 180) % 360;
            complementaryColor = hslaToRgba(newH, hsla.s, hsla.l, hsla.a, false);
            break;
        }

        case ColorFormats.LAB: {
            let { l, a, b } = decomposed;
            a = -a;
            b = -b;
            return recomposeColor(color, { l, a, b });
        }

        case ColorFormats.LCH: {
            let { l, c, h } = decomposed;
            h = (h + 180) % 360;
            return recomposeColor(color, { ...decomposed, h });
        }

        default:
            throw new Error(`Unsupported color format ${color} for complementary color calculation`);
    }

    return rebuildColorFromRgba(color, complementaryColor);
}
