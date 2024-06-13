---
id: rgbToCmyk
title: rgbToCmyk
---

# rgbToCmyk

The `rgbToCmyk` function converts RGB color values to CMYK values.

## Syntax

```typescript
rgbToCmyk(r: number, g: number, b: number, asString?: true): string;
rgbToCmyk(r: number, g: number, b: number, asString?: false): { c: number, m: number, y: number, k: number };
rgbToCmyk(r: number, g: number, b: number, asString: boolean = true): string | { c: number, m: number, y: number, k: number };
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The CMYK color string in the format "cmyk(c, m, y, k)" if `asString` is true.
- **object**: The CMYK color as an object with properties `c`, `m`, `y`, and `k` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToCmyk } from 'colore';

// Example usage as string
const cmykString = rgbToCmyk(255, 0, 0);
console.log(cmykString); // Output: "cmyk(0, 100, 100, 0)"

// Example usage as object
const cmykObject = rgbToCmyk(255, 0, 0, false);
console.log(cmykObject); // Output: { c: 0, m: 100, y: 100, k: 0 }
```

## Usage

The `rgbToCmyk` function is useful for converting RGB color values to CMYK, which is commonly used in color printing and design.
