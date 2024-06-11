import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import { labToLch } from '@/conversions/labToLch';
import { lchToLab } from '@/conversions/lchToLab';
import {rgbaToHexAlpha} from "@/conversions/rgbaToHexAlpha";

/**
 * Finds the analogous colors of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {string[]} - The analogous colors in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function analogousColors(color: string): string[] {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    let analogousColors: Array<string> = [];

    const wrapHue = (hue: number): number => {
        return (hue + 360) % 360;
    };

    switch (format) {
        case ColorFormats.HSL:
        case ColorFormats.HSLA: {
            const { h } = decomposed;
            const h1 = wrapHue(h + 30);
            const h2 = wrapHue(h - 30);
            analogousColors = [
                recomposeColor(color, { ...decomposed, h: h1 }),
                recomposeColor(color, { ...decomposed, h: h2 }),
            ];
            break;
        }

        case ColorFormats.RGB: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            const h1 = wrapHue(hsl.h + 30);
            const h2 = wrapHue(hsl.h - 30);
            const analogousRgbColors = [hslToRgb(h1, hsl.s, hsl.l, false), hslToRgb(h2, hsl.s, hsl.l, false)];
            analogousColors = analogousRgbColors.map((rgb) => recomposeColor(color, rgb));
            break;
        }

        case ColorFormats.RGBA: {
            const hsla = rgbaToHsla(decomposed.r, decomposed.g, decomposed.b, decomposed.a, false);
            const h1 = wrapHue(hsla.h + 30);
            const h2 = wrapHue(hsla.h - 30);
            const analogousRgbaColors = [
                hslaToRgba(h1, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h2, hsla.s, hsla.l, hsla.a, false),
            ];
            analogousColors = analogousRgbaColors.map((rgba) => recomposeColor(color, rgba));
            break;
        }

        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            const h1 = wrapHue(hsl.h + 30);
            const h2 = wrapHue(hsl.h - 30);
            const analogousRgbColors = [hslToRgb(h1, hsl.s, hsl.l, false), hslToRgb(h2, hsl.s, hsl.l, false)];
            analogousColors = analogousRgbColors.map((rgb) => recomposeColor(color, rgb));
            break;
        }

        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            const h1 = wrapHue(hsla.h + 30);
            const h2 = wrapHue(hsla.h - 30);
            const analogousRgbaColors = [
                hslaToRgba(h1, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h2, hsla.s, hsla.l, hsla.a, false),
            ];
            analogousColors = analogousRgbaColors.map((rgba) => rgbaToHexAlpha(rgba.r, rgba.g, rgba.b, rgba.a));
            break;
        }

        case ColorFormats.LAB: {
            const { l, a, b } = decomposed;
            const lch = labToLch(l, a, b, false);
            const h1 = wrapHue(lch.h + 30);
            const h2 = wrapHue(lch.h - 30);
            const analogousLchColors = [
                { l: lch.l, c: lch.c, h: h1 },
                { l: lch.l, c: lch.c, h: h2 },
            ];
            analogousColors = analogousLchColors.map((lchColor) => {
                const labColor = lchToLab(lchColor.l, lchColor.c, lchColor.h, false);
                return recomposeColor(color, labColor);
            });
            break;
        }

        case ColorFormats.LCH: {
            const { l, c, h } = decomposed;
            const h1 = wrapHue(h + 30);
            const h2 = wrapHue(h - 30);
            analogousColors = [
                recomposeColor(color, { ...decomposed, h: h1 }),
                recomposeColor(color, { ...decomposed, h: h2 }),
            ];
            break;
        }

        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b, false);
            const h1 = wrapHue(hsl.h + 30);
            const h2 = wrapHue(hsl.h - 30);
            const analogousRgbColors = [hslToRgb(h1, hsl.s, hsl.l, false), hslToRgb(h2, hsl.s, hsl.l, false)];
            analogousColors = analogousRgbColors.map((rgb) => recomposeColor(color, rgb));
            break;
        }

        default:
            throw new Error(`Unsupported color format ${color} for analogous color calculation`);
    }

    return analogousColors;
}
