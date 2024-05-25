/**
 * Converts LAB color values to XYZ color space.
 *
 * @param {number} l - The lightness component.
 * @param {number} a - The a component.
 * @param {number} b - The b component.
 * @returns {[number, number, number]} - The corresponding XYZ values.
 */
export function labToXyz(l: number, a: number, b: number): [number, number, number] {
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

    return [x, y, z];
}
