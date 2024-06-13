---
id: detectColorFormat
title: detectColorFormat
---

# detectColorFormat

The `detectColorFormat` function detects the color format of a given input string.

## Syntax

```typescript
detectColorFormat(color: string): ColorFormat
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **ColorFormat**: The detected color format or 'unknown'.

## Example

```typescript
import { detectColorFormat } from 'colore';

const formatHex = detectColorFormat('#ff0000');
console.log(formatHex);
// Output: 'HEX'

const formatRgb = detectColorFormat('rgb(255, 0, 0)');
console.log(formatRgb);
// Output: 'RGB'
```

## Usage

The `detectColorFormat` function is used to determine the format of a given color string. This can be useful for validating and processing colors in various design and art applications.
