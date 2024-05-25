/**
 * Converts XYZ color values to RGB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @returns {[number, number, number]} - The corresponding RGB values.
 */
export function xyzToRgb(x: number, y: number, z: number): [number, number, number] {
    x /= 100;
    y /= 100;
    z /= 100;

    let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    let b = x * 0.0557 + y * -0.2040 + z * 1.0570;

    r = r > 0.0031308 ? 1.055 * (r ** (1 / 2.4)) - 0.055 : 12.92 * r;
    g = g > 0.0031308 ? 1.055 * (g ** (1 / 2.4)) - 0.055 : 12.92 * g;
    b = b > 0.0031308 ? 1.055 * (b ** (1 / 2.4)) - 0.055 : 12.92 * b;

    r = Math.max(0, Math.min(1, r));
    g = Math.max(0, Math.min(1, g));
    b = Math.max(0, Math.min(1, b));

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
