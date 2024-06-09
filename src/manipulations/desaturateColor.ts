import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import { lchToLab } from '@/conversions/lchToLab';
import { labToLch } from '@/conversions/labToLch';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Desaturates a given color by a specified amount.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to desaturate the color (0-100).
 * @returns {string} - The desaturated color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function desaturateColor(color: string, amount: number): string {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const format: ColorFormat = detectColorFormat(color);
    const factor = amount / 100;
    const desaturate = (value: number) => Math.max(0, value - value * factor);
    const decomposed = decomposeColor(color);

    switch (format) {
        case ColorFormats.HSL: {
            let { s } = decomposed;
            s = desaturate(s);
            return recomposeColor(color, { ...decomposed, s });
        }

        case ColorFormats.HSLA: {
            let { s } = decomposed;
            s = desaturate(s);
            return recomposeColor(color, { ...decomposed, s });
        }

        case ColorFormats.RGB: {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            hsl.s = desaturate(hsl.s);
            const rgb = hslToRgb(hsl.h, hsl.s, hsl.l, false);
            return recomposeColor(color, rgb);
        }

        case ColorFormats.RGBA: {
            const hsla = rgbaToHsla(decomposed.r, decomposed.g, decomposed.b, decomposed.a, false);
            hsla.s = desaturate(hsla.s);
            const rgba = hslaToRgba(hsla.h, hsla.s, hsla.l, hsla.a, false);
            return recomposeColor(color, { ...rgba });
        }

        case ColorFormats.HEX: {
            const hsl = hexToHsl(color, false);
            hsl.s = desaturate(hsl.s);
            const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l, false);
            return recomposeColor(color, { ...newRgb });
        }

        case ColorFormats.HEX_ALPHA: {
            const hsla = hexAlphaToHsla(color, false);
            hsla.s = desaturate(hsla.s);
            const newRgba = hslaToRgba(hsla.h, hsla.s, hsla.l, hsla.a, false);
            return recomposeColor(color, { ...newRgba });
        }

        case ColorFormats.LAB: {
            const lch = labToLch(decomposed.l, decomposed.a, decomposed.b, false);
            lch.c = Math.max(0, lch.c - lch.c * factor);
            const newLab = lchToLab(lch.l, lch.c, lch.h, false);
            return recomposeColor(color, { ...decomposed, ...newLab });
        }

        case ColorFormats.LCH: {
            let { c } = decomposed;
            c = Math.max(0, c - c * factor);
            return recomposeColor(color, { ...decomposed, c });
        }

        default: {
            throw new Error(`Unsupported color format ${color} for desaturation`);
        }
    }
}
