
---
id: hslToRgb
title: hslToRgb
---

# hslToRgb

The `hslToRgb` function converts HSL color values to an RGB color string or an object.

## Syntax

```typescript
hslToRgb(h: number, s: number, l: number, asString?: true): string;
hslToRgb(h: number, s: number, l: number, asString?: false): { r: number; g: number; b: number };
hslToRgb(h: number, s: number, l: number, asString: boolean = true): string | { r: number; g: number; b: number };
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`l`** (number): The lightness value (0-100).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color as an object with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hslToRgb } from 'colore';

// Example usage as string
const rgbString = hslToRgb(360, 100, 50);
console.log(rgbString); // Output: "rgb(255, 0, 0)"

// Example usage as object
const rgbObject = hslToRgb(360, 100, 50, false);
console.log(rgbObject); // Output: { r: 255, g: 0, b: 0 }
```

## Usage

The `hslToRgb` function is useful for converting HSL color values to RGB, which can be beneficial for various color manipulations and adjustments in applications.
