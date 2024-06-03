import { isValidXyz } from '@/validations/isValidXyz';
import { xyzRegex } from '@/utils/regex';

/**
 * Parses an XYZ color string and returns the corresponding XYZ values.
 *
 * @param {string} color - The XYZ color string in the format "xyz(x, y, z)".
 * @returns {{ x: number; y: number; z: number; }} - An object containing XYZ values
 * @throws {Error} Throws an error if the color format is invalid.
 */
export function parseXyz(color: string): { x: number; y: number; z: number; } {
    const match = color.match(xyzRegex);

    if (!match || !isValidXyz(color)) {
        throw new Error('Invalid XYZ color format');
    }

    return {
        x: parseFloat(match[1]),
        y: parseFloat(match[3]),
        z: parseFloat(match[5])
    };
}
