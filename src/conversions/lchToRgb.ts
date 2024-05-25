import { labToRgb } from '@/conversions/labToRgb';
import { lchToLab } from '@/conversions/lchToLab';

/**
 * Converts LCH color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @returns {object} - The RGB representation of the color.
 */
export function lchToRgb(l: number, c: number, h: number): { r: number, g: number, b: number } {
    const [labL, labA, labB] = lchToLab(l, c, h);
    return labToRgb(labL, labA, labB);
}
