---
id: rgbToXyz
title: rgbToXyz
---

# rgbToXyz

The `rgbToXyz` function converts RGB color values to XYZ color space.

## Syntax

```typescript
rgbToXyz(r: number, g: number, b: number, asString?: true): string;
rgbToXyz(r: number, g: number, b: number, asString?: false): {{ x: number, y: number, z: number }};
rgbToXyz(r: number, g: number, b: number, asString: boolean = true): string | {{ x: number, y: number, z: number }};
```

### Parameters

- **`r`** (number): The red component, range 0-255.
- **`g`** (number): The green component, range 0-255.
- **`b`** (number): The blue component, range 0-255.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The XYZ color string in the format "xyz(x, y, z)" if `asString` is true.
- **object**: The XYZ color as an object with properties `x`, `y`, and `z` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { rgbToXyz } from 'colore';

// Example usage as string
const xyzString = rgbToXyz(255, 0, 0);
console.log(xyzString); // Output: "xyz(41.24564, 21.26729, 1.93339)"

// Example usage as object
const xyzObject = rgbToXyz(255, 0, 0, false);
console.log(xyzObject); // Output: { x: 41.24564, y: 21.26729, z: 1.93339 }
```

## Usage

The `rgbToXyz` function is useful for converting RGB color values to the XYZ color space, which can be beneficial for various color manipulations and transformations in applications.
