---
id: parseXyz
title: parseXyz
---

# parseXyz

The `parseXyz` function parses an XYZ color string and returns the corresponding XYZ values.

## Syntax

```typescript
parseXyz(color: string): { x: number; y: number; z: number; }
```

### Parameters

- **`color`** (string): The XYZ color string in the format "xyz(x, y, z)".

### Returns

- **object**: An object containing XYZ values.

### Throws

- **Error**: Throws an error if the color format is invalid.

## Example

```typescript
import { parseXyz } from 'colore-js';

const xyz = parseXyz('xyz(41.24, 21.26, 1.93)');
console.log(xyz);
// Output: { x: 41.24, y: 21.26, z: 1.93 }
```

## Usage

The `parseXyz` function is used to convert an XYZ color string to its individual components. This can be useful for color manipulation and analysis in various design and art applications.
