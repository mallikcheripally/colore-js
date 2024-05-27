/**
 * Converts XYZ color values to RGB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts XYZ color values to RGB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {r: number; g: number; b: number} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts XYZ color values to RGB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {r: number; g: number; b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function xyzToRgb(x: number, y: number, z: number, asString?: true): string;
export function xyzToRgb(x: number, y: number, z: number, asString?: false): { r: number; g: number; b: number };
export function xyzToRgb(
    x: number,
    y: number,
    z: number,
    asString: boolean = true,
): string | { r: number; g: number; b: number } {
    if (x < 0 || y < 0 || z < 0) {
        throw new Error(`Invalid XYZ color value ${x}, ${y}, ${z}`);
    }

    x /= 100;
    y /= 100;
    z /= 100;

    let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    let b = x * 0.0557 + y * -0.204 + z * 1.057;

    r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r;
    g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g;
    b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b;

    r = Math.max(0, Math.min(1, r));
    g = Math.max(0, Math.min(1, g));
    b = Math.max(0, Math.min(1, b));

    if (asString) {
        return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}
