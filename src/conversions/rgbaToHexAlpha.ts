/**
 * Converts RGBA color values to a HEX color with alpha.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} a - The alpha value (0-1).
 * @returns {string} - The HEX color string with alpha (e.g., #RRGGBBAA).
 * @throws {Error} - Throws an error if the input color values are out of range.
 */
export function rgbaToHexAlpha(r: number, g: number, b: number, a: number): string {
    if (
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255 ||
        a < 0 || a > 1
    ) {
        throw new Error(`Invalid RGBA color values ${r}, ${g}, ${b}, ${a}`);
    }

    const toHex = (value: number) => value.toString(16).padStart(2, '0');
    const alpha = Math.round(a * 255);

    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
}
