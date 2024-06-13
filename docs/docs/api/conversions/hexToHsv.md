---
id: hexToHsv
title: hexToHsv
---

# hexToHsv

The `hexToHsv` function converts a HEX color string to an HSV color string or an object.

## Syntax

```typescript
hexToHsv(hex: string, asString?: true): string;
hexToHsv(hex: string, asString?: false): { h: number; s: number; v: number };
hexToHsv(hex: string, asString: boolean = true): string | { h: number; s: number; v: number };
```

### Parameters

- **`hex`** (string): The HEX color string.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The HSV color string in the format "hsv(h, s%, v%)" if `asString` is true.
- **object**: The HSV color as an object with properties `h`, `s`, and `v` if `asString` is false.

### Throws

- **Error**: Throws an error if the provided string is not a valid HEX color.

## Example

```typescript
import { hexToHsv } from 'colore';

// Example usage as string
const hsvString = hexToHsv('#ff5733');
console.log(hsvString); // Output: "hsv(14, 80%, 100%)"

// Example usage as object
const hsvObject = hexToHsv('#ff5733', false);
console.log(hsvObject); // Output: { h: 14, s: 80, v: 100 }
```

## Usage

The `hexToHsv` function is useful for converting HEX color values to HSV, which can be beneficial for various color manipulations and adjustments in applications.
