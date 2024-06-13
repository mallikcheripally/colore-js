---
id: hexAlphaToHsva
title: hexAlphaToHsva
---

# hexAlphaToHsva

The `hexAlphaToHsva` function is used to convert a HEX color with alpha to HSVA. This function supports HEX color strings with alpha in both shorthand (#RGBA) and standard (#RRGGBBAA) formats.

## Syntax

```typescript
hexAlphaToHsva(hex: string, asString?: true): string;
hexAlphaToHsva(hex: string, asString?: false): { h: number; s: number; v: number; a: number };
```

### Parameters

- **`hex`** (string): The HEX color string with alpha (e.g., #RRGGBBAA or #RGBA).
- **`asString`** (boolean, optional): Whether to return the result as a string. Defaults to `true`.

### Returns

- **string**: The HSVA color as a string (if `asString` is `true`).
- **object**: An object containing HSVA values (if `asString` is `false`).
  - **`h`** (number): The hue component.
  - **`s`** (number): The saturation component.
  - **`v`** (number): The value component.
  - **`a`** (number): The alpha component.

## Example

```typescript
import { hexAlphaToHsva } from 'colore';

const hsvaString = hexAlphaToHsva('#ff5733cc');
console.log(hsvaString);
// Output: "hsva(11, 0.8, 1, 0.8)"

const hsvaObject = hexAlphaToHsva('#ff5733cc', false);
console.log(hsvaObject);
// Output: { h: 11, s: 0.8, v: 1, a: 0.8 }
```

## Usage

The `hexAlphaToHsva` function is useful for converting colors in HEX format with alpha to the HSVA format, which is often used in color manipulation and processing tasks.

