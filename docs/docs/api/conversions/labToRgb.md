---
id: labToRgb
title: labToRgb
---

# labToRgb

The `labToRgb` function converts LAB color values to RGB color values.

## Syntax

```typescript
labToRgb(l: number, a: number, b: number, asString?: true): string;
labToRgb(l: number, a: number, b: number, asString?: false): {{ r: number; g: number; b: number }};
labToRgb(l: number, a: number, b: number, asString: boolean = true): string | {{ r: number; g: number; b: number }};
```

### Parameters

- **`l`** (number): The lightness value (0 to 100).
- **`a`** (number): The a* value (-128 to 127).
- **`b`** (number): The b* value (-128 to 127).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The RGB color string in the format "rgb(r, g, b)" if `asString` is true.
- **object**: The RGB color as an object with properties `r`, `g`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { labToRgb } from 'colore-js';

// Example usage as string
const rgbString = labToRgb(50, 0, 0);
console.log(rgbString); // Output: "rgb(119, 119, 119)"

// Example usage as object
const rgbObject = labToRgb(50, 0, 0, false);
console.log(rgbObject); // Output: {{ r: 119, g: 119, b: 119 }}
```

## Usage

The `labToRgb` function is useful for converting LAB color values to RGB, which can be beneficial for various color manipulations and adjustments in applications.
