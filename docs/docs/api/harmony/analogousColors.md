---
id: analogousColors
title: analogousColors
---

# analogousColors

The `analogousColors` function finds the analogous colors of a given color. Analogous colors are those that are next to each other on the color wheel, providing a harmonious and visually appealing combination.

## Syntax

```typescript
analogousColors(color: string): string[]
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).

### Returns

- **string[]**: An array of analogous colors in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { analogousColors } from 'colore';

const analogous = analogousColors('#ff0000');
console.log(analogous);
// Output: ['#ff8000', '#ff0080']

const analogousRgb = analogousColors('rgb(255, 0, 0)');
console.log(analogousRgb);
// Output: ['rgb(255, 128, 0)', 'rgb(255, 0, 128)']
```

## Usage

The `analogousColors` function is used to generate colors that are visually harmonious and aesthetically pleasing, often used in design and art to create color schemes that are easy on the eyes.
