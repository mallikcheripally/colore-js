export const BlendingModes: {[key: string] : string} = {
    NORMAL: 'normal',
    MULTIPLY: 'multiply',
    SCREEN: 'screen',
    OVERLAY: 'overlay',
    DARKEN: 'darken',
    LIGHTEN: 'lighten',
    DIFFERENCE: 'difference',
    EXCLUSION: 'exclusion',
} as const;

export type BlendingMode = typeof BlendingModes[keyof typeof BlendingModes];
