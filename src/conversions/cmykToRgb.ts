/**
 * Converts CMYK color values to RGB values.
 *
 * @param {number} c - The cyan value (0-100).
 * @param {number} m - The magenta value (0-100).
 * @param {number} y - The yellow value (0-100).
 * @param {number} k - The key (black) value (0-100).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGB color string in the format "rgb(r, g, b)".
 */
/**
 * Converts CMYK color values to RGB values.
 *
 * @param {number} c - The cyan value (0-100).
 * @param {number} m - The magenta value (0-100).
 * @param {number} y - The yellow value (0-100).
 * @param {number} k - The key (black) value (0-100).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{r: number; g: number; b: number}} - The RGB color as an object.
 */
/**
 * Converts CMYK color values to RGB values.
 *
 * @param {number} c - The cyan value (0-100).
 * @param {number} m - The magenta value (0-100).
 * @param {number} y - The yellow value (0-100).
 * @param {number} k - The key (black) value (0-100).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number; g: number; b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format.
 */
export function cmykToRgb(c: number, m: number, y: number, k: number, asString?: true): string;
export function cmykToRgb(c: number, m: number, y: number, k: number, asString?: false): { r: number; g: number; b: number };
export function cmykToRgb(c: number, m: number, y: number, k: number, asString: boolean = true): string | { r: number; g: number; b: number } {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);

    if (asString) {
        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }

    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}
