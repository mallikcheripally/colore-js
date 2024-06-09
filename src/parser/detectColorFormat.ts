import { isValidHex } from '@/validations/isValidHex';
import { isValidHexAlpha } from '@/validations/isValidHexAlpha';
import { isValidRgb } from '@/validations/isValidRgb';
import { isValidRgba } from '@/validations/isValidRgba';
import { isValidHsl } from '@/validations/isValidHsl';
import { isValidHsla } from '@/validations/isValidHsla';
import { isValidNamedColor } from '@/validations/isValidNamedColor';
import { isValidLch } from '@/validations/isValidLch';
import { isValidXyz } from '@/validations/isValidXyz';
import { isValidLab } from '@/validations/isValidLab';
import { ColorFormat, ColorFormats } from '@/utils/colorFormats';

/**
 * Detects the color format of a given input string.
 *
 * @param {string} color - The input color string.
 * @returns {string} - The detected color format or 'unknown'.
 */
export function detectColorFormat(color: string): ColorFormat {
    if (isValidHex(color)) return ColorFormats.HEX;
    if (isValidHexAlpha(color)) return ColorFormats.HEX_ALPHA;
    if (isValidRgb(color)) return ColorFormats.RGB;
    if (isValidRgba(color)) return ColorFormats.RGBA;
    if (isValidHsl(color)) return ColorFormats.HSL;
    if (isValidHsla(color)) return ColorFormats.HSLA;
    if (isValidNamedColor(color)) return ColorFormats.NAMED;
    if (isValidLab(color)) return ColorFormats.LAB;
    if (isValidLch(color)) return ColorFormats.LCH;
    if (isValidXyz(color)) return ColorFormats.XYZ;
    return ColorFormats.UNKNOWN;
}
