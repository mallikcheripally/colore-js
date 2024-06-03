import { isValidRgb } from '@/validations/isValidRgb';
import { rgbRegex } from '@/utils/regex';
import {parseComponent, parseRgbComponent} from "@/utils/colorUtils";

/**
 * Parses an RGB color string and returns an array of color components.
 *
 * This function takes a valid RGB color string and decomposes it into
 * an array of its individual red, green, and blue components.
 *
 * @param {string} color - The RGB color string to parse.
 * @returns {{r: number; rUnit: string; rNum: number; g: number; gUnit: string; gNum: number; b: number; bUnit: string; bNum: number;}} An array containing the red, green, and blue components.
 * @throws {Error} Throws an error if the color format is invalid.
 */
export function parseRgb(color: string): {r: number; rUnit: string; rNum: number; g: number; gUnit: string; gNum: number; b: number; bUnit: string; bNum: number;} {
    const match = color.match(rgbRegex);
    if (!match || !isValidRgb(color)) throw new Error('Invalid RGB color format');

    const r = parseComponent(match[1]);
    const rUnit = match[2];
    const rNum = parseRgbComponent(match[1]);
    const g = parseComponent(match[3]);
    const gUnit = match[4];
    const gNum = parseRgbComponent(match[3]);
    const b = parseComponent(match[5]);
    const bUnit = match[6];
    const bNum = parseRgbComponent(match[5]);

    return { r, rUnit, rNum, g, gUnit, gNum, b, bUnit, bNum };
}
