import { detectColorFormat } from './detectColorFormat';
import { roundTo } from '@/utils/colorUtils';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Recompose color values into a color string based on the detected format.
 *
 * @param {string} color - The original color string.
 * @param {object} decomposed - The decomposed color object.
 * @returns {string} The recomposed color string.
 * @throws {Error} Throws an error if the color format or values are invalid.
 */
export function recomposeColor(color: string, decomposed: any): string {
    const format: ColorFormat = detectColorFormat(color);

    switch (format) {
        case ColorFormats.HEX:
            return `#${((1 << 24) + (decomposed.r << 16) + (decomposed.g << 8) + decomposed.b).toString(16).slice(1)}`;

        case ColorFormats.HEX_ALPHA:
            const alphaHex = Math.round(decomposed.a * 255)
                .toString(16)
                .padStart(2, '0');
            return `#${((1 << 24) + (decomposed.r << 16) + (decomposed.g << 8) + decomposed.b).toString(16).slice(1)}${alphaHex}`;

        case ColorFormats.RGB:
            return `rgb(${decomposed.r}${decomposed.rUnit || ''}, ${decomposed.g}${decomposed.gUnit || ''}, ${decomposed.b}${decomposed.bUnit || ''})`;

        case ColorFormats.RGBA:
            return `rgba(${decomposed.r}${decomposed.rUnit || ''}, ${decomposed.g}${decomposed.gUnit || ''}, ${decomposed.b}${decomposed.bUnit || ''}, ${decomposed.a}${decomposed.aUnit || ''})`;

        case ColorFormats.HSL:
            return `hsl(${decomposed.h}${decomposed.hUnit || ''}, ${decomposed.s}${decomposed.sUnit || ''}, ${decomposed.l}${decomposed.lUnit || ''})`;

        case ColorFormats.HSLA:
            return `hsla(${decomposed.h}${decomposed.hUnit || ''}, ${decomposed.s}${decomposed.sUnit || ''}, ${decomposed.l}${decomposed.lUnit || ''}, ${decomposed.a}${decomposed.aUnit || ''})`;

        case ColorFormats.LAB:
            return `lab(${decomposed.l}${decomposed.lUnit || ''} ${decomposed.a}${decomposed.aUnit || ''} ${decomposed.b}${decomposed.bUnit || ''}${decomposed.alpha !== undefined ? ` / ${decomposed.alpha}${decomposed.alphaUnit || ''}` : ''})`;

        case ColorFormats.LCH:
            return `lch(${decomposed.l}${decomposed.lUnit || ''} ${decomposed.c}${decomposed.cUnit || ''} ${decomposed.h}${decomposed.hUnit || ''}${decomposed.alpha !== undefined ? ` / ${decomposed.alpha}${decomposed.alphaUnit || ''}` : ''})`;

        case ColorFormats.XYZ:
            return `xyz(${roundTo(decomposed.x, 2)}, ${roundTo(decomposed.y, 2)}, ${roundTo(decomposed.z, 2)})`;

        case ColorFormats.NAMED:
            return `rgb(${decomposed.r}, ${decomposed.g}, ${decomposed.b})`;

        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
