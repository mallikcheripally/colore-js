/**
 * Checks if the input string is a valid HSLA color format.
 *
 * @param {string} color - The input color string.
 * @returns {boolean} - True if the input is a valid HSLA color, false otherwise.
 */
export function isValidHsla(color: string): boolean {
    const hslaRegex = /^hsla\(\s*([\d.]+)(deg|rad|grad|turn)?\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*(0|1|0?\.\d+|0?\.?\d+%|none)\s*\)$/;
    const match = color.match(hslaRegex);
    if (!match) return false;

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

    const h = parseHue(match[1], match[2]);
    const s = parseFloat(match[3]);
    const l = parseFloat(match[4]);
    let a = match[5] === 'none' ? 1 : parseFloat(match[5]);

    if (match[5].endsWith('%')) {
        a = parseFloat(match[5]) / 100;
    }

    return (
        h >= 0 && h <= 360 &&
        s >= 0 && s <= 100 &&
        l >= 0 && l <= 100 &&
        a >= 0 && a <= 1
    );
}
