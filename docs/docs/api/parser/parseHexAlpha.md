---
id: parseHexAlpha
title: parseHexAlpha
---

# parseHexAlpha

The `parseHexAlpha` function parses a HEX color string with alpha to its RGBA components. This function supports both 4-digit and 8-digit HEX formats.

## Syntax

```typescript
parseHexAlpha(color: string): { r: number; g: number; b: number; a: number }
```

### Parameters

- **`color`** (string): The HEX color string with alpha to parse.

### Returns

- **object**: An object containing RGBA values.

### Throws

- **Error**: Throws an error if the HEX color format is invalid.

## Example

```typescript
import { parseHexAlpha } from 'colore';

const rgba = parseHexAlpha('#ff000080');
console.log(rgba);
// Output: { r: 255, g: 0, b: 0, a: 0.502 }

const rgbaShort = parseHexAlpha('#f008');
console.log(rgbaShort);
// Output: { r: 255, g: 0, b: 0, a: 0.5333 }
```

## Usage

The `parseHexAlpha` function is used to convert a HEX color string with alpha to its RGBA components. This can be useful for color manipulation and analysis in various design and art applications.
