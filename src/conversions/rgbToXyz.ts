/**
 * Converts RGB color values to XYZ color space.
 *
 * @param {number} r - The red component, range 0-255.
 * @param {number} g - The green component, range 0-255.
 * @param {number} b - The blue component, range 0-255.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The XYZ color string in the format "xyz(x, y, z)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to XYZ color space.
 *
 * @param {number} r - The red component, range 0-255.
 * @param {number} g - The green component, range 0-255.
 * @param {number} b - The blue component, range 0-255.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{x: number, y: number, z: number}} - The XYZ color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to XYZ color space.
 *
 * @param {number} r - The red component, range 0-255.
 * @param {number} g - The green component, range 0-255.
 * @param {number} b - The blue component, range 0-255.
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {x: number, y: number, z: number}} - The XYZ color string in the format "xyz(x, y, z)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToXyz(r: number, g: number, b: number, asString?: true): string;
export function rgbToXyz(r: number, g: number, b: number, asString?: false): { x: number; y: number; z: number };
export function rgbToXyz(r: number, g: number, b: number, asString: boolean = true): string | { x: number; y: number; z: number } {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`Invalid RGB color value ${r}, ${g}, ${b}`);
    }

    const normalize = (value: number) => {
        value = value / 255;
        return value > 0.04045 ? Math.pow((value + 0.055) / 1.055, 2.4) : value / 12.92;
    };

    const nr = normalize(r);
    const ng = normalize(g);
    const nb = normalize(b);

    const x = (nr * 0.4124564 + ng * 0.3575761 + nb * 0.1804375) * 100;
    const y = (nr * 0.2126729 + ng * 0.7151522 + nb * 0.0721750) * 100;
    const z = (nr * 0.0193339 + ng * 0.1191920 + nb * 0.9503041) * 100;

    const roundTo = (num: number, precision: number) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    if (asString) {
        return `xyz(${roundTo(x, 2)}, ${roundTo(y, 2)}, ${roundTo(z, 2)})`;
    }

    return {
        x: roundTo(x, 2),
        y: roundTo(y, 2),
        z: roundTo(z, 2),
    };
}
