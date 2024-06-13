---
id: saturateColor
title: saturateColor
---

# saturateColor

The `saturateColor` function saturates a given color by a specified amount. This is useful for increasing the intensity of a color to create more vibrant shades.

## Syntax

```typescript
saturateColor(color: string, amount: number): string
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).
- **`amount`** (number): The amount to saturate the color (0-100).

### Returns

- **string**: The saturated color in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { saturateColor } from 'colore';

const saturated = saturateColor('#ff0000', 50);
console.log(saturated);
// Output: '#ff3333'

const saturatedRgb = saturateColor('rgb(255, 0, 0)', 50);
console.log(saturatedRgb);
// Output: 'rgb(255, 51, 51)'
```

## Usage

The `saturateColor` function is used to create more vibrant shades of a color, which can be useful in design and art for adding emphasis and contrast to color schemes.
