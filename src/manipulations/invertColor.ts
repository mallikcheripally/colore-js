import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import {parseColorToRgba} from "@/parser/parseColorToRgba";

/**
 * Inverts a given color.
 *
 * @param {string} color - The input color string in any supported format.
 * @returns {string} - The inverted color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function invertColor(color: string): string {
    const format: ColorFormat = detectColorFormat(color);
    const decomposed = decomposeColor(color);

    switch (format) {
        case ColorFormats.RGB:
        case ColorFormats.RGBA: {
            const { r, g, b, a } = decomposed;
            const inverted = {
                r: 255 - r,
                g: 255 - g,
                b: 255 - b,
                a
            };
            return recomposeColor(color, inverted);
        }

        case ColorFormats.HEX:
        case ColorFormats.HEX_ALPHA: {
            const { r, g, b, a } = decomposed;
            const inverted = {
                r: 255 - r,
                g: 255 - g,
                b: 255 - b,
                a
            };
            return recomposeColor(color, inverted);
        }

        case ColorFormats.HSL:
        case ColorFormats.HSLA: {
            let { h, s, l, a } = decomposed;
            l = 100 - l;
            const inverted = { ...decomposed, h, s, l, a };
            return recomposeColor(color, inverted);
        }

        case ColorFormats.LAB: {
            const { l, a, b } = decomposed;
            const inverted = {
                l: 100 - l,
                a: -a,
                b: -b
            };
            return recomposeColor(color, inverted);
        }

        case ColorFormats.LCH: {
            const { l, c, h } = decomposed;
            const inverted = {
                l: 100 - l,
                c: c,
                h: (h + 180) % 360
            };
            return recomposeColor(color, inverted);
        }

        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            const { r, g, b, a } = rgba;
            const inverted = {
                r: 255 - r,
                g: 255 - g,
                b: 255 - b,
                a
            };
            return recomposeColor(color, inverted);
        }

        default:
            throw new Error(`Unsupported color format ${color} for inversion`);
    }
}
