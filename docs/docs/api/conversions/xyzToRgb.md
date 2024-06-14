---
id: xyzToRgb
title: xyzToRgb
---

# xyzToRgb

The `xyzToRgb` function converts XYZ color values to RGB color space.

## Syntax

```typescript
xyzToRgb(x: number, y: number, z: number, asString?: true): string;
xyzToRgb(x: number, y: number, z: number, asString?: false): { r: number; g: number; b: number };
xyzToRgb(x: number, y: number, z: number, asString: boolean = true): string | { r: number; g: number; b: number };
```

### Parameters

- **`x`** (number): The X component.
- **`y`** (number): The Y component.
- **`z`** (number): The Z component.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color in object format with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { xyzToRgb } from 'colore-js';

// Example usage as string
const rgbString = xyzToRgb(41.24, 21.26, 1.93);
console.log(rgbString); // Output: "rgb(255, 0, 0)"

// Example usage as object
const rgbObject = xyzToRgb(41.24, 21.26, 1.93, false);
console.log(rgbObject); // Output: { r: 255, g: 0, b: 0 }
```

## Usage

The `xyzToRgb` function is useful for converting color values from the XYZ color space to the RGB color space, which is commonly used in digital displays and imaging applications.
