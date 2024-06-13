---
id: parseLab
title: parseLab
---

# parseLab

The `parseLab` function parses a LAB color string and returns an object containing the LAB values and units.

## Syntax

```typescript
parseLab(color: string): { l: number; lUnit?: string; a: number; aUnit?: string; b: number; bUnit?: string; alpha?: number; alphaUnit?: string; alphaNum?: number; }
```

### Parameters

- **`color`** (string): The LAB color string to parse.

### Returns

- **object**: An object containing the LAB values and units.

### Throws

- **Error**: If the LAB color format is invalid.

## Example

```typescript
import { parseLab } from 'colore';

const lab = parseLab('lab(53.23288% 80.109309 -67.220068)');
console.log(lab);
// Output: { l: 53.23288, lUnit: '%', a: 80.109309, aUnit: undefined, b: -67.220068, bUnit: undefined }

const labWithAlpha = parseLab('lab(53.23288% 80.109309 -67.220068 / 0.5)');
console.log(labWithAlpha);
// Output: { l: 53.23288, lUnit: '%', a: 80.109309, aUnit: undefined, b: -67.220068, bUnit: undefined, alpha: 0.5, alphaUnit: undefined, alphaNum: 0.5 }
```

## Usage

The `parseLab` function is used to convert a LAB color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
