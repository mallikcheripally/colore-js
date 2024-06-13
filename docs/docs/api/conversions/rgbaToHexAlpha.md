---
id: rgbaToHexAlpha
title: rgbaToHexAlpha
---

# rgbaToHexAlpha

The `rgbaToHexAlpha` function converts RGBA color values to a HEX color string with alpha.

## Syntax

```typescript
rgbaToHexAlpha(r: number, g: number, b: number, a: number): string;
```

### Parameters

- **`r`** (number): The red value (0-255).
- **`g`** (number): The green value (0-255).
- **`b`** (number): The blue value (0-255).
- **`a`** (number): The alpha value (0-1).

### Returns

- **string**: The HEX color string with alpha (e.g., #RRGGBBAA).

### Throws

- **Error**: Throws an error if the input color values are out of range.

## Example

```typescript
import { rgbaToHexAlpha } from 'colore';

const hexColor = rgbaToHexAlpha(255, 87, 51, 0.5);
console.log(hexColor); // Output: "#ff57337f"
```

## Usage

The `rgbaToHexAlpha` function is useful for converting RGBA color values to a HEX representation with alpha, which can be useful in various graphics and web applications.
