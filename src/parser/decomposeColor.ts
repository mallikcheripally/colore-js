import { hexToRgb } from '@/conversions/hexToRgb';
import { hslToRgb } from '@/conversions/hslToRgb';
import { labToRgb } from '@/conversions/labToRgb';
import { lchToRgb } from '@/conversions/lchToRgb';
import { xyzToRgb } from '@/conversions/xyzToRgb';
import { detectColorFormat } from './detectColorFormat';

function parseRgb(color: string): { r: number, g: number, b: number } {
    const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) throw new Error('Invalid RGB color format');
    return { r: parseInt(match[1], 10), g: parseInt(match[2], 10), b: parseInt(match[3], 10) };
}

function parseRgba(color: string): { r: number, g: number, b: number } {
    const match = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([01]?\.?\d*)\)$/);
    if (!match) throw new Error('Invalid RGBA color format');
    return { r: parseInt(match[1], 10), g: parseInt(match[2], 10), b: parseInt(match[3], 10) };
}

function parseHsl(color: string): [number, number, number] {
    const match = color.match(/^hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)$/);
    if (!match) throw new Error('Invalid HSL color format');
    return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
}

function parseHsla(color: string): [number, number, number] {
    const match = color.match(/^hsla\((\d+),\s*(\d+)%?,\s*(\d+)%?,\s*([01]?\.?\d*)\)$/);
    if (!match) throw new Error('Invalid HSLA color format');
    return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
}

function parseLab(color: string): [number, number, number] {
    const match = color.match(/^lab\((\d+\.?\d*),\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)\)$/);
    if (!match) throw new Error('Invalid LAB color format');
    return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
}

function parseLch(color: string): [number, number, number] {
    const match = color.match(/^lch\((\d+\.?\d*),\s*(\d+\.?\d*),\s*(\d+\.?\d*)\)$/);
    if (!match) throw new Error('Invalid LCH color format');
    return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
}

function parseXyz(color: string): [number, number, number] {
    const match = color.match(/^xyz\((\d+\.?\d*),\s*(\d+\.?\d*),\s*(\d+\.?\d*)\)$/);
    if (!match) throw new Error('Invalid XYZ color format');
    return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
}

function parseNamedColor(color: string): { r: number, g: number, b: number } {
    // Assume we have a mapping of named colors to their RGB values
    const namedColors: { [key: string]: { r: number, g: number, b: number } } = {
        red: { r: 255, g: 0, b: 0 },
        green: { r: 0, g: 255, b: 0 },
        blue: { r: 0, g: 0, b: 255 },
        // Add other named colors as needed
    };
    if (!namedColors[color.toLowerCase()]) throw new Error('Invalid named color');
    return namedColors[color.toLowerCase()];
}

/**
 * Converts any valid color format to RGB.
 *
 * @param {string} color - The input color in any valid format.
 * @returns {object} - The RGB representation of the color.
 * @throws {Error} - Throws an error if the input color format is invalid.
 */
export function decomposeColor(color: string): { r: number, g: number, b: number } {
    const format = detectColorFormat(color);

    switch (format) {
        case 'hex':
        case 'hex-alpha':
            return hexToRgb(color, false);
        case 'hsl':
            const [h, s, l] = parseHsl(color);
            return hslToRgb(h, s, l, false);
        case 'hsla':
            const [hslaH, hslaS, hslaL] = parseHsla(color);
            return hslToRgb(hslaH, hslaS, hslaL, false);
        case 'lab':
            const [lVal, a, b] = parseLab(color);
            return labToRgb(lVal, a, b, false);
        case 'lch':
            const [lchL, c, hVal] = parseLch(color);
            return lchToRgb(lchL, c, hVal, false);
        case 'xyz':
            const [x, y, z] = parseXyz(color);
            return xyzToRgb(x, y, z, false);
        case 'rgb':
            return parseRgb(color);
        case 'rgba':
            return parseRgba(color);
        case 'named':
            return parseNamedColor(color);
        default:
            throw new Error(`Invalid color format ${color}`);
    }
}
