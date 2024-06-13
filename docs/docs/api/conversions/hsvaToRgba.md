---
id: hsvaToRgba
title: hsvaToRgba
---

# hsvaToRgba

The `hsvaToRgba` function converts HSVA color values to an RGBA color string or an object.

## Syntax

```typescript
hsvaToRgba(h: number, s: number, v: number, a: number, asString?: true): string;
hsvaToRgba(h: number, s: number, v: number, a: number, asString?: false): { r: number; g: number; b: number; a: number };
hsvaToRgba(h: number, s: number, v: number, a: number, asString: boolean = true): string | { r: number; g: number; b: number; a: number };
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`v`** (number): The value (brightness) value (0-100).
- **`a`** (number): The alpha value (0-1).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGBA color string in the format "rgba(r, g, b, a)" if `asString` is true.
- **object**: The RGBA color as an object with properties `r`, `g`, `b`, and `a` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hsvaToRgba } from 'colore';

// Example usage as string
const rgbaString = hsvaToRgba(360, 100, 100, 1);
console.log(rgbaString); // Output: "rgba(255, 0, 0, 1)"

// Example usage as object
const rgbaObject = hsvaToRgba(360, 100, 100, 1, false);
console.log(rgbaObject); // Output: { r: 255, g: 0, b: 0, a: 1 }
```

## Usage

The `hsvaToRgba` function is useful for converting HSVA color values to RGBA, which can be beneficial for various color manipulations and adjustments in applications.
