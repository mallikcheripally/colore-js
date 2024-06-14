---
id: desaturateColor
title: desaturateColor
---

# desaturateColor

The `desaturateColor` function desaturates a given color by a specified amount. This is useful for reducing the intensity of a color to create more muted or grayscale shades.

## Syntax

```typescript
desaturateColor(color: string, amount: number): string
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).
- **`amount`** (number): The amount to desaturate the color (0-100).

### Returns

- **string**: The desaturated color in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { desaturateColor } from 'colore-js';

const desaturated = desaturateColor('#ff0000', 50);
console.log(desaturated);
// Output: '#804040'

const desaturatedRgb = desaturateColor('rgb(255, 0, 0)', 50);
console.log(desaturatedRgb);
// Output: 'rgb(128, 64, 64)'
```

## Usage

The `desaturateColor` function is used to create more muted or grayscale shades of a color, which can be useful in design and art for achieving specific aesthetic effects.
