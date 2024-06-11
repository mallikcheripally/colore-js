import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { hexToHsl } from '@/conversions/hexToHsl';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import {parseColorToRgba} from "@/parser/parseColorToRgba";
import {rgbaToHsla} from "@/conversions/rgbaToHsla";
import {hslaToRgba} from "@/conversions/hslaToRgba";
import {hexAlphaToHsla} from "@/conversions/hexAlphaToHsla";

/**
 * Finds the monochromatic colors of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {string[]} - The monochromatic colors in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function monochromaticColors(color: string): string[] {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    let monochromaticColors: Array<string> = [];

    const adjustLightness = (l: number, amount: number): number => {
        return Math.max(0, Math.min(100, l + amount));
    };

    const lightnessSteps = [-40, -20, 0, 20, 40];

    switch (format) {
        case ColorFormats.HSL:
        case ColorFormats.HSLA: {
            const { l } = decomposed;
            monochromaticColors = lightnessSteps.map(step => recomposeColor(color, { ...decomposed, l: adjustLightness(l, step) }));
            break;
        }

        case ColorFormats.RGB: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            monochromaticColors = lightnessSteps.map(step => {
                const newL = adjustLightness(hsl.l, step);
                const newRgb = hslToRgb(hsl.h, hsl.s, newL, false);
                return recomposeColor(color, newRgb);
            });
            break;
        }

        case ColorFormats.RGBA: {
            const hsla = rgbaToHsla(decomposed.r, decomposed.g, decomposed.b, decomposed.a, false);
            monochromaticColors = lightnessSteps.map(step => {
                const newL = adjustLightness(hsla.l, step);
                const newRgb = hslaToRgba(hsla.h, hsla.s, newL, hsla.a, false);
                return recomposeColor(color, newRgb);
            });
            break;
        }

        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            monochromaticColors = lightnessSteps.map(step => {
                const newL = adjustLightness(hsl.l, step);
                const newRgb = hslToRgb(hsl.h, hsl.s, newL, false);
                return recomposeColor(color, newRgb);
            });
            break;
        }

        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            monochromaticColors = lightnessSteps.map(step => {
                const newL = adjustLightness(hsla.l, step);
                const newRgb = hslaToRgba(hsla.h, hsla.s, newL, hsla.a, false);
                return recomposeColor(color, newRgb);
            });
            break;
        }

        case ColorFormats.LAB: {
            const { l, a, b } = decomposed;
            monochromaticColors = lightnessSteps.map(step => recomposeColor(color, { l: adjustLightness(l, step), a, b }));
            break;
        }

        case ColorFormats.LCH: {
            const { l, c, h } = decomposed;
            monochromaticColors = lightnessSteps.map(step => recomposeColor(color, { l: adjustLightness(l, step), c, h }));
            break;
        }

        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b, false);
            monochromaticColors = lightnessSteps.map(step => {
                const newL = adjustLightness(hsl.l, step);
                const newRgb = hslToRgb(hsl.h, hsl.s, newL, false);
                return recomposeColor(color, newRgb);
            });
            break;
        }
    }

    return monochromaticColors;
}
