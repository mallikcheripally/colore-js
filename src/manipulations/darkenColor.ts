import { detectColorFormat } from '@/parser/detectColorFormat';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToXyz } from '@/conversions/rgbToXyz';
import { decomposeColor } from '@/parser/decomposeColor';

/**
 * Darkens a given color by a specified amount.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to darken the color (0-100).
 * @returns {string} - The darkened color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function darkenColor(color: string, amount: number): string {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const format = detectColorFormat(color);
    const factor = amount / 100;
    const darken = (value: number, unit?: string) => {
        let intValue = unit === '%' ? (value / 100) * 255 : value;
        intValue = Math.max(0, Math.round(intValue - intValue * factor));
        return unit === '%' ? (intValue / 255) * 100 : intValue;
    };
    const decomposed = decomposeColor(color);

    switch (format) {
        case 'hsl': {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'hsla': {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'lab': {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'lch': {
            let { l } = decomposed;
            l = Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'rgb': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
            });
        }

        case 'rgba': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
            });
        }

        case 'hex': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, { r: darken(r, rUnit), g: darken(g, gUnit), b: darken(b, bUnit) });
        }

        case 'hex-alpha': {
            const { r, rUnit, g, gUnit, b, bUnit, a, aUnit } = decomposed;
            return recomposeColor(color, {
                r: darken(r, rUnit),
                g: darken(g, gUnit),
                b: darken(b, bUnit),
                a,
                aUnit,
            });
        }

        case 'xyz': {
            const decomposed = parseColorToRgba(color);
            return rgbToXyz(darken(decomposed.r), darken(decomposed.g), darken(decomposed.b));
        }

        case 'named': {
            const decomposed = parseColorToRgba(color);
            return recomposeColor(color, {
                r: darken(decomposed.r),
                g: darken(decomposed.g),
                b: darken(decomposed.b),
            });
        }

        default: {
            throw new Error(`Invalid color format ${color}`);
        }
    }
}
