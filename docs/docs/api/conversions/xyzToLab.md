---
id: xyzToLab
title: xyzToLab
---

# xyzToLab

The `xyzToLab` function converts XYZ color values to LAB color space.

## Syntax

```typescript
xyzToLab(x: number, y: number, z: number, asString?: true): string;
xyzToLab(x: number, y: number, z: number, asString?: false): { l: number; a: number; b: number };
xyzToLab(x: number, y: number, z: number, asString: boolean = true): string | { l: number; a: number; b: number };
```

### Parameters

- **`x`** (number): The X component.
- **`y`** (number): The Y component.
- **`z`** (number): The Z component.
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The LAB color string in the format "lab(l, a, b)" if `asString` is true.
- **object**: The LAB color as an object with properties `l`, `a`, and `b` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { xyzToLab } from 'colore-js';

// Example usage as string
const labString = xyzToLab(41.24, 21.26, 1.93);
console.log(labString); // Output: "lab(53.23288% 80.109309 67.220068)"

// Example usage as object
const labObject = xyzToLab(41.24, 21.26, 1.93, false);
console.log(labObject); // Output: { l: 53.23288, a: 80.109309, b: 67.220068 }
```

## Usage

The `xyzToLab` function is useful for converting XYZ color values to the LAB color space, which can be beneficial for various color manipulations and adjustments in applications.

## Source Code

```typescript
import { roundTo } from '@/utils/colorUtils';

/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string} - The LAB color string in the format "lab(l, a, b)"
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts XYZ color values to LAB color space.
 *
 * @param {number} x - The X component.
 * @param {number} y - The Y component.
 * @param {number} z - The Z component.
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {{ l: number; a: number; b: number; }} - The LAB color in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function xyzToLab(x: number, y: number, z: number, asString?: true): string;
export function xyzToLab(x: number, y: number, z: number, asString?: false): { l: number; a: number; b: number };
export function xyzToLab(
    x: number,
    y: number,
    z: number,
    asString: boolean = true,
): string | { l: number; a: number; b: number } {
    if (x < 0 || y < 0 || z < 0) {
        throw new Error(`Invalid XYZ color value ${x}, ${y}, ${z}`);
    }

    // Reference values for D65 illuminant
    const refX = 95.047;
    const refY = 100.000;
    const refZ = 108.883;

    x = x / refX;
    y = y / refY;
    z = z / refZ;

    x = x > 0.008856 ? Math.cbrt(x) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.cbrt(y) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.cbrt(z) : (7.787 * z) + (16 / 116);

    const l = (116 * y) - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);

    if (asString) {
        return `lab(${roundTo(l, 5)}% ${roundTo(a, 5)} ${roundTo(b, 5)})`;
    }

    return {
        l: roundTo(l, 5),
        a: roundTo(a, 5),
        b: roundTo(b, 5)
    };
}
```
