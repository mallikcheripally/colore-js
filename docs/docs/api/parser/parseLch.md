---
id: parseLch
title: parseLch
---

# parseLch

The `parseLch` function parses an LCH color string into its components.

## Syntax

```typescript
parseLch(color: string): { l: number; lUnit?: string; c: number; cUnit?: string; h: number; hUnit?: string; hDeg: number; alpha?: number; alphaUnit?: string; alphaNum?: number; }
```

### Parameters

- **`color`** (string): The LCH color string to parse.

### Returns

- **object**: An object containing the LCH values and units.

### Throws

- **Error**: Throws an error if the LCH color string is invalid.

## Example

```typescript
import { parseLch } from 'colore';

const lch = parseLch('lch(53.23288% 104.55262 40.000008)');
console.log(lch);
// Output: { l: 53.23288, lUnit: '%', c: 104.55262, cUnit: undefined, h: 40.000008, hUnit: undefined, hDeg: 40, alpha: undefined, alphaUnit: undefined, alphaNum: undefined }

const lchWithAlpha = parseLch('lch(53.23288% 104.55262 40.000008 / 0.5)');
console.log(lchWithAlpha);
// Output: { l: 53.23288, lUnit: '%', c: 104.55262, cUnit: undefined, h: 40.000008, hUnit: undefined, hDeg: 40, alpha: 0.5, alphaUnit: undefined, alphaNum: 0.5 }
```

## Usage

The `parseLch` function is used to convert an LCH color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
