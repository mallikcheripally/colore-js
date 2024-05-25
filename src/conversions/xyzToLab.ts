/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @returns {[number, number, number]} - The corresponding LAB values.
 */
export function xyzToLab(x: number, y: number, z: number): [number, number, number] {
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

    return [l, a, b];
}
