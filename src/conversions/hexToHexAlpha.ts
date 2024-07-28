import { isValidHex } from "@/validations/isValidHex";

/**
 * Converts a HEX color string to a HEX color string with alpha.
 *
 * This function takes a hexadecimal color string (either in shorthand form "#RGB" or
 * full form "#RRGGBB") and converts it to the equivalent HEX color string with alpha.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @param {number} alpha - The alpha value (0-1).
 * @returns {string} - The HEX color string with alpha in the format "#RRGGBBAA".
 * @throws {Error} Throws an error if the provided string is not a valid HEX color.
 */
export function hexToHexAlpha(hex: string, alpha: number): string {
    if (!isValidHex(hex)) {
        throw new Error(`Invalid HEX color ${hex}`);
    }

    if (alpha < 0 || alpha > 1) {
        throw new Error(`Invalid alpha value ${alpha}`);
    }

    // Remove the hash symbol if present
    hex = hex.slice(1);

    const hexLength = hex.length;
    if (hexLength === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');

    return `#${hex}${alphaHex}`;
}
