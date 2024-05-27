/**
 * Converts RGB color values to HSV values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; v: number}} - The HSV color string in the format "hsv(h, s%, v%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to HSV values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | {h: number; s: number; v: number}} - The HSV color string in the format "hsv(h, s%, v%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to HSV values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; v: number}} - The HSV color string in the format "hsv(h, s%, v%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToHsv(r: number, g: number, b: number, asString?: true): string;
export function rgbToHsv(r: number, g: number, b: number, asString?: false): {h: number; s: number; v: number};
export function rgbToHsv(r: number, g: number, b: number, asString: boolean = true): string | {h: number; s: number; v: number} {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`Invalid RGB color value ${r}, ${g}, ${b}`);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        switch (max) {
            case r:
                h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                h = ((b - r) / delta + 2) * 60;
                break;
            case b:
                h = ((r - g) / delta + 4) * 60;
                break;
        }
    }

    const s = max === 0 ? 0 : (delta / max) * 100;
    const v = max * 100;

    if (asString) {
        return `hsv(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(v)}%)`;
    }

    return { h: Math.round(h), s: Math.round(s), v: Math.round(v)};
}
