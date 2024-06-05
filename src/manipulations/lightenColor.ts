import { detectColorFormat } from '@/parser/detectColorFormat';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { recomposeColor } from '@/parser/recomposeColor';
import { rgbToXyz } from '@/conversions/rgbToXyz';
import { decomposeColor } from '@/parser/decomposeColor';

/**
 * Lightens a given color by a specified amount.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to lighten the color (0-100).
 * @returns {string} - The lightened color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function lightenColor(color: string, amount: number): string {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const format = detectColorFormat(color);
    const factor = amount / 100;
    const lighten = (value: number, unit?: string) => {
        let intValue = unit === '%' ? (value / 100) * 255 : value;
        intValue = Math.min(255, Math.round(intValue + (255 - intValue) * factor));
        return unit === '%' ? (intValue / 255) * 100 : intValue;
    };
    const decomposed = decomposeColor(color);

    switch (format) {
        case 'hsl': {
            let { l } = decomposed;
            l = Math.min(100, l + amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'hsla': {
            let { l } = decomposed;
            l = Math.min(100, l + amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'lab': {
            let { l } = decomposed;
            l = Math.min(100, l + amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'lch': {
            let { l } = decomposed;
            l = Math.min(100, l + amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case 'rgb': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: lighten(r, rUnit),
                g: lighten(g, gUnit),
                b: lighten(b, bUnit),
            });
        }

        case 'rgba': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: lighten(r, rUnit),
                g: lighten(g, gUnit),
                b: lighten(b, bUnit),
            });
        }

        case 'hex': {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, { r: lighten(r, rUnit), g: lighten(g, gUnit), b: lighten(b, bUnit) });
        }

        case 'hex-alpha': {
            const { r, rUnit, g, gUnit, b, bUnit, a, aUnit } = decomposed;
            return recomposeColor(color, {
                r: lighten(r, rUnit),
                g: lighten(g, gUnit),
                b: lighten(b, bUnit),
                a,
                aUnit,
            });
        }

        case 'xyz': {
            const decomposed = parseColorToRgba(color);
            return rgbToXyz(lighten(decomposed.r), lighten(decomposed.g), lighten(decomposed.b));
        }

        case 'named': {
            const decomposed = parseColorToRgba(color);
            return recomposeColor(color, {
                r: lighten(decomposed.r),
                g: lighten(decomposed.g),
                b: lighten(decomposed.b),
            });
        }

        default: {
            throw new Error(`Invalid color format ${color}`);
        }
    }
}
