---
id: complementaryColor
title: complementaryColor
---

# complementaryColor

The `complementaryColor` function finds the complementary color of a given color. Complementary colors are those that are opposite each other on the color wheel, providing a high contrast and vibrant look.

## Syntax

```typescript
complementaryColor(color: string): string
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).

### Returns

- **string**: The complementary color in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { complementaryColor } from 'colore';

const complementary = complementaryColor('#ff0000');
console.log(complementary);
// Output: '#00ffff'

const complementaryRgb = complementaryColor('rgb(255, 0, 0)');
console.log(complementaryRgb);
// Output: 'rgb(0, 255, 255)'
```

## Usage

The `complementaryColor` function is used to generate colors that are visually striking and high in contrast, often used in design and art to create attention-grabbing color schemes.
