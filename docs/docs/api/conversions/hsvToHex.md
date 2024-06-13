---
id: hsvToHex
title: hsvToHex
---

# hsvToHex

The `hsvToHex` function converts HSV color values to a HEX color string.

## Syntax

```typescript
hsvToHex(h: number, s: number, v: number): string;
```

### Parameters

- **`h`** (number): The hue value (0-360).
- **`s`** (number): The saturation value (0-100).
- **`v`** (number): The value (brightness) value (0-100).

### Returns

- **string**: The HEX color string in the format "#RRGGBB".

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { hsvToHex } from 'colore';

// Example usage
const hexColor = hsvToHex(200, 50, 75);
console.log(hexColor); // Output: "#5fb3bf"
```

## Usage

The `hsvToHex` function is useful for converting HSV color values to HEX format, which can be used in various web and graphic design applications.
