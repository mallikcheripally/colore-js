---
id: blendColors
title: blendColors
---

# blendColors

The `blendColors` function blends two colors using the specified blending mode and ratio. It provides various blending modes such as normal, multiply, screen, overlay, darken, lighten, difference, and exclusion.

## Syntax

```typescript
blendColors(color1: string, color2: string, mode: BlendingMode = BlendingModes.NORMAL, ratio = 0.5): string
```

### Parameters

- **`color1`** (string): The first color.
- **`color2`** (string): The second color.
- **`mode`** (BlendingMode): The blending mode to use. Defaults to `BlendingModes.NORMAL`.
- **`ratio`** (number): The ratio for interpolation blending (0-1). Defaults to 0.5.

### Returns

- **string**: The blended color.

### Throws

- **Error**: Throws an error if the blending mode is unsupported.

## Example

```typescript
import { blendColors, BlendingModes } from 'colore';

const blended = blendColors('#ff0000', '#0000ff', BlendingModes.MULTIPLY);
console.log(blended);
// Output: '#000000'

const blendedNormal = blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.NORMAL, 0.5);
console.log(blendedNormal);
// Output: 'rgb(128, 0, 128)'
```

## Usage

The `blendColors` function is used to blend two colors together using a specified blending mode and ratio. This is particularly useful in design and art for creating various color effects and combinations.
