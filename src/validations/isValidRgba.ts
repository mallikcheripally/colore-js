import {rgbaRegex} from "@/utils/regex";
import {parseRgbComponent} from "@/utils/colorUtils";

/**
 * Checks if the provided RGBA color string is valid.
 *
 * This function validates an RGBA color string, ensuring it adheres to the format
 * specified in the CSS Color Module Level 4, including support for percentages and
 * the 'none' keyword.
 *
 * @param {string} color - The RGBA color string to validate.
 * @returns {boolean} True if the color string is valid, false otherwise.
 */
export function isValidRgba(color: string): boolean {
    const match = color.match(rgbaRegex);
    if (!match) return false;

    const isValidComponent = (value: number, isAlpha?: boolean) => {
        if (isAlpha) return (typeof value === 'undefined') || (value >=0 && value <= 1);
        return value >= 0 && value <= 255;
    }

    const r = parseRgbComponent(match[1]);
    const g = parseRgbComponent(match[3]);
    const b = parseRgbComponent(match[5]);
    const a = parseRgbComponent(match[7], true);

    return isValidComponent(r) && isValidComponent(g) && isValidComponent(b) && isValidComponent(a, true);
}
