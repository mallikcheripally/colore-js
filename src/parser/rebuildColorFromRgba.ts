import { detectColorFormat } from '@/parser/detectColorFormat';
import { rgbToHex } from '@/conversions/rgbToHex';
import { rgbaToHexAlpha } from '@/conversions/rgbaToHexAlpha';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';
import { rgbToLab } from '@/conversions/rgbToLab';
import { rgbToLch } from '@/conversions/rgbToLch';

/**
 * Converts RGBA components back to the original color format.
 *
 * @param {string} originalColor - The original color string.
 * @param {object} rgba - The RGBA components of the color.
 * @param {number} rgba.r - The red component (0-255).
 * @param {number} rgba.g - The green component (0-255).
 * @param {number} rgba.b - The blue component (0-255).
 * @param {number} rgba.a - The alpha component (0-1).
 * @returns {string} The color string in the original format.
 * @throws {Error} Throws an error if the color format is unsupported.
 */
export function rebuildColorFromRgba(
    originalColor: string,
    rgba: { r: number; g: number; b: number; a: number },
): string {
    const format: ColorFormat = detectColorFormat(originalColor);

    switch (format) {
        case ColorFormats.HEX: {
            return rgbToHex(rgba.r, rgba.g, rgba.b);
        }

        case ColorFormats.HEX_ALPHA: {
            return rgbaToHexAlpha(rgba.r, rgba.g, rgba.b, rgba.a);
        }

        case ColorFormats.RGB: {
            return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;
        }

        case ColorFormats.RGBA: {
            return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
        }

        case ColorFormats.HSL: {
            const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b, false);
            return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
        }

        case ColorFormats.HSLA: {
            const hsla = rgbaToHsla(rgba.r, rgba.g, rgba.b, rgba.a, false);
            return `hsla(${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a})`;
        }

        case ColorFormats.LAB: {
            const lab = rgbToLab(rgba.r, rgba.g, rgba.b);
            return lab;
        }

        case ColorFormats.LCH: {
            const lch = rgbToLch(rgba.r, rgba.g, rgba.b);
            return lch;
        }

        default:
            throw new Error(`Unsupported color format: ${format}`);
    }
}
