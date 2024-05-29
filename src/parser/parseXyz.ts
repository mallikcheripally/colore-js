import {isValidXyz} from "@/validations/isValidXyz";

/**
 * Parses an XYZ color string and returns the corresponding XYZ values.
 *
 * @param {string} color - The XYZ color string in the format "xyz(x, y, z)".
 * @returns {[number, number, number]} - The parsed XYZ values.
 * @throws {Error} Throws an error if the color format is invalid.
 */
export function parseXyz(color: string): [number, number, number] {
    const xyzRegex = /^xyz\(\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*\)$/;
    const match = color.match(xyzRegex);

    if (!match || !isValidXyz(color)) {
        throw new Error('Invalid XYZ color format');
    }

    return [
        parseFloat(match[1]),
        parseFloat(match[3]),
        parseFloat(match[5])
    ];
}
