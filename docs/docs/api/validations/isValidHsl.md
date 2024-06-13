---
id: isValidHsl
title: isValidHsl
---

# isValidHsl

The `isValidHsl` function checks if the input string is a valid HSL color format.

## Syntax

```typescript
isValidHsl(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid HSL color, false otherwise.

## Example

```typescript
import { isValidHsl } from 'colore';

console.log(isValidHsl('hsl(120, 100%, 50%)')); // Output: true
console.log(isValidHsl('hsl(120, 100%, 50)'));  // Output: false
console.log(isValidHsl('hsl(400, 100%, 50%)')); // Output: false
console.log(isValidHsl('hsl(120, 200%, 50%)')); // Output: false
```

## Usage

The `isValidHsl` function is used to validate whether a given color string conforms to the HSL color format. This can be useful for input validation in color manipulation and design applications.
