
---
id: isValidLab
title: isValidLab
---

# isValidLab

The `isValidLab` function checks if the input string is a valid LAB color format.

## Syntax

```typescript
isValidLab(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid LAB color, false otherwise.

## Example

```typescript
import { isValidLab } from 'colore-js';

console.log(isValidLab('lab(50% 0% 0%)')); // Output: true
console.log(isValidLab('lab(50% 0% 0)'));  // Output: false
console.log(isValidLab('lab(50 0 0)'));    // Output: true
console.log(isValidLab('lab(50 0 0 / 1)')); // Output: true
console.log(isValidLab('lab(50 0 0 / 2)')); // Output: false
```

## Usage

The `isValidLab` function is used to validate whether a given color string conforms to the LAB color format. This can be useful for input validation in color manipulation and design applications.
