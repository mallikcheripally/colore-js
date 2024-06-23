import { BlendingMode, BlendingModes } from '@/utils/blendingModes';
import { parseColorToRgba } from '@/parser/parseColorToRgba';
import { rebuildColorFromRgba } from '@/parser/rebuildColorFromRgba';

/**
 * Interpolates between two values based on the given ratio.
 * @param {number} value1 - The first value.
 * @param {number} value2 - The second value.
 * @param {number} ratio - The interpolation ratio (0-1).
 * @returns {number} The interpolated value.
 */
const interpolate = (value1: number, value2: number, ratio: number): number => (1 - ratio) * value1 + ratio * value2;

/**
 * Blending mode functions
 */
const blendingModeFunctions: { [key: string]: (c1: number, c2: number) => number } = {
    [BlendingModes.NORMAL]: (c1, c2) => interpolate(c1, c2, 0.5),
    [BlendingModes.MULTIPLY]: (c1, c2) => (c1 * c2) / 255,
    [BlendingModes.SCREEN]: (c1, c2) => 255 - ((255 - c1) * (255 - c2)) / 255,
    [BlendingModes.OVERLAY]: (c1, c2) => (c1 < 128 ? (2 * c1 * c2) / 255 : 255 - (2 * (255 - c1) * (255 - c2)) / 255),
    [BlendingModes.DARKEN]: (c1, c2) => Math.min(c1, c2),
    [BlendingModes.LIGHTEN]: (c1, c2) => Math.max(c1, c2),
    [BlendingModes.DIFFERENCE]: (c1, c2) => Math.abs(c1 - c2),
    [BlendingModes.EXCLUSION]: (c1, c2) => c1 + c2 - (c1 * c2) / 128,
    [BlendingModes.SOFT_LIGHT]: (c1, c2) => {
        const C_b = c1 / 255;
        const C_s = c2 / 255;
        const result = C_s < 0.5
            ? 2 * C_b * C_s + C_b * C_b * (1 - 2 * C_s)
            : 2 * C_b * (1 - C_s) + Math.sqrt(C_b) * (2 * C_s - 1);
        return Math.round(result * 255);
    },
    [BlendingModes.HARD_LIGHT]: (c1, c2) => {
        const C_b = c1 / 255;
        const C_s = c2 / 255;
        const result = C_s < 0.5
            ? 2 * C_b * C_s
            : 1 - 2 * (1 - C_b) * (1 - C_s);
        return Math.round(result * 255);
    },
};

/**
 * Blends two colors using the specified blending mode and ratio.
 *
 * @param {string} color1 - The first color.
 * @param {string} color2 - The second color.
 * @param {string} mode - The blending mode to use.
 * @param {number} ratio - The ratio for interpolation blending (0-1).
 * @returns {string} The blended color.
 */
export function blendColors(color1: string, color2: string, mode: BlendingMode = BlendingModes.NORMAL, ratio = 0.5) {
    if (!Object.values(BlendingModes).includes(mode)) {
        throw new Error(`Unsupported blending mode: ${mode}`);
    }

    const rgbaColor1 = parseColorToRgba(color1);
    const rgbaColor2 = parseColorToRgba(color2);

    const blendedColor = {
        r: Math.round(blendingModeFunctions[mode](rgbaColor1.r, rgbaColor2.r)),
        g: Math.round(blendingModeFunctions[mode](rgbaColor1.g, rgbaColor2.g)),
        b: Math.round(blendingModeFunctions[mode](rgbaColor1.b, rgbaColor2.b)),
        a: interpolate(rgbaColor1.a ?? 1, rgbaColor2.a ?? 1, ratio),
    };

    return rebuildColorFromRgba(color1, blendedColor);
}
