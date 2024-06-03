/**
 * Parses a color component value.
 *
 * @param {string} value - The color component value to parse.
 * @param {boolean} asInteger - Whether to return as an integer value instead of a float
 * @returns {number} The parsed component value.
 */
export function parseComponent(value: string, asInteger?: boolean): number {
    if (value === 'none') return 0;
    return asInteger ? parseInt(value, 10) : parseFloat(value);
}

/**
 * Parses a hue value and converts it to degrees if necessary.
 *
 * @param {string} hue - The hue value to parse.
 * @param {string | undefined} unit - The unit of the hue value.
 * @returns {number} The parsed hue value in degrees.
 */
export function parseHue(hue: string, unit: string | undefined): number {
    const hueValue = parseFloat(hue);
    switch (unit) {
        case 'deg':
            return hueValue;
        case 'rad':
            return hueValue * (180 / Math.PI);
        case 'grad':
            return hueValue * (9 / 10);
        case 'turn':
            return hueValue * 360;
        default:
            return hueValue;
    }
}

/**
 * Parses an alpha value.
 *
 * @param {string} value - The alpha value to parse.
 * @returns {number | undefined} The parsed alpha value.
 */
export function parseAlpha(value: string): number | undefined {
    if (value === 'none') return 1;
    return Number.isFinite(parseFloat(value)) ? parseFloat(value) : undefined;
}

/**
 * Rounds a number to a specified precision.
 *
 * @param {number} num - The number to round.
 * @param {number} precision - The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export function roundTo(num: number, precision: number = 3): number {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}

/**
 * Parses a RGB color component value.
 *
 * @param {string} value - The color component value to parse.
 * @param {boolean} isAlpha - Whether the component is an alpha value
 * @returns {number} The parsed component value.
 */
export function parseRgbComponent(value: string, isAlpha?: boolean): number {
    if (value === 'none') return isAlpha ? 1 : 0;
    if (value.includes('%')) {
        const percentValue = parseFloat(value) * (isAlpha ? 0.01 : 2.55);
        const result = (percentValue * 100) / 100;
        return isAlpha ? result : Math.round(result);
    }

    if (isAlpha) return parseFloat(value);
    return parseInt(value, 10);
}
