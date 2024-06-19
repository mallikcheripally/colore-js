---
id: hslaToHexAlpha
title: hslaToHexAlpha
---

# hslaToHexAlpha

The `hslaToHexAlpha` function converts HSLA color values to a HEX Alpha color string.

## Syntax

```typescript
hslaToHexAlpha(h: number, s: number, l: number, a: number): string;
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`l`** (number): The lightness value (0-100).
- **`a`** (number): The alpha value (0-1).

### Returns

- **string**: The HEX Alpha color string in the format "#RRGGBBAA"

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hslaToHexAlpha } from 'colore-js';

const hexAlphaString = hslaToHexAlpha(360, 100, 50, 1);
console.log(hexAlphaString); // Output: "#FF0000FF"
```

## Usage

The hslaToHexAlpha function is useful for converting HSLA color values to HEX Alpha, which can be beneficial for various color manipulations and adjustments in applications.
