---
id: hexToRgb
title: hexToRgb
---

# hexToRgb

The `hexToRgb` function converts a HEX color string to an RGB color string or an object.

## Syntax

```typescript
hexToRgb(hex: string, asString?: true): string;
hexToRgb(hex: string, asString?: false): { r: number; g: number; b: number };
hexToRgb(hex: string, asString: boolean = true): string | { r: number; g: number; b: number };
```

### Parameters

- **`hex`** (string): The HEX color string.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color as an object with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if the provided string is not a valid HEX color.

## Example

```typescript
import { hexToRgb } from 'colore';

// Example usage as string
const rgbString = hexToRgb('#ff5733');
console.log(rgbString); // Output: "rgb(255, 87, 51)"

// Example usage as object
const rgbObject = hexToRgb('#ff5733', false);
console.log(rgbObject); // Output: { r: 255, g: 87, b: 51 }
```

## Usage

The `hexToRgb` function is useful for converting HEX color values to RGB, which can be beneficial for various color manipulations and adjustments in applications.
