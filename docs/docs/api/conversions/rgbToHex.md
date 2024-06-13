---
id: rgbToHex
title: rgbToHex
---

# rgbToHex

The `rgbToHex` function converts RGB color values to a HEX color string.

## Syntax

```typescript
rgbToHex(r: number, g: number, b: number): string;
```

### Parameters

- **`r`** (number): The red color value (0-255).
- **`g`** (number): The green color value (0-255).
- **`b`** (number): The blue color value (0-255).

### Returns

- **string**: The hexadecimal color string in the format "#RRGGBB".

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToHex } from 'colore';

// Example usage
const hexColor = rgbToHex(255, 87, 51);
console.log(hexColor); // Output: "#ff5733"
```

## Usage

The `rgbToHex` function is useful for converting RGB color values to their equivalent hexadecimal representation, which is commonly used in web design and other digital color applications.
