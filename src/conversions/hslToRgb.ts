/**
 * Converts HSL color values to an RGB color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent RGB (Red, Green, Blue) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGB color string in the format "rgb(r, g, b)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSL color values to an RGB color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent RGB (Red, Green, Blue) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{r: number, g: number, b: number}} - The RGB color string in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts HSL color values to an RGB color string.
 *
 * This function takes hue, saturation, and lightness values and converts them
 * to the equivalent RGB (Red, Green, Blue) color string.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {r: number, g: number, b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function hslToRgb(h: number, s: number, l: number, asString?: true): string;
export function hslToRgb(h: number, s: number, l: number, asString?: false): { r: number; g: number; b: number; };
export function hslToRgb(h: number, s: number, l: number, asString: boolean = true): string | { r: number; g: number; b: number; } {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
        throw new Error(`Invalid HSL color value ${h}, ${s}, ${l}`);
    }

    if (h === 360) {
        h = h % 360;
    }

    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    if (asString) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    return { r, g, b };
}
