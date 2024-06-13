---
id: isValidNamedColor
title: isValidNamedColor
---

# isValidNamedColor

The `isValidNamedColor` function checks if the input string is a valid named CSS color.

## Syntax

```typescript
isValidNamedColor(color: string): boolean
```

### Parameters

- **`color`** (string): The input color string.

### Returns

- **boolean**: True if the input is a valid named CSS color, false otherwise.

## Example

```typescript
import { isValidNamedColor } from 'colore';

console.log(isValidNamedColor('red')); // Output: true
console.log(isValidNamedColor('blue')); // Output: true
console.log(isValidNamedColor('invalidColor')); // Output: false
console.log(isValidNamedColor('Green')); // Output: true
console.log(isValidNamedColor('YELLOW')); // Output: true
console.log(isValidNamedColor('blurple')); // Output: false
```

## Usage

The `isValidNamedColor` function is used to validate whether a given color string is a named CSS color. This can be useful for input validation in color manipulation and design applications.
