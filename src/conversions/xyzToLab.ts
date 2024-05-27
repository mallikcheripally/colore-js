/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The LAB color string in the format "lab(l, a, b)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns { l: number; a: number; b: number; } - The LAB color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | { l: number; a: number; b: number; }} - The LAB color string in the format "lab(l, a, b)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function xyzToLab(x: number, y: number, z: number, asString?: true): string;
export function xyzToLab(x: number, y: number, z: number, asString?: false): { l: number; a: number; b: number; };
export function xyzToLab(x: number, y: number, z: number, asString: boolean = true): string | { l: number; a: number; b: number; } {
    if (x < 0 || y < 0 || z < 0) {
        throw new Error(`Invalid XYZ color value ${x}, ${y}, ${z}`);
    }

    // Reference values for D65 illuminant
    const refX = 95.047;
    const refY = 100.000;
    const refZ = 108.883;

    x = x / refX;
    y = y / refY;
    z = z / refZ;

    x = x > 0.008856 ? Math.cbrt(x) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.cbrt(y) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.cbrt(z) : (7.787 * z) + (16 / 116);

    const l = (116 * y) - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);

    const roundTo = (num: number, precision: number = 3) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    if (asString) {
        return `lab(${roundTo(l)}, ${roundTo(a)}, ${roundTo(b)})`;
    }

    return {
        l: roundTo(l),
        a: roundTo(a),
        b: roundTo(b)
    };
}
