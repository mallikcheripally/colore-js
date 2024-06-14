---
id: isValidHexAlpha
title: isValidHexAlpha
---

# isValidHexAlpha

The `isValidHexAlpha` function checks if the input string is a valid Hex color format with alpha. It supports both shorthand (#RGBA) and standard (#RRGGBBAA) hex formats.

## Syntax

```typescript
isValidHexAlpha(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid hex color with alpha, false otherwise.

## Example

```typescript
import { isValidHexAlpha } from 'colore-js';

console.log(isValidHexAlpha('#ff0000ff')); // Output: true
console.log(isValidHexAlpha('#f00f'));    // Output: true
console.log(isValidHexAlpha('#ff0000'));  // Output: false
console.log(isValidHexAlpha('red'));      // Output: false
```

## Usage

The `isValidHexAlpha` function is used to validate whether a given color string conforms to the Hex color format with alpha. This can be useful for input validation in color manipulation and design applications.
