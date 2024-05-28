import { detectColorFormat } from './detectColorFormat';

/**
 * Recompose color values into a color string based on the detected format.
 *
 * @param {string} color - The original color string.
 * @param {number[]} values - The decomposed color values.
 * @returns {string} The recomposed color string.
 * @throws {Error} Throws an error if the color format or values are invalid.
 */
export function recomposeColor(color: string, values: number[]): string {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex':
        case 'hex-alpha':
            const hexValue = values.map(value => value.toString(16).padStart(2, '0')).join('');
            return format === 'hex' ? `#${hexValue.slice(0, 6)}` : `#${hexValue}`;
        case 'rgb':
            return `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
        case 'rgba':
            return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${values[3]})`;
        case 'hsl':
            return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
        case 'hsla':
            return `hsla(${values[0]}, ${values[1]}%, ${values[2]}%, ${values[3]})`;
        case 'lch':
            return `lch(${values[0]}% ${values[1]} ${values[2]})`;
        case 'lab':
            return `lab(${values[0]}% ${values[1]} ${values[2]})`;
        case 'xyz':
            return `xyz(${values[0]}, ${values[1]}, ${values[2]})`;
        case 'named':
            // Named color recompose logic
            // Assuming named color values are always in the form of rgb
            return color; // Return the original named color
        default:
            throw new Error(`Unsupported color format: ${color}`);
    }
}
