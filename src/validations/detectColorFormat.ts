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

/**
 * Detects the color format of a given input string.
 *
 * @param {string} color - The input color string.
 * @returns {string} - The detected color format or 'unknown'.
 */
export function detectColorFormat(color: string): string {
    if (isValidHex(color)) return 'hex';
    if (isValidHexAlpha(color)) return 'hex-alpha';
    if (isValidRgb(color)) return 'rgb';
    if (isValidRgba(color)) return 'rgba';
    if (isValidHsl(color)) return 'hsl';
    if (isValidHsla(color)) return 'hsla';
    if (isValidNamedColor(color)) return 'named';
    if (isValidLch(color)) return 'lch';
    if (isValidXyz(color)) return 'xyz';
    if (isValidLab(color)) return 'lab';
    return 'unknown';
}
