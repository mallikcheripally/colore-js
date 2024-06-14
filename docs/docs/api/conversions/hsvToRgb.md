---
id: hsvToRgb
title: hsvToRgb
---

# hsvToRgb

The `hsvToRgb` function converts HSV color values to RGB values.

## Syntax

```typescript
hsvToRgb(h: number, s: number, v: number, asString?: true): string;
hsvToRgb(h: number, s: number, v: number, asString?: false): { r: number, g: number; b: number };
hsvToRgb(h: number, s: number, v: number, asString: boolean = true): string | { r: number, g: number; b: number };
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`v`** (number): The value (brightness) value (0-100).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color as an object with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hsvToRgb } from 'colore-js';

// Example usage as string
const rgbString = hsvToRgb(360, 100, 100);
console.log(rgbString); // Output: "rgb(255, 0, 0)"

// Example usage as object
const rgbObject = hsvToRgb(360, 100, 100, false);
console.log(rgbObject); // Output: { r: 255, g: 0, b: 0 }
```

## Usage

The `hsvToRgb` function is useful for converting HSV color values to RGB, which can be beneficial for various color manipulations and adjustments in applications.
