---
id: rgbToLch
title: rgbToLch
---

# rgbToLch

The `rgbToLch` function converts RGB color values to LCH color values.

## Syntax

```typescript
rgbToLch(r: number, g: number, b: number, asString?: true): string;
rgbToLch(r: number, g: number, b: number, asString?: false): { l: number; c: number; h: number };
rgbToLch(r: number, g: number, b: number, asString: boolean = true): string | { l: number; c: number; h: number };
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The LCH color string in the format "lch(l, c, h)" if `asString` is true.
- **object**: The LCH color as an object with properties `l`, `c`, and `h` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToLch } from 'colore';

// Example usage as string
const lchString = rgbToLch(255, 87, 51);
console.log(lchString); // Output: "lch(54.29173376861782 106.83719893932447 40.85274465103784)"

// Example usage as object
const lchObject = rgbToLch(255, 87, 51, false);
console.log(lchObject); // Output: { l: 54.29173376861782, c: 106.83719893932447, h: 40.85274465103784 }
```

## Usage

The `rgbToLch` function is useful for converting RGB color values to LCH, which can be beneficial for various color manipulations and adjustments in applications.
