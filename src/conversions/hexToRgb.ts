import { isValidHex } from "@/validations/isValidHex";

/**
 * Converts a HEX color string to an RGB color string.
 *
 * This function takes a hexadecimal color string (either in shorthand form "#RGB" or
 * full form "#RRGGBB") and converts it to the equivalent RGB color string.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGB color string in the format "rgb(r, g, b)".
 * @throws {Error} Throws an error if the provided string is not a valid HEX color.
 */
/**
 * Converts a HEX color string to an RGB color string.
 *
 * This function takes a hexadecimal color string (either in shorthand form "#RGB" or
 * full form "#RRGGBB") and converts it to the equivalent RGB color string.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{r: number; g: number; b: number}} - The RGB color as an object.
 * @throws {Error} Throws an error if the provided string is not a valid HEX color.
 */
/**
 * Converts a HEX color string to an RGB color string.
 *
 * This function takes a hexadecimal color string (either in shorthand form "#RGB" or
 * full form "#RRGGBB") and converts it to the equivalent RGB color string.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {r: number; g: number; b: number}} - The RGB color string in the format "rgb(r, g, b)" or in object format.
 * @throws {Error} Throws an error if the provided string is not a valid HEX color.
 */
export function hexToRgb(hex: string, asString?: true): string;
export function hexToRgb(hex: string, asString?: false): { r: number; g: number; b: number };
export function hexToRgb(hex: string, asString: boolean = true): string | { r: number; g: number; b: number } {
    if (!isValidHex(hex)) {
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

    if (asString) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    return { r, g, b };
}
