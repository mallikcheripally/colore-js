---
id: isValidRgb
title: isValidRgb
---

# isValidRgb

The `isValidRgb` function checks if the input string is a valid RGB color format.

## Syntax

```typescript
isValidRgb(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid RGB color, false otherwise.

## Example

```typescript
import { isValidRgb } from 'colore';

console.log(isValidRgb('rgb(255, 0, 0)')); // Output: true
console.log(isValidRgb('rgb(100%, 0%, 0%)')); // Output: true
console.log(isValidRgb('rgb(255, 255, 256)')); // Output: false
console.log(isValidRgb('rgb(300, 0, 0)')); // Output: false
```

## Usage

The `isValidRgb` function is used to validate whether a given color string conforms to the RGB color format. This can be useful for input validation in color manipulation and design applications.
