---
id: parseHsla
title: parseHsla
---

# parseHsla

The `parseHsla` function parses an HSLA color string and returns an object containing the hue, saturation, lightness, and alpha values.

## Syntax

```typescript
parseHsla(color: string): { h: number; hUnit?: string; hDeg: number; s: number; sUnit?: string; l: number; lUnit?: string; a: number | undefined; aUnit?: string; aNum: number; }
```

### Parameters

- **`color`** (string): The HSLA color string to parse.

### Returns

- **object**: An object containing the hue, saturation, lightness, and alpha values along with their units.

### Throws

- **Error**: Throws an error if the input color format is invalid.

## Example

```typescript
import { parseHsla } from 'colore-js';

const hsla = parseHsla('hsla(120, 100%, 50%, 0.5)');
console.log(hsla);
// Output: { h: 120, hUnit: undefined, hDeg: 120, s: 100, sUnit: '%', l: 50, lUnit: '%', a: 0.5, aUnit: undefined, aNum: 0.5 }

const hslaWithUnit = parseHsla('hsla(120deg, 100%, 50%, 50%)');
console.log(hslaWithUnit);
// Output: { h: 120, hUnit: 'deg', hDeg: 120, s: 100, sUnit: '%', l: 50, lUnit: '%', a: 0.5, aUnit: '%', aNum: 0.5 }
```

## Usage

The `parseHsla` function is used to convert an HSLA color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
