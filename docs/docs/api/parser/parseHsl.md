---
id: parseHsl
title: parseHsl
---

# parseHsl

The `parseHsl` function parses an HSL color string and returns an object containing the hue, saturation, and lightness values.

## Syntax

```typescript
parseHsl(color: string): { h: number; hUnit?: string; hDeg: number; s: number; sUnit?: string; l: number; lUnit?: string; }
```

### Parameters

- **`color`** (string): The HSL color string to parse.

### Returns

- **object**: An object containing the hue, saturation, and lightness values along with the hue unit.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { parseHsl } from 'colore';

const hsl = parseHsl('hsl(120, 100%, 50%)');
console.log(hsl);
// Output: { h: 120, hUnit: undefined, hDeg: 120, s: 100, sUnit: '%', l: 50, lUnit: '%' }

const hslWithUnit = parseHsl('hsl(120deg, 100%, 50%)');
console.log(hslWithUnit);
// Output: { h: 120, hUnit: 'deg', hDeg: 120, s: 100, sUnit: '%', l: 50, lUnit: '%' }
```

## Usage

The `parseHsl` function is used to convert an HSL color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
