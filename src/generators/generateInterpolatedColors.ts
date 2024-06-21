import { detectColorFormat } from '@/parser/detectColorFormat';
import { decomposeColor } from '@/parser/decomposeColor';
import { recomposeColor } from '@/parser/recomposeColor';
import { hexToRgb } from '@/conversions/hexToRgb';
import { rgbToHex } from '@/conversions/rgbToHex';
import { hexAlphaToRgba } from '@/conversions/hexAlphaToRgba';
import { rgbaToHexAlpha } from '@/conversions/rgbaToHexAlpha';
import { ColorFormats } from '@/utils/colorFormats';

/**
 * Generates interpolated colors between two colors.
 *
 * @param {string} color1 - The starting color.
 * @param {string} color2 - The ending color.
 * @param {number} steps - The number of steps (including start and end colors).
 * @param {true} [asString] - Whether to return the result as a string.
 * @returns {string[]} - The interpolated colors.
 * @throws {Error} Throws an error if the input color format is invalid.
 */
/**
 * Generates interpolated colors between two colors.
 *
 * @param {string} color1 - The starting color.
 * @param {string} color2 - The ending color.
 * @param {number} steps - The number of steps (including start and end colors).
 * @param {false} [asString] - Whether to return the result as an object.
 * @returns {object[]} - The interpolated colors.
 * @throws {Error} Throws an error if the input color format is invalid.
 */
/**
 * Generates interpolated colors between two colors.
 *
 * @param {string} color1 - The starting color.
 * @param {string} color2 - The ending color.
 * @param {number} steps - The number of steps (including start and end colors).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string[] | object[]} - The interpolated colors.
 * @throws {Error} Throws an error if the input color format is invalid.
 */
export function generateInterpolatedColors(
    color1: string,
    color2: string,
    steps: number,
    asString?: true,
): Array<string>;
export function generateInterpolatedColors(
    color1: string,
    color2: string,
    steps: number,
    asString?: false,
): Array<Object>;
export function generateInterpolatedColors(
    color1: string,
    color2: string,
    steps: number,
    asString: boolean = true,
): Array<string | Object> {
    const format1 = detectColorFormat(color1);
    const format2 = detectColorFormat(color2);

    if (format1 !== format2) {
        throw new Error('Color formats do not match');
    }

    const startColor = decomposeColor(color1);
    const endColor = decomposeColor(color2);

    const interpolate = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const colors = [];

    for (let i = 0; i <= steps; i++) {
        const factor = i / steps;
        let interpolatedColor;

        switch (format1) {
            case ColorFormats.RGB: {
                interpolatedColor = {
                    r: Math.round(interpolate(startColor.r, endColor.r, factor)),
                    g: Math.round(interpolate(startColor.g, endColor.g, factor)),
                    b: Math.round(interpolate(startColor.b, endColor.b, factor)),
                };
                colors.push(asString ? recomposeColor(color1, interpolatedColor) : interpolatedColor);
                break;
            }

            case ColorFormats.RGBA: {
                interpolatedColor = {
                    r: Math.round(interpolate(startColor.r, endColor.r, factor)),
                    g: Math.round(interpolate(startColor.g, endColor.g, factor)),
                    b: Math.round(interpolate(startColor.b, endColor.b, factor)),
                    a: interpolate(startColor.a, endColor.a, factor),
                };
                colors.push(asString ? recomposeColor(color1, interpolatedColor) : interpolatedColor);
                break;
            }

            case ColorFormats.HSL: {
                interpolatedColor = {
                    h: Math.round(interpolate(startColor.h, endColor.h, factor)),
                    s: Math.round(interpolate(startColor.s, endColor.s, factor)),
                    l: Math.round(interpolate(startColor.l, endColor.l, factor)),
                };
                colors.push(
                    asString ? recomposeColor(color1, { ...startColor, ...interpolatedColor }) : interpolatedColor,
                );
                break;
            }

            case ColorFormats.HSLA: {
                interpolatedColor = {
                    h: Math.round(interpolate(startColor.h, endColor.h, factor)),
                    s: Math.round(interpolate(startColor.s, endColor.s, factor)),
                    l: Math.round(interpolate(startColor.l, endColor.l, factor)),
                    a: interpolate(startColor.a, endColor.a, factor),
                };
                colors.push(
                    asString ? recomposeColor(color1, { ...startColor, ...interpolatedColor }) : interpolatedColor,
                );
                break;
            }

            case ColorFormats.HEX: {
                // @ts-ignore
                const rgb1 = hexToRgb(color1, false);
                // @ts-ignore
                const rgb2 = hexToRgb(color2, false);
                const interpolatedRgb = {
                    r: Math.round(interpolate(rgb1.r, rgb2.r, factor)),
                    g: Math.round(interpolate(rgb1.g, rgb2.g, factor)),
                    b: Math.round(interpolate(rgb1.b, rgb2.b, factor)),
                };
                colors.push(
                    asString ? rgbToHex(interpolatedRgb.r, interpolatedRgb.g, interpolatedRgb.b) : interpolatedRgb,
                );
                break;
            }

            case ColorFormats.HEX_ALPHA: {
                // @ts-ignore
                const rgba1 = hexAlphaToRgba(color1, false);
                // @ts-ignore
                const rgba2 = hexAlphaToRgba(color2, false);
                const interpolatedRgba = {
                    r: Math.round(interpolate(rgba1.r, rgba2.r, factor)),
                    g: Math.round(interpolate(rgba1.g, rgba2.g, factor)),
                    b: Math.round(interpolate(rgba1.b, rgba2.b, factor)),
                    a: interpolate(rgba1.a, rgba2.a, factor),
                };
                colors.push(
                    asString
                        ? rgbaToHexAlpha(interpolatedRgba.r, interpolatedRgba.g, interpolatedRgba.b, interpolatedRgba.a)
                        : interpolatedRgba,
                );
                break;
            }

            case ColorFormats.LAB: {
                interpolatedColor = {
                    l: interpolate(startColor.l, endColor.l, factor),
                    a: interpolate(startColor.a, endColor.a, factor),
                    b: interpolate(startColor.b, endColor.b, factor),
                };
                colors.push(asString ? recomposeColor(color1, interpolatedColor) : interpolatedColor);
                break;
            }

            case ColorFormats.LCH: {
                interpolatedColor = {
                    l: interpolate(startColor.l, endColor.l, factor),
                    c: interpolate(startColor.c, endColor.c, factor),
                    h: interpolate(startColor.h, endColor.h, factor),
                };
                colors.push(asString ? recomposeColor(color1, interpolatedColor) : interpolatedColor);
                break;
            }

            default:
                throw new Error(`Unsupported color format: ${format1}`);
        }
    }

    return colors;
}
