import { parseColorToRgba } from '@/parser/parseColorToRgba';

/**
 * Calculates the relative luminance of a color in any supported format.
 *
 * @param {string} color - The color string in any supported format (hex, rgb, hsl, etc.).
 * @returns {number} - The relative luminance.
 */
export function getLuminance(color: string): number {
    const { r, g, b } = parseColorToRgba(color);

    const toLinear = (c: number) => {
        const cNormalized = c / 255;
        return cNormalized <= 0.03928 ? cNormalized / 12.92 : Math.pow((cNormalized + 0.055) / 1.055, 2.4);
    };

    const rLinear = toLinear(r);
    const gLinear = toLinear(g);
    const bLinear = toLinear(b);

    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
