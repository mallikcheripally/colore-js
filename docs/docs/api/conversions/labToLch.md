---
id: labToLch
title: labToLch
---

# labToLch

The `labToLch` function converts LAB color values to LCH color values.

## Syntax

```typescript
labToLch(l: number, a: number, b: number, asString?: true): string;
labToLch(l: number, a: number, b: number, asString?: false): { l: number; c: number; h: number };
labToLch(l: number, a: number, b: number, asString: boolean = true): string | { l: number; c: number; h: number };
```

### Parameters

- **`l`** (number): The lightness value (0-100).
- **`a`** (number): The a* axis value (-128 to 127).
- **`b`** (number): The b* axis value (-128 to 127).
- **`asString`** (boolean, optional): Whether to return the result as a string (default is true).

### Returns

- **string**: The LCH color string in the format "lch(l, c, h)" if `asString` is true.
- **object**: The LCH color as an object with properties `l`, `c`, and `h` if `asString` is false.

### Throws

- **Error**: Throws an error if any of the color values are out of range.

## Example

```typescript
import { labToLch } from 'colore';

// Example usage as string
const lchString = labToLch(75, 20, -30);
console.log(lchString); // Output: "lch(75, 36.0555, 326.3099)"

// Example usage as object
const lchObject = labToLch(75, 20, -30, false);
console.log(lchObject); // Output: { l: 75, c: 36.0555, h: 326.3099 }
```

## Usage

The `labToLch` function is useful for converting LAB color values to LCH, which can be beneficial for various color manipulations and adjustments in applications.
