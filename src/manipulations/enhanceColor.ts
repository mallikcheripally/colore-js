import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { getLuminance } from '@/analysis/getLuminance';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import { parseColorToRgba } from '@/parser/parseColorToRgba';

/**
 * Enhances a given color by lightening or darkening it based on its luminance.
 *
 * @param {string} color - The input color string in any supported format (hex, rgb, hsl, etc.).
 * @param {number} amount - The amount to lighten or darken the color (0-100).
 * @returns {string | undefined} - The enhanced color in the original format.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function enhanceColor(color: string, amount: number): string | undefined {
    if (amount < 0 || amount > 100) {
        throw new Error(`Invalid amount ${amount}. Amount should be between 0 and 100.`);
    }

    const luminanceThreshold = 0.5;
    const format: ColorFormat = detectColorFormat(color);
    const luminance = getLuminance(color);
    const factor = amount / 100;
    const adjust = (value: number, isLighten: boolean, unit?: string) => {
        let intValue = unit === '%' ? (value / 100) * 255 : value;
        intValue = isLighten
            ? Math.min(255, Math.round(intValue + (255 - intValue) * factor))
            : Math.max(0, Math.round(intValue * (1 - factor)));
        return unit === '%' ? (intValue / 255) * 100 : intValue;
    };

    const decomposed = decomposeColor(color);
    const isLighten = luminance < luminanceThreshold;

    switch (format) {
        case ColorFormats.HSL: {
            let { l } = decomposed;
            l = isLighten ? Math.min(100, l + amount) : Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.HSLA: {
            let { l } = decomposed;
            l = isLighten ? Math.min(100, l + amount) : Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.LAB: {
            let { l } = decomposed;
            l = isLighten ? Math.min(100, l + amount) : Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.LCH: {
            let { l } = decomposed;
            l = isLighten ? Math.min(100, l + amount) : Math.max(0, l - amount);
            return recomposeColor(color, { ...decomposed, l });
        }

        case ColorFormats.RGB: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: adjust(r, isLighten, rUnit),
                g: adjust(g, isLighten, gUnit),
                b: adjust(b, isLighten, bUnit),
            });
        }

        case ColorFormats.RGBA: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                ...decomposed,
                r: adjust(r, isLighten, rUnit),
                g: adjust(g, isLighten, gUnit),
                b: adjust(b, isLighten, bUnit),
            });
        }

        case ColorFormats.HEX: {
            const { r, rUnit, g, gUnit, b, bUnit } = decomposed;
            return recomposeColor(color, {
                r: adjust(r, isLighten, rUnit),
                g: adjust(g, isLighten, gUnit),
                b: adjust(b, isLighten, bUnit),
            });
        }

        case ColorFormats.HEX_ALPHA: {
            const { r, rUnit, g, gUnit, b, bUnit, a, aUnit } = decomposed;
            return recomposeColor(color, {
                r: adjust(r, isLighten, rUnit),
                g: adjust(g, isLighten, gUnit),
                b: adjust(b, isLighten, bUnit),
                a,
                aUnit,
            });
        }

        case ColorFormats.NAMED: {
            const rgba = parseColorToRgba(color);
            return recomposeColor(color, {
                r: adjust(rgba.r, isLighten),
                g: adjust(rgba.g, isLighten),
                b: adjust(rgba.b, isLighten),
            });
        }
    }
}
