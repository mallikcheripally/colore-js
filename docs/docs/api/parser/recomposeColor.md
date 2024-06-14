---
id: recomposeColor
title: recomposeColor
---

# recomposeColor

The `recomposeColor` function recomposes color values into a color string based on the detected format.

## Syntax

```typescript
recomposeColor(color: string, decomposed: any): string
```

### Parameters

- **`color`** (string): The original color string.
- **`decomposed`** (object): The decomposed color object.

### Returns

- **string**: The recomposed color string.

### Throws

- **Error**: Throws an error if the color format or values are invalid.

## Example

```typescript
import { recomposeColor } from 'colore-js';

const decomposedRgb = { r: 255, g: 0, b: 0 };
const recomposedRgb = recomposeColor('rgb(255, 0, 0)', decomposedRgb);
console.log(recomposedRgb);
// Output: 'rgb(255, 0, 0)'

const decomposedRgba = { r: 255, g: 0, b: 0, a: 0.5 };
const recomposedRgba = recomposeColor('rgba(255, 0, 0, 0.5)', decomposedRgba);
console.log(recomposedRgba);
// Output: 'rgba(255, 0, 0, 0.5)'
```

## Usage

The `recomposeColor` function is used to recompose color values into their original format. This can be useful for color manipulation and analysis in various design and art applications.
