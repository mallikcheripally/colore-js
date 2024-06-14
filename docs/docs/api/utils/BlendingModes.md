---
id: BlendingModes
title: BlendingModes
---

# BlendingModes

The `BlendingModes` object defines a set of blending modes that can be used in various graphic and color manipulation operations.

### Supported Modes

The `BlendingModes` object contains the following properties:

- **`NORMAL`**: Represents normal blending mode.
- **`MULTIPLY`**: Represents multiply blending mode.
- **`SCREEN`**: Represents screen blending mode.
- **`OVERLAY`**: Represents overlay blending mode.
- **`DARKEN`**: Represents darken blending mode.
- **`LIGHTEN`**: Represents lighten blending mode.
- **`DIFFERENCE`**: Represents difference blending mode.
- **`EXCLUSION`**: Represents exclusion blending mode.

## BlendingMode

The `BlendingMode` type represents the type of blending mode and is defined as one of the values in the `BlendingModes` object.

## Example

```typescript
import { BlendingModes, BlendingMode, blendColors } from 'colore-js';

const blended = blendColors('#ff0000', '#0000ff', BlendingModes.MULTIPLY);
console.log(blended);
// Output: '#000000'

const blendedNormal = blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.NORMAL, 0.5);
console.log(blendedNormal);
// Output: 'rgb(128, 0, 128)'
```

## Usage

The `BlendingModes` object and `BlendingMode` type are useful for defining and using blending modes in graphics applications, ensuring consistency and type safety when applying different blending modes.
