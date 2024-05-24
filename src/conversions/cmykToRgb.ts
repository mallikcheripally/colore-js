/**
 * Converts CMYK color values to RGB values.
 *
 * @param {number} c - The cyan value (0-100).
 * @param {number} m - The magenta value (0-100).
 * @param {number} y - The yellow value (0-100).
 * @param {number} k - The key (black) value (0-100).
 * @returns {string} The RGB color string in the format "rgb(r, g, b)".
 */
export function cmykToRgb(c: number, m: number, y: number, k: number): string {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
