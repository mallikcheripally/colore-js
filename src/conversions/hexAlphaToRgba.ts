import {isValidHexAlpha} from "@/validations/isValidHexAlpha";

/**
 * Converts a HEX color with alpha to RGBA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The RGBA color in the string format
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to RGBA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{ r: number; g: number; b: number; a: number; }} - The RGBA color as an object.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to RGBA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | { r: number; g: number; b: number; a: number; }} - The RGBA color components.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function hexAlphaToRgba(hex: string, asString?: true): string;
export function hexAlphaToRgba(hex: string, asString?: false): { r: number; g: number; b: number; a: number; };
export function hexAlphaToRgba(hex: string, asString: boolean = true): string | { r: number; g: number; b: number; a: number } {
    if (!isValidHexAlpha(hex)) {
        throw new Error(`Invalid HEX color ${hex}`);
    }

    let r, g, b, a;

    if (hex.length === 5) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
        a = parseInt(hex[4] + hex[4], 16) / 255;
    } else if (hex.length === 9) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
        a = parseInt(hex[7] + hex[8], 16) / 255;
    }

    if (asString) {
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    // @ts-ignore
    return { r, g, b, a };
}
