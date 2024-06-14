---
id: rebuildColorFromRgba
title: rebuildColorFromRgba
---

# rebuildColorFromRgba

The `rebuildColorFromRgba` function converts RGBA components back to the original color format.

## Syntax

```typescript
rebuildColorFromRgba(originalColor: string, rgba: { r: number; g: number; b: number; a: number }): string
```

### Parameters

- **`originalColor`** (string): The original color string.
- **`rgba`** (object): The RGBA components of the color.
  - **`rgba.r`** (number): The red component (0-255).
  - **`rgba.g`** (number): The green component (0-255).
  - **`rgba.b`** (number): The blue component (0-255).
  - **`rgba.a`** (number): The alpha component (0-1).

### Returns

- **string**: The color string in the original format.

### Throws

- **Error**: Throws an error if the color format is unsupported.

## Example

```typescript
import { rebuildColorFromRgba } from 'colore-js';

const rgba = { r: 255, g: 0, b: 0, a: 0.5 };
const hexColor = rebuildColorFromRgba('#ff0000', rgba);
console.log(hexColor);
// Output: '#ff0000'

const rgbaColor = rebuildColorFromRgba('rgba(255, 0, 0, 1)', rgba);
console.log(rgbaColor);
// Output: 'rgba(255, 0, 0, 0.5)'
```

## Usage

The `rebuildColorFromRgba` function is used to convert RGBA components back to their original color format. This can be useful for color manipulation and analysis in various design and art applications.
