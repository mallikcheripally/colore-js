/**
 * Converts RGB color values to XYZ color space.
 *
 * @param {number} r - The red component, range 0-255.
 * @param {number} g - The green component, range 0-255.
 * @param {number} b - The blue component, range 0-255.
 * @returns {[number, number, number]} - The corresponding XYZ values.
 */
export function rgbToXyz(r: number, g: number, b: number): [number, number, number] {
    const normalize = (value: number) => {
        value = value / 255;
        return value > 0.04045 ? Math.pow((value + 0.055) / 1.055, 2.4) : value / 12.92;
    };

    const nr = normalize(r);
    const ng = normalize(g);
    const nb = normalize(b);

    const x = (nr * 0.4124564 + ng * 0.3575761 + nb * 0.1804375) * 100;
    const y = (nr * 0.2126729 + ng * 0.7151522 + nb * 0.0721750) * 100;
    const z = (nr * 0.0193339 + ng * 0.1191920 + nb * 0.9503041) * 100;

    const roundTo = (num: number, precision: number) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    };

    return [roundTo(x, 2), roundTo(y, 2), roundTo(z, 2)];
}
