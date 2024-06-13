---
id: getLuminance
title: getLuminance
---

# getLuminance

The `getLuminance` function calculates the relative luminance of a color in any supported format. This is an important metric for determining the perceived brightness of a color and is used in calculating contrast ratios.

## Syntax

```typescript
getLuminance(color: string): number
```

### Parameters

- **`color`** (string): The color string in any supported format (hex, rgb, hsl, etc.).

### Returns

- **number**: The relative luminance of the color.

## Example

```typescript
import { getLuminance } from 'colore';

const luminance = getLuminance('#ffffff');
console.log(luminance);
// Output: 1

const luminanceRgb = getLuminance('rgb(255, 255, 255)');
console.log(luminanceRgb);
// Output: 1
```

## Usage

The `getLuminance` function is used to determine the perceived brightness of a color. This is particularly useful in web development for ensuring that text and other elements have sufficient contrast against their backgrounds.
