---
id: isValidXyz
title: isValidXyz
---

# isValidXyz

The `isValidXyz` function checks if the input string is a valid XYZ color format.

## Syntax

```typescript
isValidXyz(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid XYZ color, false otherwise.

## Example

```typescript
import { isValidXyz } from 'colore-js';

console.log(isValidXyz('xyz(0.4124564, 0.3575761, 0.1804375)')); // Output: true
console.log(isValidXyz('xyz(0.412, 0.357, 0.180)')); // Output: true
console.log(isValidXyz('xyz(1.5, 0.5, -0.5)')); // Output: false
console.log(isValidXyz('xyz(0, 0, 0)')); // Output: true
```

## Usage

The `isValidXyz` function is used to validate whether a given color string conforms to the XYZ color format. This can be useful for input validation in color manipulation and design applications.
