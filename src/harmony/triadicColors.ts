import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { rebuildColorFromRgba } from '@/parser/rebuildColorFromRgba';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import { recomposeColor } from '@/parser/recomposeColor';

/**
 * Finds the triadic colors of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {string[]} - The triadic colors in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function triadicColors(color: string): string[] {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    let triadicColors: { r: number; g: number; b: number; a?: number }[] = [];

    switch (format) {
        case ColorFormats.HSL: {
            const { h, s, l } = decomposed;
            const h1 = (h + 120) % 360;
            const h2 = (h + 240) % 360;
            triadicColors = [hslToRgb(h1, s, l, false), hslToRgb(h2, s, l, false)];
            break;
        }

        case ColorFormats.HSLA: {
            const { h, s, l, a } = decomposed;
            const h1 = (h + 120) % 360;
            const h2 = (h + 240) % 360;
            triadicColors = [hslaToRgba(h1, s, l, a, false), hslaToRgba(h2, s, l, a, false)];
            break;
        }

        case ColorFormats.RGB: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            const h1 = (hsl.h + 120) % 360;
            const h2 = (hsl.h + 240) % 360;
            return [hslToRgb(h1, hsl.s, hsl.l), hslToRgb(h2, hsl.s, hsl.l)];
        }

        case ColorFormats.RGBA: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            const h1 = (hsl.h + 120) % 360;
            const h2 = (hsl.h + 240) % 360;
            triadicColors = [
                // @ts-ignore
                hslToRgb(h1, hsl.s, hsl.l, false),
                // @ts-ignore
                hslToRgb(h2, hsl.s, hsl.l, false),
            ];
            triadicColors.forEach((color) => (color.a = decomposed.a));
            break;
        }
        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            const h1 = (hsl.h + 120) % 360;
            const h2 = (hsl.h + 240) % 360;
            triadicColors = [
                // @ts-ignore
                hslToRgb(h1, hsl.s, hsl.l, false),
                // @ts-ignore
                hslToRgb(h2, hsl.s, hsl.l, false),
            ];
            break;
        }
        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            const h1 = (hsla.h + 120) % 360;
            const h2 = (hsla.h + 240) % 360;
            triadicColors = [
                hslaToRgba(h1, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h2, hsla.s, hsla.l, hsla.a, false),
            ];
            break;
        }
        case ColorFormats.LAB: {
            const { l, a, b } = decomposed;
            const triadicLabColors = [
                { l, a: -a, b: -b },
                { l, a: -a, b: -b + 120 },
            ];
            return triadicLabColors.map((lab) => recomposeColor(color, lab));
        }
        case ColorFormats.LCH: {
            const { l, c, h } = decomposed;
            const triadicLchColors = [
                { l, c, h: (h + 120) % 360 },
                { l, c, h: (h + 240) % 360 },
            ];
            return triadicLchColors.map((lch) => recomposeColor(color, lch));
        }
        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b, false);
            const h1 = (hsl.h + 120) % 360;
            const h2 = (hsl.h + 240) % 360;
            triadicColors = [hslToRgb(h1, hsl.s, hsl.l, false), hslToRgb(h2, hsl.s, hsl.l, false)];
            break;
        }
    }

    // @ts-ignore
    return triadicColors.map((triadicColor) => rebuildColorFromRgba(color, triadicColor));
}
