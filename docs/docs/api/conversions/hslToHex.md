---
id: hslToHex
title: hslToHex
---

# hslToHex

The `hslToHex` function converts HSL color values to a HEX color string.

## Syntax

```typescript
hslToHex(h: number, s: number, l: number): string;
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`l`** (number): The lightness value (0-100).

### Returns

- **string**: The HEX color string in the format "#RRGGBB".

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hslToHex } from 'colore-js';

const hexColor = hslToHex(360, 100, 50);
console.log(hexColor); // Output: "#ff0000"
```

## Usage

The `hslToHex` function is useful for converting HSL color values to HEX, which is a common format for colors in web development and design.
