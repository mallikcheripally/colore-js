/**
 * Converts a HEX color string to an HSL color string.
 *
 * @param {string} hex - The HEX color string.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSL color string in the format "hsl(h, s%, l%)".
 */
/**
 * Converts a HEX color string to an HSL color string.
 *
 * @param {string} hex - The HEX color string.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{h: number; s: number; l: number}} - The HSL color as an object.
 */
/**
 * Converts a HEX color string to an HSL color string.
 *
 * @param {string} hex - The HEX color string.
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; l: number}} - The HSL color string in the format "hsl(h, s%, l%)" or in object format.
 */
export function hexToHsl(hex: string, asString?: true): string;
export function hexToHsl(hex: string, asString?: false): { h: number; s: number; l: number };
export function hexToHsl(hex: string, asString: boolean = true): string | { h: number; s: number; l: number } {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        throw new Error('Invalid HEX color.');
    }

    let r = 0,
        g = 0,
        b = 0;

    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h = 0,
        s = 0,
        l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    if (asString) {
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    return { h, s, l };
}
