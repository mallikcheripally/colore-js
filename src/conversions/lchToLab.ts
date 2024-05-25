/**
 * Converts LCH color values to LAB color values.
 *
 * @param {number} l - The lightness value (0 to 100).
 * @param {number} c - The chroma value.
 * @param {number} h - The hue value (0 to 360).
 * @returns {number[]} - The LAB representation of the color.
 */
export function lchToLab(l: number, c: number, h: number): [number, number, number] {
    const hr = (h / 360) * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
}
