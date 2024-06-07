import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { hslToRgb } from '@/conversions/hslToRgb';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { hslaToRgba } from '@/conversions/hslaToRgba';
import { hexToHsl } from '@/conversions/hexToHsl';
import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';
import {lchToLab} from "@/conversions/lchToLab";
import {labToRgb} from "@/conversions/labToRgb";
import {labToLch} from "@/conversions/labToLch";

/**
 * Saturates a given color by a specified amount.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to saturate the color (0-100).
 * @returns {string} - The saturated color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function saturateColor(color: string, amount: number): string {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const format = detectColorFormat(color);
    const factor = amount / 100;
    const saturate = (value: number) => Math.min(100, value + (100 - value) * factor);
    const decomposed = decomposeColor(color);

    switch (format) {
        case 'hsl': {
            let { s } = decomposed;
            s = saturate(s);
            return recomposeColor(color, { ...decomposed, s });
        }

        case 'hsla': {
            let { s } = decomposed;
            s = saturate(s);
            return recomposeColor(color, { ...decomposed, s });
        }

        case 'rgb': {
            const hsl = rgbToHsl(decomposed.r, decomposed.g, decomposed.b, false);
            hsl.s = saturate(hsl.s);
            const rgb = hslToRgb(hsl.h, hsl.s, hsl.l, false);
            return recomposeColor(color, rgb);
        }

        case 'rgba': {
            const hsla = rgbaToHsla(decomposed.r, decomposed.g, decomposed.b, decomposed.a, false);
            hsla.s = saturate(hsla.s);
            const rgba = hslaToRgba(hsla.h, hsla.s, hsla.l, hsla.a, false);
            return recomposeColor(color, { ...rgba });
        }

        case 'hex': {
            const hsl = hexToHsl(color, false);
            hsl.s = saturate(hsl.s);
            const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l, false);
            return recomposeColor(color, { ...newRgb });
        }

        case 'hex-alpha': {
            const hsla = hexAlphaToHsla(color, false);
            hsla.s = saturate(hsla.s);
            const newRgba = hslaToRgba(hsla.h, hsla.s, hsla.l, hsla.a, false);
            return recomposeColor(color, { ...newRgba });
        }

        case 'lab': {
            const lch = labToLch(decomposed.l, decomposed.a, decomposed.b, false);
            lch.c = Math.min(230, lch.c + lch.c * factor);
            const newLab = lchToLab(lch.l, lch.c, lch.h, false);
            return recomposeColor(color, newLab);
        }

        case 'lch': {
            let { c } = decomposed;
            c = Math.min(230, c + c * factor);
            return recomposeColor(color, { ...decomposed, c });
        }

        default: {
            throw new Error(`Unsupported color format ${color} for saturation`);
        }
    }
}
