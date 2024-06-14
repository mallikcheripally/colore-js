---
id: rgbToHsv
title: rgbToHsv
---

# rgbToHsv

The `rgbToHsv` function converts RGB color values to HSV values.

## Syntax

```typescript
rgbToHsv(r: number, g: number, b: number, asString?: true): string;
rgbToHsv(r: number, g: number, b: number, asString?: false): {{ h: number; s: number; v: number }};
rgbToHsv(r: number, g: number, b: number, asString: boolean = true): string | {{ h: number; s: number; v: number }};
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The HSV color string in the format "hsv(h, s%, v%)" if `asString` is true.
- **object**: The HSV color as an object with properties `h`, `s`, and `v` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToHsv } from 'colore-js';

// Example usage as string
const hsvString = rgbToHsv(255, 87, 51);
console.log(hsvString); // Output: "hsv(14, 80%, 100%)"

// Example usage as object
const hsvObject = rgbToHsv(255, 87, 51, false);
console.log(hsvObject); // Output: {{ h: 14, s: 80, v: 100 }}
```

## Usage

The `rgbToHsv` function is useful for converting RGB color values to HSV, which can be beneficial for various color manipulations and adjustments in applications.
