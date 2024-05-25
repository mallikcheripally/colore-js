import { xyzToRgb } from '@/conversions/xyzToRgb';
import { labToXyz } from '@/conversions/labToXyz';

/**
 * Converts LAB color values to RGB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} a - The a* value (-128 to 127).
 * @param {number} b - The b* value (-128 to 127).
 * @returns {object} - The RGB representation of the color.
 */
export function labToRgb(l: number, a: number, b: number): { r: number, g: number, b: number } {
    const [x, y, z] = labToXyz(l, a, b);
    const [r, g, bVal] = xyzToRgb(x, y, z);
    return { r, g, b: bVal };
}
