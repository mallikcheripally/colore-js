import { hexAlphaToRgba } from './hexAlphaToRgba';
import { rgbToHsv } from './rgbToHsv';
import { isValidHexAlpha } from '@/validations/isValidHexAlpha';

/**
 * Converts a HEX color with alpha to HSVA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The HSVA color as a string
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to HSVA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{ h: number; s: number; v: number; a: number; }} - The HSVA color as an object.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
/**
 * Converts a HEX color with alpha to HSVA.
 *
 * @param {string} hex - The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {{ h: number; s: number; v: number; a: number; }} - The HSVA color components.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function hexAlphaToHsva(hex: string, asString?: true): string;
export function hexAlphaToHsva(hex: string, asString?: false): { h: number; s: number; v: number; a: number };
export function hexAlphaToHsva(
    hex: string,
    asString: boolean = true,
): string | { h: number; s: number; v: number; a: number } {
    if (!isValidHexAlpha(hex)) {
        throw new Error(`Invalid HEX color ${hex}`);
    }

    const { r, g, b, a } = hexAlphaToRgba(hex, false);
    const { h, s, v } = rgbToHsv(r, g, b, false);

    if (asString) {
        return `hsva(${h}, ${s}, ${v}, ${a})`;
    }

    return { h, s, v, a };
}
