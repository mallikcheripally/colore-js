import { roundTo } from '@/utils/colorUtils';

/**
 * Converts LAB color values to LCH color values.
 *
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The a* axis value (-128 to 127).
 * @param {number} b - The b* axis value (-128 to 127).
 * @param {true} [asString=true] - Whether to return the result as a string
 * @returns {string} - The LCH color string in the format "lcg(l, c, h)"
 * @throws {Error} - Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to LCH color values.
 *
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The a* axis value (-128 to 127).
 * @param {number} b - The b* axis value (-128 to 127).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{l: number; c: number; h: number}} - The LCH color in object format
 * @throws {Error} - Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to LCH color values.
 *
 * @param {number} l - The lightness value (0-100).
 * @param {number} a - The a* axis value (-128 to 127).
 * @param {number} b - The b* axis value (-128 to 127).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {l: number; c: number; h: number}} - The LCH color string in the format "lcg(l, c, h)" or in object format
 * @throws {Error} - Throws an error if any of the color values are out of range.
 */
export function labToLch(l: number, a: number, b: number, asString?: true): string;
export function labToLch(l: number, a: number, b: number, asString?: false): { l: number; c: number; h: number };
export function labToLch(
    l: number,
    a: number,
    b: number,
    asString: boolean = true,
): string | { l: number; c: number; h: number } {
    if (l < 0 || l > 100 || a < -128 || a > 127 || b < -128 || b > 127) {
        throw new Error(`Invalid LAB color values ${l}, ${a}, ${b}`);
    }

    const c = Math.sqrt(a * a + b * b);
    let h = Math.atan2(b, a) * (180 / Math.PI);

    if (h < 0) {
        h += 360;
    }

    if (asString) {
        return `lch(${roundTo(l, 5)}, ${roundTo(c, 5)}, ${roundTo(h, 5)})`;
    }

    return {
        l: roundTo(l, 5),
        c: roundTo(c, 5),
        h: roundTo(h, 5),
    };
}
