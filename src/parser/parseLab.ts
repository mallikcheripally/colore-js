import { labRegex } from '@/utils/regex';

/**
 * Parses a LAB color string.
 *
 * @param {string} color - The LAB color string to parse.
 * @returns {[number, number, number, number?]} - The LAB values.
 */
export function parseLab(color: string): [number, number, number, number?] {
    const match = color.match(labRegex);
    if (!match) throw new Error('Invalid LAB color format');

    const parseComponent = (value: string) => {
        if (value === 'none') return 0;
        if (value.includes('%')) return parseFloat(value) * (value === match[1] ? 1 : 1); // Correctly parse percentages
        return parseFloat(value);
    };

    const l = parseComponent(match[1]);
    const a = parseComponent(match[3]);
    const b = parseComponent(match[5]);
    const alpha = match[7]
        ? match[7] === 'none'
            ? 1
            : match[7].includes('%')
              ? parseFloat(match[7]) / 100
              : parseFloat(match[7])
        : undefined;

    return alpha === undefined ? [l, a, b] : [l, a, b, alpha];
}
