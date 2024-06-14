---
id: rgbToLab
title: rgbToLab
---

# rgbToLab

The `rgbToLab` function converts RGB color values to LAB color values.

## Syntax

```typescript
rgbToLab(r: number, g: number, b: number, asString?: true): string;
rgbToLab(r: number, g: number, b: number, asString?: false): { l: number; a: number; b: number };
rgbToLab(r: number, g: number, b: number, asString: boolean = true): string | { l: number; a: number; b: number };
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The LAB color string in the format "lab(l, a, b)" if `asString` is true.
- **object**: The LAB color as an object with properties `l`, `a`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToLab } from 'colore-js';

// Example usage as string
const labString = rgbToLab(255, 0, 0);
console.log(labString); // Output: "lab(53.23288 80.10933 67.22006)"

// Example usage as object
const labObject = rgbToLab(255, 0, 0, false);
console.log(labObject); // Output: { l: 53.23288, a: 80.10933, b: 67.22006 }
```

## Usage

The `rgbToLab` function is useful for converting RGB color values to the LAB color space, which can be beneficial for various color manipulations and adjustments in applications.
