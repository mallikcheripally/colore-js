---
id: lchToLab
title: lchToLab
---

# lchToLab

The `lchToLab` function converts LCH color values to LAB color values.

## Syntax

```typescript
lchToLab(l: number, c: number, h: number, asString?: true): string;
lchToLab(l: number, c: number, h: number, asString?: false): { l: number; a: number; b: number };
lchToLab(l: number, c: number, h: number, asString: boolean = true): string | { l: number; a: number; b: number };
```

### Parameters

- **`l`** (number): The lightness value (0 to 100).
- **`c`** (number): The chroma value.
- **`h`** (number): The hue value (0 to 360).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The LCH color string in the format "lch(l, c, h)" if `asString` is true.
- **object**: The LCH color as an object with properties `l`, `a`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { lchToLab } from 'colore-js';

// Example usage as string
const labString = lchToLab(70, 25, 180);
console.log(labString); // Output: "lab(70% -25 0)"

// Example usage as object
const labObject = lchToLab(70, 25, 180, false);
console.log(labObject); // Output: { l: 70, a: -25, b: 0 }
```

## Usage

The `lchToLab` function is useful for converting LCH color values to LAB, which can be beneficial for various color manipulations and adjustments in applications.
