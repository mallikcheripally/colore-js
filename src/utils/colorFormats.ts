export const ColorFormats: {[key: string] : string} = {
    CMYK: 'cmyk',
    HEX: 'hex',
    HEX_ALPHA: 'hex-alpha',
    HSL: 'hsl',
    HSLA: 'hsla',
    HSV: 'hsv',
    HSVA: 'hsva',
    LAB: 'lab',
    LCH: 'lch',
    RGBA: 'rgba',
    RGB: 'rgb',
    XYZ: 'xyz',
    UNKNOWN: 'unknown',
} as const;

export type ColorFormat = typeof ColorFormats[keyof typeof ColorFormats];
