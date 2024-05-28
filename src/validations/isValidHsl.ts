/**
 * Checks if the input string is a valid HSL color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSL color, false otherwise.
 */
export function isValidHsl(color: string): boolean {
    const hslRegex = /^hsl\(\s*([\d.]+)(deg|rad|grad|turn)?\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/;
    const match = color.match(hslRegex);
    if (!match) return false;

    const parseHue = (hue: string, unit: string | undefined): number => {
        let hueValue = parseFloat(hue);
        switch (unit) {
            case 'deg':
            case undefined:
                return hueValue;
            case 'rad':
                return hueValue * (180 / Math.PI);
            case 'grad':
                return hueValue * (9 / 10);
            case 'turn':
                return hueValue * 360;
            default:
                return NaN;
        }
    };

    const h = parseHue(match[1], match[2]);
    const s = parseFloat(match[3]);
    const l = parseFloat(match[4]);

    return (
        !isNaN(h) && h >= 0 && h <= 360 &&
        s >= 0 && s <= 100 &&
        l >= 0 && l <= 100
    );
}
