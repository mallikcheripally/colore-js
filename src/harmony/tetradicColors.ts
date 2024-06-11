import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { rebuildColorFromRgba } from '@/parser/rebuildColorFromRgba';

/**
 * Finds the tetradic colors of a given color.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {string[]} - The tetradic colors in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function tetradicColors(color: string): string[] {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    let tetradicColors: Array<string> = [];

    const wrapHue = (hue: number): number => {
        return (hue + 360) % 360;
    };

    switch (format) {
        case ColorFormats.HSL:
        case ColorFormats.HSLA: {
            const { h } = decomposed;
            const h1 = wrapHue(h + 90);
            const h2 = wrapHue(h + 180);
            const h3 = wrapHue(h + 270);
            tetradicColors = [
                recomposeColor(color, { ...decomposed, h: h1 }),
                recomposeColor(color, { ...decomposed, h: h2 }),
                recomposeColor(color, { ...decomposed, h: h3 }),
            ];
            break;
        }

        case ColorFormats.RGB: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            const h1 = wrapHue(hsl.h + 90);
            const h2 = wrapHue(hsl.h + 180);
            const h3 = wrapHue(hsl.h + 270);
            const tetradicRgbColors = [
                hslToRgb(h1, hsl.s, hsl.l, false),
                hslToRgb(h2, hsl.s, hsl.l, false),
                hslToRgb(h3, hsl.s, hsl.l, false),
            ];
            tetradicColors = tetradicRgbColors.map(rgb => recomposeColor(color, rgb));
            break;
        }

        case ColorFormats.RGBA: {
            const hsla = rgbaToHsla(decomposed.r, decomposed.g, decomposed.b, decomposed.a, false);
            const h1 = wrapHue(hsla.h + 90);
            const h2 = wrapHue(hsla.h + 180);
            const h3 = wrapHue(hsla.h + 270);
            const tetradicRgbaColors = [
                hslaToRgba(h1, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h2, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h3, hsla.s, hsla.l, hsla.a, false),
            ];
            tetradicColors = tetradicRgbaColors.map(rgba => recomposeColor(color, rgba));
            break;
        }

        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            const h1 = wrapHue(hsl.h + 90);
            const h2 = wrapHue(hsl.h + 180);
            const h3 = wrapHue(hsl.h + 270);
            const tetradicRgbColors = [
                hslToRgb(h1, hsl.s, hsl.l, false),
                hslToRgb(h2, hsl.s, hsl.l, false),
                hslToRgb(h3, hsl.s, hsl.l, false),
            ];
            tetradicColors = tetradicRgbColors.map(rgb => recomposeColor(color, rgb));
            break;
        }

        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            const h1 = wrapHue(hsla.h + 90);
            const h2 = wrapHue(hsla.h + 180);
            const h3 = wrapHue(hsla.h + 270);
            const tetradicRgbaColors = [
                hslaToRgba(h1, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h2, hsla.s, hsla.l, hsla.a, false),
                hslaToRgba(h3, hsla.s, hsla.l, hsla.a, false),
            ];
            tetradicColors = tetradicRgbaColors.map(rgba => recomposeColor(color, rgba));
            break;
        }

        case ColorFormats.LAB: {
            const { l, a, b } = decomposed;
            const tetradicLabColors = [
                { l, a: -a, b: -b },
                { l, a: a, b: b + 90 },
                { l, a: a, b: b + 180 },
            ];
            tetradicColors = tetradicLabColors.map(lab => recomposeColor(color, lab));
            break;
        }

        case ColorFormats.LCH: {
            const { l, c, h } = decomposed;
            const h1 = wrapHue(h + 90);
            const h2 = wrapHue(h + 180);
            const h3 = wrapHue(h + 270);
            const tetradicLchColors = [
                { l, c, h: h1 },
                { l, c, h: h2 },
                { l, c, h: h3 },
            ];
            tetradicColors = tetradicLchColors.map(lch => recomposeColor(color, lch));
            break;
        }

        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b, false);
            const h1 = wrapHue(hsl.h + 90);
            const h2 = wrapHue(hsl.h + 180);
            const h3 = wrapHue(hsl.h + 270);
            const tetradicRgbColors = [
                hslToRgb(h1, hsl.s, hsl.l, false),
                hslToRgb(h2, hsl.s, hsl.l, false),
                hslToRgb(h3, hsl.s, hsl.l, false),
            ];
            // @ts-ignore
            tetradicColors = tetradicRgbColors.map(rgba => rebuildColorFromRgba(color, rgba));
            break;
        }
    }

    return tetradicColors;
}
