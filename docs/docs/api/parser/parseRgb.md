---
id: parseRgb
title: parseRgb
---

# parseRgb

The `parseRgb` function parses an RGB color string and returns an array of color components.

## Syntax

```typescript
parseRgb(color: string): { r: number; rUnit: string; rNum: number; g: number; gUnit: string; gNum: number; b: number; bUnit: string; bNum: number; }
```

### Parameters

- **`color`** (string): The RGB color string to parse.

### Returns

- **object**: An object containing RGB values and units.

### Throws

- **Error**: Throws an error if the color format is invalid.

## Example

```typescript
import { parseRgb } from 'colore';

const rgb = parseRgb('rgb(255, 0, 0)');
console.log(rgb);
// Output: { r: 255, rUnit: '', rNum: 255, g: 0, gUnit: '', gNum: 0, b: 0, bUnit: '', bNum: 0 }

const rgbPercent = parseRgb('rgb(100%, 0%, 0%)');
console.log(rgbPercent);
// Output: { r: 255, rUnit: '%', rNum: 255, g: 0, gUnit: '%', gNum: 0, b: 0, bUnit: '%', bNum: 0 }
```

## Usage

The `parseRgb` function is used to convert an RGB color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
