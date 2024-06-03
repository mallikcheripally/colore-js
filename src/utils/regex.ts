export const hexRegex: RegExp = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;

export const hexAlphaRegex: RegExp = /^#([a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/;

export const hslRegex: RegExp =
    /^hsl\(\s*(\d+(\.\d+)?)(deg|rad|grad|turn)?\s*,\s*(\d+(\.\d+)?)(%)?\s*,\s*(\d+(\.\d+)?)(%)?\s*\)$/i;

export const hslaRegex: RegExp =
    /^hsla\(\s*(\d+(\.\d+)?)(deg|rad|grad|turn)?\s*,\s*(\d+(\.\d+)?)(%)?\s*,\s*(\d+(\.\d+)?)(%)?\s*,\s*(0|1|0?\.\d+|\d{1,3}%?)\s*\)$/i;

export const labRegex: RegExp =
    /^lab\(\s*(\d+(\.\d+)?(%)?|none)\s+(-?\d+(\.\d+)?(%)?|none)\s+(-?\d+(\.\d+)?(%)?|none)(?:\s*\/\s*(none|0|1|0?\.\d+|\d{1,3}(%)?))?\s*\)$/;

export const lchRegex: RegExp =
    /^lch\(\s*(none|\d+(\.\d+)?(%)?)\s+(none|\d+(\.\d+)?(%)?)\s+(none|-?\d+(\.\d+)?(deg|rad|turn)?)\s*(\/\s*(none|0|1|0?\.\d+|\d{1,3}(%)?))?\s*\)$/;

export const rgbRegex: RegExp = /^rgb\(\s*(\d{1,3}(%)?)\s*,\s*(\d{1,3}(%)?)\s*,\s*(\d{1,3}(%)?)\s*\)$/i;

export const rgbaRegex: RegExp =
    /^rgba\(\s*(\d{1,3}(%)?|none)\s*,\s*(\d{1,3}(%)?|none)\s*,\s*(\d{1,3}(%)?|none)\s*,\s*(none|0|1|0?\.\d+|\d{1,3}(%)?)\s*\)$/i;

export const xyzRegex: RegExp = /^xyz\(\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*\)$/;
