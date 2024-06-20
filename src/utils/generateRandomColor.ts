import { rgbToHex } from '@/conversions/rgbToHex';
import { rgbaToHexAlpha } from '@/conversions/rgbaToHexAlpha';
import { rgbToHsl } from '@/conversions/rgbToHsl';
import { rgbaToHsla } from '@/conversions/rgbaToHsla';
import { rgbToLab } from '@/conversions/rgbToLab';
import { rgbToLch } from '@/conversions/rgbToLch';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Generates a random color in the specified format.
 *
 * @param {ColorFormat} format - The desired color format (default is RGB).
 * @param {true} asString - Whether to return the result as a string.
 * @returns {string} - The generated random color.
 * @throws {Error} - Throws an error if the color format is unsupported.
 */
/**
 * Generates a random color in the specified format.
 *
 * @param {ColorFormat} format - The desired color format (default is RGB).
 * @param {false} asString - Whether to return the result as an object.
 * @returns {object} - The generated random color.
 * @throws {Error} - Throws an error if the color format is unsupported.
 */
/**
 * Generates a random color in the specified format.
 *
 * @param {ColorFormat} format - The desired color format (default is RGB).
 * @param {boolean} asString - Whether to return the color as a string (default is true).
 * @returns {string | object} - The generated random color.
 * @throws {Error} - Throws an error if the color format is unsupported.
 */
export function generateRandomColor(format: ColorFormat, asString?: true): string;
export function generateRandomColor(format: ColorFormat, asString?: false): Object;
export function generateRandomColor(format: ColorFormat = ColorFormats.RGB, asString: boolean = true): string | Object {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);

    switch (format) {
        case ColorFormats.HEX:
            return rgbToHex(r, g, b);
        case ColorFormats.HEX_ALPHA:
            return rgbaToHexAlpha(r, g, b, parseFloat(a));
        case ColorFormats.RGB:
            return asString ? `rgb(${r}, ${g}, ${b})` : { r, g, b };
        case ColorFormats.RGBA:
            return asString ? `rgba(${r}, ${g}, ${b}, ${a})` : { r, g, b, a: parseFloat(a) };
        case ColorFormats.HSL:
            // @ts-ignore
            return rgbToHsl(r, g, b, asString);
        case ColorFormats.HSLA:
            // @ts-ignore
            return rgbaToHsla(r, g, b, parseFloat(a), asString);
        case ColorFormats.LAB:
            // @ts-ignore
            return rgbToLab(r, g, b, asString);
        case ColorFormats.LCH:
            // @ts-ignore
            return rgbToLch(r, g, b, asString);
        default:
            throw new Error(`Unsupported color format: ${format}`);
    }
}
