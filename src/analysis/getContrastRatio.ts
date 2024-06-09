import { getLuminance } from '@/analysis/getLuminance';

interface ContrastRatioResult {
    ratio: number;
    ratioString: string;  // For example, "4.5:1"
    isAccessible: boolean;
    level: 'AA' | 'AAA' | 'None'; // Based on WCAG standards
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * @param {string} color1 - The first color.
 * @param {string} color2 - The second color.
 * @returns {ContrastRatioResult} - The contrast ratio result.
 */
export function getContrastRatio(color1: string, color2: string): ContrastRatioResult {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);

    const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
    const ratioString = `${ratio.toFixed(2)}:1`;

    let isAccessible = false;
    let level: 'AA' | 'AAA' | 'None' = 'None';

    if (ratio >= 7) {
        isAccessible = true;
        level = 'AAA';
    } else if (ratio >= 4.5) {
        isAccessible = true;
        level = 'AA';
    }

    return {
        ratio,
        ratioString,
        isAccessible,
        level
    };
}
