---
id: hexAlphaToRgba
title: hexAlphaToRgba
---

# hexAlphaToRgba

The `hexAlphaToRgba` function converts a HEX color with alpha to RGBA. It supports both shorthand (#RGBA) and standard (#RRGGBBAA) HEX formats.

## Syntax

```typescript
hexAlphaToRgba(hex: string, asString?: true): string;
hexAlphaToRgba(hex: string, asString?: false): { r: number; g: number; b: number; a: number; };
hexAlphaToRgba(hex: string, asString: boolean = true): string | { r: number; g: number; b: number; a: number };
```

### Parameters

- **`hex`** (string): The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
- **`asString`** (boolean, optional): Whether to return the result as a string. Default is `true`.

### Returns

- **string**: The RGBA color as a string if `asString` is `true`.
- **Object**: An object containing RGBA values if `asString` is `false`.
  - **`r`** (number): The red component (0-255).
  - **`g`** (number): The green component (0-255).
  - **`b`** (number): The blue component (0-255).
  - **`a`** (number): The alpha component (0-1).

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { hexAlphaToRgba } from 'colore';

// Example with hex color and alpha as string
const rgbaString = hexAlphaToRgba('#FF5733CC');
console.log(rgbaString);
// Output: "rgba(255, 87, 51, 0.8)"

// Example with hex color and alpha as object
const rgbaObject = hexAlphaToRgba('#FF5733CC', false);
console.log(rgbaObject);
// Output: { r: 255, g: 87, b: 51, a: 0.8 }
```

## Usage

The `hexAlphaToRgba` function is useful for converting HEX colors with alpha transparency to RGBA format, making it easier to work with colors in various web development scenarios.
