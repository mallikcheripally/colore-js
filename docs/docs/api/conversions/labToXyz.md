---
id: labToXyz
title: labToXyz
---

# labToXyz

The `labToXyz` function converts LAB color values to XYZ color space.

## Syntax

```typescript
labToXyz(l: number, a: number, b: number, asString?: true): string;
labToXyz(l: number, a: number, b: number, asString?: false): { x: number; y: number; z: number };
labToXyz(l: number, a: number, b: number, asString: boolean = true): string | { x: number; y: number; z: number };
```

### Parameters

- **`l`** (number): The lightness component.
- **`a`** (number): The a component.
- **`b`** (number): The b component.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The XYZ color string in the format "xyz(x, y, z)" if `asString` is true.
- **object**: The XYZ color as an object with properties `x`, `y`, and `z` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { labToXyz } from 'colore-js';

// Example usage as string
const xyzString = labToXyz(53.23288, 80.10933, 67.22006);
console.log(xyzString); // Output: "xyz(41.24, 21.26, 1.93)"

// Example usage as object
const xyzObject = labToXyz(53.23288, 80.10933, 67.22006, false);
console.log(xyzObject); // Output: { x: 41.24, y: 21.26, z: 1.93 }
```

## Usage

The `labToXyz` function is useful for converting LAB color values to XYZ color space, which is used in various color manipulation and conversion tasks in applications.
