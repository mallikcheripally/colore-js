---
id: parseColorToRgba
title: parseColorToRgba
---

# parseColorToRgba

The `parseColorToRgba` function converts any valid color format to RGB.

## Syntax

```typescript
parseColorToRgba(color: string): { r: number; g: number; b: number; a?: number }
```

### Parameters

- **`color`** (string): The input color in any valid format.

### Returns

- **object**: The RGB representation of the color.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { parseColorToRgba } from 'colore-js';

const rgbaHex = parseColorToRgba('#ff0000');
console.log(rgbaHex);
// Output: { r: 255, g: 0, b: 0 }

const rgbaRgb = parseColorToRgba('rgb(255, 0, 0)');
console.log(rgbaRgb);
// Output: { r: 255, g: 0, b: 0 }
```

## Usage

The `parseColorToRgba` function is used to convert any valid color format to its RGB representation. This can be useful for color manipulation and analysis in various design and art applications.
