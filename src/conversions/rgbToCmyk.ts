/**
 * Converts RGB color values to CMYK values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} The CMYK color string in the format "cmyk(c, m, y, k)".
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to CMYK values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {object} The CMYK color as an object
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to CMYK values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {c: number; m: number; y: number; k: number}} The CMYK color string in the format "cmyk(c, m, y, k)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToCmyk(r: number, g: number, b: number, asString?: true): string;
export function rgbToCmyk(r: number, g: number, b: number, asString?: false): { c: number, m: number, y: number, k: number };
export function rgbToCmyk(r: number, g: number, b: number, asString: boolean = true): string | { c: number, m: number, y: number, k: number } {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`Invalid RGB values ${r}, ${g}, ${b}`);
    }

    if (r === 0 && g === 0 && b === 0) {
        if (asString) return 'cmyk(0, 0, 0, 100)';
        return {
            c: 0, m: 0, y: 0, k: 100
        }
    }

    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const minCMY = Math.min(c, m, y);

    const cmykC = ((c - minCMY) / (1 - minCMY)) * 100;
    const cmykM = ((m - minCMY) / (1 - minCMY)) * 100;
    const cmykY = ((y - minCMY) / (1 - minCMY)) * 100;
    const cmykK = minCMY * 100;

    if (asString) {
        return `cmyk(${Math.round(cmykC)}, ${Math.round(cmykM)}, ${Math.round(cmykY)}, ${Math.round(cmykK)})`;
    }

    return {
        c: Math.round(cmykC),
        m: Math.round(cmykM),
        y: Math.round(cmykY),
        k: Math.round(cmykK),
    }
}
