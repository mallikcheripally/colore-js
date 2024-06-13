---
id: hexAlphaToHsla
title: hexAlphaToHsla
---

# hexAlphaToHsla

The `hexAlphaToHsla` function is used to convert a HEX color with alpha to HSLA. This function supports both shorthand (`#RGBA`) and standard (`#RRGGBBAA`) HEX formats.

## Syntax

```typescript
hexAlphaToHsla(hex: string, asString?: true): string;
hexAlphaToHsla(hex: string, asString?: false): { h: number; s: number; l: number; a: number };
hexAlphaToHsla(hex: string, asString: boolean = true): string | { h: number; s: number; l: number; a: number };
```

### Parameters

- **`hex`** (string): The HEX color string with alpha (e.g., `#RRGGBBAA` or `#RGBA`).
- **`asString`** (boolean, optional): Whether to return the result as a string. Defaults to `true`.

### Returns

- **string | object**: The HSLA color components.
  - If `asString` is `true`: The HSLA color as a string.
  - If `asString` is `false`: An object containing the HSLA color components.
    - **`h`** (number): The hue component.
    - **`s`** (number): The saturation component.
    - **`l`** (number): The lightness component.
    - **`a`** (number): The alpha component.

## Example

```typescript
import { hexAlphaToHsla } from 'colore';

// Example with HEX color and alpha
const hslaColor = hexAlphaToHsla('#ff5733cc');
console.log(hslaColor);
// Output: "hsla(14, 100%, 60%, 0.8)"

// Example with HEX color and alpha, returning as object
const hslaObject = hexAlphaToHsla('#ff5733cc', false);
console.log(hslaObject);
// Output: { h: 14, s: 100, l: 60, a: 0.8 }
```

## Usage

The `hexAlphaToHsla` function is commonly used in web development to convert HEX colors with alpha transparency to HSLA format, which can be useful for CSS styling and other applications that require color manipulation.

