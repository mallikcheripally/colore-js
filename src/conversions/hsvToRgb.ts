/**
 * Converts HSV color values to RGB values.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number, g: number, b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 * */
/**
 * Converts HSV color values to RGB values.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | {r: number, g: number, b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 * */
/**
 * Converts HSV color values to RGB values.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} v - The value (brightness) value (0-100).
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {r: number, g: number, b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 * */
export function hsvToRgb(h: number, s: number, v: number, asString?: true): string;
export function hsvToRgb(h: number, s: number, v: number, asString?: false): { r: number, g: number; b: number };
export function hsvToRgb(h: number, s: number, v: number, asString: boolean = true): string | { r: number, g: number; b: number } {
    if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100) {
        throw new Error(`Invalid HSL color value ${h}, ${s}, ${v}`);
    }

    if (h === 360) {
        h = h % 360;
    }

    s /= 100;
    v /= 100;

    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;

    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    if (asString) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    return { r, g, b };
}
