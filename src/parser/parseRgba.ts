import { isValidRgba } from '@/validations/isValidRgba';
import { rgbaRegex } from '@/utils/regex';
import {parseComponent, parseRgbComponent} from "@/utils/colorUtils";

/**
 * Parses an RGBA color string into its individual components.
 *
 * This function takes an RGBA color string and returns an array of its components
 * (red, green, blue, and alpha). The values can be represented as either numbers
 * or percentages.
 *
 * @param {string} color - The RGBA color string to parse.
 * @returns {{ r: number; rUnit: string; rNum: number; g: number; gUnit: string; gNum: number; b: number; bUnit: string; bNum: number; a: number; aUnit: string; aNum: number;}} An object containing RGBA values and units
 * @throws {Error} Throws an error if the color string is not a valid RGBA format.
 */
export function parseRgba(color: string): { r: number; rUnit: string; rNum: number; g: number; gUnit: string; gNum: number; b: number; bUnit: string; bNum: number; a: number; aUnit: string; aNum: number;} {
    const match = color.match(rgbaRegex);
    if (!match || !isValidRgba(color)) throw new Error('Invalid RGBA color format');

    const r = parseComponent(match[1], true);
    const rUnit = match[2];
    const rNum = parseRgbComponent(match[1]);

    const g = parseComponent(match[3], true);
    const gUnit = match[4];
    const gNum = parseRgbComponent(match[3]);

    const b = parseComponent(match[5], true);
    const bUnit = match[6];
    const bNum = parseRgbComponent(match[5]);

    const a = parseComponent(match[7]);
    const aUnit = match[8];
    const aNum = parseRgbComponent(match[7], true);

    return {
        r, rUnit, rNum, g, gUnit, gNum, b, bUnit, bNum, a, aUnit, aNum,
    };
}
