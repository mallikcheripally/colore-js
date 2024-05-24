/**
 * Converts a hex color to HSV.
 *
 * @param {string} hex - The hex color string.
 * @returns {string} The HSV color string in the format "hsv(h, s%, v%)".
 */
export function hexToHsv(hex: string): string {
    // Remove the hash at the start if it's there
    const sanitizedHex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    const r = parseInt(sanitizedHex.substring(0, 2), 16) / 255;
    const g = parseInt(sanitizedHex.substring(2, 4), 16) / 255;
    const b = parseInt(sanitizedHex.substring(4, 6), 16) / 255;

    // Find the maximum and minimum values of r, g, and b
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        switch (max) {
            case r:
                h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                h = ((b - r) / delta + 2) * 60;
                break;
            case b:
                h = ((r - g) / delta + 4) * 60;
                break;
        }
    }

    const s = max === 0 ? 0 : (delta / max) * 100;
    const v = max * 100;

    return `hsv(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(v)}%)`;
}
