import { detectColorFormat } from './detectColorFormat';
import { roundTo } from '@/utils/colorUtils';

/**
 * Recompose color values into a color string based on the detected format.
 *
 * @param {string} color - The original color string.
 * @param {object} decomposed - The decomposed color object.
 * @returns {string} The recomposed color string.
 * @throws {Error} Throws an error if the color format or values are invalid.
 */
export function recomposeColor(color: string, decomposed: any): string {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex':
            return `#${((1 << 24) + (decomposed.r << 16) + (decomposed.g << 8) + decomposed.b).toString(16).slice(1)}`;

        case 'hex-alpha':
            const alphaHex = Math.round(decomposed.a * 255).toString(16).padStart(2, '0');
            return `#${((1 << 24) + (decomposed.r << 16) + (decomposed.g << 8) + decomposed.b).toString(16).slice(1)}${alphaHex}`;

        case 'rgb':
            return `rgb(${decomposed.r}${decomposed.rUnit || ''}, ${decomposed.g}${decomposed.gUnit || ''}, ${decomposed.b}${decomposed.bUnit || ''})`;

        case 'rgba':
            return `rgba(${decomposed.r}${decomposed.rUnit || ''}, ${decomposed.g}${decomposed.gUnit || ''}, ${decomposed.b}${decomposed.bUnit || ''}, ${decomposed.a}${decomposed.aUnit || ''})`;

        case 'hsl':
            return `hsl(${decomposed.h}${decomposed.hUnit || ''}, ${decomposed.s}${decomposed.sUnit || ''}, ${decomposed.l}${decomposed.lUnit || ''})`;

        case 'hsla':
            return `hsla(${decomposed.h}${decomposed.hUnit || ''}, ${decomposed.s}${decomposed.sUnit || ''}, ${decomposed.l}${decomposed.lUnit || ''}, ${decomposed.a}${decomposed.aUnit || ''})`;

        case 'lab':
            return `lab(${decomposed.l}${decomposed.lUnit || ''} ${decomposed.a}${decomposed.aUnit || ''} ${decomposed.b}${decomposed.bUnit || ''}${decomposed.alpha !== undefined ? ` / ${decomposed.alpha}${decomposed.alphaUnit || ''}` : ''})`;

        case 'lch':
            return `lch(${decomposed.l}${decomposed.lUnit || ''} ${decomposed.c}${decomposed.cUnit || ''} ${decomposed.h}${decomposed.hUnit || ''}${decomposed.alpha !== undefined ? ` / ${decomposed.alpha}${decomposed.alphaUnit || ''}` : ''})`;

        case 'xyz':
            return `xyz(${roundTo(decomposed.x, 2)}, ${roundTo(decomposed.y, 2)}, ${roundTo(decomposed.z, 2)})`;

        case 'named':
            return `rgb(${decomposed.r}, ${decomposed.g}, ${decomposed.b})`;

        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
