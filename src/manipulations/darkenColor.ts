import { detectColorFormat } from '@/parser/detectColorFormat';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToXyz } from '@/conversions/rgbToXyz';
import { decomposeColor } from '@/parser/decomposeColor';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Darkens a given color by a specified amount.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to darken the color (0-100).
 * @returns {string | undefined} - The darkened color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function darkenColor(color: string, amount: number): string | undefined {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const format: ColorFormat = detectColorFormat(color);
    const factor = amount / 100;
    const darken = (value: number, unit?: string) => {
        let intValue = unit === '%' ? (value / 100) * 255 : value;
        intValue = Math.max(0, Math.round(intValue - intValue * factor));
        return unit === '%' ? (intValue / 255) * 100 : intValue;
    };
    const decomposed = decomposeColor(color);

    switch (format) {
        case ColorFormats.HSL: {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.HSLA: {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.LAB: {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.LCH: {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.RGB: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
            });
        }

        case ColorFormats.RGBA: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
            });
        }

        case ColorFormats.HEX: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, { r: darken(r, rUnit), g: darken(g, gUnit), b: darken(b, bUnit) });
        }

        case ColorFormats.HEX_ALPHA: {
            const { r, rUnit, g, gUnit, b, bUnit, a, aUnit } = decomposed;
            return recomposeColor(color, {
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
                a,
                aUnit,
            });
        }

        case ColorFormats.XYZ: {
            const decomposed = parseColorToRgba(color);
            return rgbToXyz(darken(decomposed.r), darken(decomposed.g), darken(decomposed.b));
        }

        case ColorFormats.NAMED: {
            const decomposed = parseColorToRgba(color);
            return recomposeColor(color, {
                r: darken(decomposed.r),
                g: darken(decomposed.g),
                b: darken(decomposed.b),
            });
        }
    }
}
