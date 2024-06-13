---
id: lightenColor
title: lightenColor
---

# lightenColor

The `lightenColor` function lightens a given color by a specified amount. This is useful for creating lighter shades of a color for design and art purposes.

## Syntax

```typescript
lightenColor(color: string, amount: number): string | undefined
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).
- **`amount`** (number): The amount to lighten the color (0-100).

### Returns

- **string | undefined**: The lightened color in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { lightenColor } from 'colore';

const lightened = lightenColor('#ff0000', 20);
console.log(lightened);
// Output: '#ff6666'

const lightenedRgb = lightenColor('rgb(255, 0, 0)', 20);
console.log(lightenedRgb);
// Output: 'rgb(255, 51, 51)'
```

## Usage

The `lightenColor` function is used to create lighter shades of a color, which can be useful in design and art for adding highlights and contrast to color schemes.
