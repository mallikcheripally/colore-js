---
id: ColorFormats
title: ColorFormats
---

# ColorFormats

The `ColorFormats` object provides a list of standardized color formats that can be used in various color manipulation and conversion functions.

### Properties

- **CMYK**: 'cmyk' - Represents the CMYK color format.
- **HEX**: 'hex' - Represents the HEX color format.
- **HEX_ALPHA**: 'hex-alpha' - Represents the HEX color format with alpha transparency.
- **HSL**: 'hsl' - Represents the HSL color format.
- **HSLA**: 'hsla' - Represents the HSLA color format with alpha transparency.
- **HSV**: 'hsv' - Represents the HSV color format.
- **HSVA**: 'hsva' - Represents the HSVA color format with alpha transparency.
- **LAB**: 'lab' - Represents the LAB color format.
- **LCH**: 'lch' - Represents the LCH color format.
- **RGBA**: 'rgba' - Represents the RGBA color format with alpha transparency.
- **RGB**: 'rgb' - Represents the RGB color format.
- **XYZ**: 'xyz' - Represents the XYZ color format.
- **NAMED**: 'named' - Represents named color formats (e.g., 'red', 'blue').
- **UNKNOWN**: 'unknown' - Represents an unknown and unsupported color format.

## Example

```typescript
import {ColorFormats, ColorFormat, detectColorFormat} from 'colore-js';

const format: ColorFormat = detectColorFormat('rgb(255, 255, 255)');

if (format === ColorFormats.RGB) {
    console.log(`Color format is ${format}`); // Color format is rgb
}
```

## Usage

The `ColorFormats` object can be used to standardize and validate color format strings in various color manipulation functions.
