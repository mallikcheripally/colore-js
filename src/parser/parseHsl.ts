import {isValidHsl} from "@/validations/isValidHsl";

/**
 * Parses an HSL color string to its HSL components.
 *
 * This function takes an HSL color string and converts it to the equivalent HSL components.
 * It supports both HSL and HSLA formats.
 *
 * @param {string} color - The HSL color string to parse.
 * @returns {[number, number, number]} The HSL components as an array [h, s, l].
 * @throws {Error} Throws an error if the HSL color format is invalid.
 */
export function parseHsl(color: string): [number, number, number] {
    const hslRegex = /^hsl\(\s*([\d.]+)(deg|rad|grad|turn)?\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/;

    const match = color.match(hslRegex);
    if (!match || !isValidHsl(color)) {
        throw new Error('Invalid HSL color format');
    }

    const parseHue = (hue: string, unit: string | undefined): number => {
        let hueValue = parseFloat(hue);
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
    };

    const h = Math.round(parseHue(match[1], match[2]));
    const s = parseFloat(match[3]);
    const l = parseFloat(match[4]);

    return [h, s, l];
}
