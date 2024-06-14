---
id: quick-start
title: Quick Start
---

### Getting Started with Colore

Follow these steps to quickly get started with Colore:

### Step 1: Install Colore

If you haven't already installed Colore, follow the installation instructions:

#### Using npm

```bash
npm install colore-js
```

#### Using Yarn

```bash
yarn add colore-js
```

### Step 2: Import Colore Functions

Once installed, you can import and use Colore functions in your project:

```javascript
import { blendColors, darkenColor, lightenColor } from 'colore-js';

// Example usage
const blendedColor = blendColors('#ff5733', '#33aaff');
const darkenedColor = darkenColor('#ff5733', 0.2);
const lightenedColor = lightenColor('#33aaff', 0.3);

console.log(`Blended Color: ${blendedColor}`);
console.log(`Darkened Color: ${darkenedColor}`);
console.log(`Lightened Color: ${lightenedColor}`);
```

### Step 3: Explore More Features

Explore the comprehensive features of Colore by referring to the detailed API documentation. You can perform various color manipulations, conversions, validations, and more.

- **Conversions**: Convert between HEX, RGB, HSL, HSV, LAB, LCH, CMYK, and XYZ.
- **Validations**: Ensure correct color values with validation functions.
- **Manipulations**: Blend, darken, lighten, and perform other color manipulations.
- **Color Harmony**: Generate harmonious color schemes.

### Additional Resources

For more detailed information, examples, and advanced usage, refer to the following sections:

- [API Reference](./api-reference)
- [Examples](./examples)
- [FAQ](./faq)

Happy coding with Colore!
