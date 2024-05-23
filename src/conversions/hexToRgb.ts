/**
 * Converts a HEX color string to an RGB color string.
 *
 * This function takes a hexadecimal color string (either in shorthand form "#RGB" or
 * full form "#RRGGBB") and converts it to the equivalent RGB color string.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @returns {string} The RGB color string in the format "rgb(r, g, b)".
 * @throws {Error} Throws an error if the provided string is not a valid HEX color.
 *
 * @example
 * // Convert full form hex color to RGB
 * hexToRgb("#ff0000"); // Returns "rgb(255, 0, 0)"
 *
 * @example
 * // Convert shorthand hex color to RGB
 * hexToRgb("#03F"); // Returns "rgb(0, 51, 255)"
 */
export function hexToRgb(hex: string): string {
    // Validate hex input
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        throw new Error('Invalid HEX color.');
    }

    // Remove the hash symbol if present
    hex = hex.slice(1);

    // Expand shorthand form (e.g., "03F") to full form (e.g., "0033FF")
    const hexLength = hex.length;
    if (hexLength === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Parse the hex string to RGB values
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return `rgb(${r}, ${g}, ${b})`;
}
