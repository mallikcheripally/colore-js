import { hexAlphaToRgba } from './hexAlphaToRgba';
import { rgbToHsl } from './rgbToHsl';
import {isValidHexAlpha} from "@/validations/isValidHexAlpha";

/**
 * Converts a HEX color with alpha to HSLA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSLA color as a string
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to HSLA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{ h: number; s: number; l: number; a: number; }} - The HSLA color as an object.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to HSLA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | { h: number; s: number; l: number; a: number; }} - The HSLA color components.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function hexAlphaToHsla(hex: string, asString?: true): string;
export function hexAlphaToHsla(hex: string, asString?: false): { h: number; s: number; l: number; a: number };
export function hexAlphaToHsla(hex: string, asString: boolean = true): string | { h: number; s: number; l: number; a: number } {
    if (!isValidHexAlpha(hex)) {
        throw new Error(`Invalid HEX color ${hex}`);
    }

    const { r, g, b, a } = hexAlphaToRgba(hex, false);
    const { h, s, l } = rgbToHsl(r, g, b, false);

    if (asString) {
        return `hsla(${h}, ${s}, ${l}, ${a})`;
    }

    return { h, s, l, a };
}
