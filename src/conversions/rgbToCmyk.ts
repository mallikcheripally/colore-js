/**
 * Converts RGB color values to CMYK values.
 *
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @returns {string} The CMYK color string in the format "cmyk(c, m, y, k)".
 */
export function rgbToCmyk(r: number, g: number, b: number): string {
    if (r === 0 && g === 0 && b === 0) {
        return 'cmyk(0, 0, 0, 100)';
    }

    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const minCMY = Math.min(c, m, y);

    const cmykC = ((c - minCMY) / (1 - minCMY)) * 100;
    const cmykM = ((m - minCMY) / (1 - minCMY)) * 100;
    const cmykY = ((y - minCMY) / (1 - minCMY)) * 100;
    const cmykK = minCMY * 100;

    return `cmyk(${Math.round(cmykC)}, ${Math.round(cmykM)}, ${Math.round(cmykY)}, ${Math.round(cmykK)})`;
}
