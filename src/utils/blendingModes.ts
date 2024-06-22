export const BlendingModes: {[key: string] : string} = {
    NORMAL: 'normal',
    MULTIPLY: 'multiply',
    SCREEN: 'screen',
    OVERLAY: 'overlay',
    DARKEN: 'darken',
    LIGHTEN: 'lighten',
    DIFFERENCE: 'difference',
    EXCLUSION: 'exclusion',
    SOFT_LIGHT: 'soft_light',
    HARD_LIGHT: 'hard_light'
} as const;

export type BlendingMode = typeof BlendingModes[keyof typeof BlendingModes];
