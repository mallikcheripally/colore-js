---
id: rgbaToHsla
title: rgbaToHsla
---

# rgbaToHsla

The `rgbaToHsla` function converts RGBA color values to HSLA format.

## Syntax

```typescript
rgbaToHsla(r: number, g: number, b: number, a: number, asString?: true): string;
rgbaToHsla(r: number, g: number, b: number, a: number, asString?: false): { h: number; s: number; l: number; a: number; };
rgbaToHsla(r: number, g: number, b: number, a: number, asString: boolean = true): string | { h: number; s: number; l: number; a: number; };
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`a`** (number): The alpha value (0-1).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The HSLA color string in the format "hsla(h, s%, l%, a)" if `asString` is true.
- **object**: The HSLA color as an object with properties `h`, `s`, `l`, and `a` if `asString` is false.

### Throws

- **Error**: Throws an error if the input color values are out of range.

## Example

```typescript
import { rgbaToHsla } from 'colore-js';

// Example usage as string
const hslaString = rgbaToHsla(255, 87, 51, 0.8);
console.log(hslaString); // Output: "hsla(14, 100%, 60%, 0.8)"

// Example usage as object
const hslaObject = rgbaToHsla(255, 87, 51, 0.8, false);
console.log(hslaObject); // Output: { h: 14, s: 100, l: 60, a: 0.8 }
```

## Usage

The `rgbaToHsla` function is useful for converting RGBA color values to HSLA, which can be beneficial for various color manipulations and adjustments in applications.
