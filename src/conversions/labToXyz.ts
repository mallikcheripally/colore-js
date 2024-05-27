/**
 * Converts LAB color values to XYZ color space.
 *
 * @param {number} l - The lightness component.
 * @param {number} a - The a component.
 * @param {number} b - The b component.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The XYZ color string in the format "xyz(x, y, z)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to XYZ color space.
 *
 * @param {number} l - The lightness component.
 * @param {number} a - The a component.
 * @param {number} b - The b component.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {x: number, y: number, z: number} - The XYZ color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts LAB color values to XYZ color space.
 *
 * @param {number} l - The lightness component.
 * @param {number} a - The a component.
 * @param {number} b - The b component.
 * @param {boolean} [asString=true] - Whether to return the result as a string
 * @returns {string | {x: number, y: number, z: number}} - The XYZ color string in the format "xyz(x, y, z)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function labToXyz(l: number, a: number, b: number, asString?: true): string;
export function labToXyz(l: number, a: number, b: number, asString?: false): { x: number; y: number; z: number };
export function labToXyz(
    l: number,
    a: number,
    b: number,
    asString: boolean = true,
): string | { x: number; y: number; z: number } {
    if (l < 0 || l > 100 || a < -128 || a > 127 || b < -128 || b > 127) {
        throw new Error(`Invalid LAB color value ${l}, ${a},${b}`);
    }

    // Reference values for D65 illuminant
    const refX = 95.047;
    const refY = 100.0;
    const refZ = 108.883;

    let y = (l + 16) / 116;
    let x = a / 500 + y;
    let z = y - b / 200;

    const y3 = Math.pow(y, 3);
    const x3 = Math.pow(x, 3);
    const z3 = Math.pow(z, 3);

    y = y3 > 0.008856 ? y3 : (y - 16 / 116) / 7.787;
    x = x3 > 0.008856 ? x3 : (x - 16 / 116) / 7.787;
    z = z3 > 0.008856 ? z3 : (z - 16 / 116) / 7.787;

    x *= refX;
    y *= refY;
    z *= refZ;

    const roundTo = (num: number, precision: number = 2) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    if (asString) {
        return `xyz(${x}, ${roundTo(y)}, ${roundTo(z)}`;
    }

    return {
        x: roundTo(x),
        y: roundTo(y),
        z: roundTo(z)
    };
}
