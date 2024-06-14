---
id: lchToRgb
title: lchToRgb
---

# lchToRgb

The `lchToRgb` function converts LCH color values to RGB color values.

## Syntax

```typescript
lchToRgb(l: number, c: number, h: number, asString?: true): string;
lchToRgb(l: number, c: number, h: number, asString?: false): { r: number; g: number; b: number };
lchToRgb(l: number, c: number, h: number, asString: boolean = true): string | { r: number; g: number; b: number };
```

### Parameters

- **`l`** (number): The lightness value (0 to 100).
- **`c`** (number): The chroma value.
- **`h`** (number): The hue value (0 to 360).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color as an object with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { lchToRgb } from 'colore-js';

// Example usage as string
const rgbString = lchToRgb(70, 25, 120);
console.log(rgbString); // Output: "rgb(161, 209, 143)"

// Example usage as object
const rgbObject = lchToRgb(70, 25, 120, false);
console.log(rgbObject); // Output: { r: 161, g: 209, b: 143 }
```

## Usage

The `lchToRgb` function is useful for converting LCH color values to RGB, which can be beneficial for various color manipulations and adjustments in applications.
