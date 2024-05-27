/**
 * Converts LCH color values to LAB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The LCH color string in the format "lch(l, c, h)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LCH color values to LAB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns { l: number; a: number; b: number;} - The LCH color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LCH color values to LAB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | { l: number; a: number; b: number;}} - The LCH color string in the format "lch(l, c, h)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function lchToLab(l: number, c: number, h: number, asString?: true): string;
export function lchToLab(l: number, c: number, h: number, asString?: false): { l: number; a: number; b: number };
export function lchToLab(
    l: number,
    c: number,
    h: number,
    asString: boolean = true,
): string | { l: number; a: number; b: number } {
    if (l < 0 || l > 100 || c < 0 || h < 0 || h > 360) {
        throw new Error(`Invalid LCH color value ${l}, ${c}, ${h}`);
    }

    const hr = (h / 360) * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);

    const roundTo = (num: number, precision: number = 2) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    if (asString) {
        return `lab(${roundTo(l)}% ${roundTo(a)} ${roundTo(b)})`;
    }

    return {
        l: roundTo(l),
        a: roundTo(a),
        b: roundTo(b)
    };
}
