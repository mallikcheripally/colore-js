---
id: invertColor
title: invertColor
---

# invertColor

The `invertColor` function inverts a given color in various supported formats.

## Syntax

```typescript
invertColor(color: string): string;
```

### Parameters

- **`color`** (string): The input color string in any supported format (hex, rgb, hsl, etc.).

### Returns

- **string**: The inverted color in the original format.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { invertColor } from 'colore-js';

const invertedColor = invertColor("#ff5733");
console.log(invertedColor); // Output: "#00a8cc"
```

## Usage

The `invertColor` function is useful for inverting colors in various formats, such as RGB, HEX, HSL, and more. This can be helpful in creating complementary color schemes or achieving specific visual effects.

