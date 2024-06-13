---
id: isValidLch
title: isValidLch
---

# isValidLch

The `isValidLch` function checks if the input string is a valid LCH color format.

## Syntax

```typescript
isValidLch(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid LCH color, false otherwise.

## Example

```typescript
import { isValidLch } from 'colore';

console.log(isValidLch('lch(50% 0 0)')); // Output: true
console.log(isValidLch('lch(50% 0 0 / 1)')); // Output: true
console.log(isValidLch('lch(50 0 0 / 2)')); // Output: false
console.log(isValidLch('lch(50 0 0)'));    // Output: true
console.log(isValidLch('lch(50 0 0 / 1)')); // Output: true
console.log(isValidLch('lch(50 0 0 / 2)')); // Output: false
```

## Usage

The `isValidLch` function is used to validate whether a given color string conforms to the LCH color format. This can be useful for input validation in color manipulation and design applications.
