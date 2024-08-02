<div align="center">
  <a href="https://colore.mallikcheripally.com/">
    <picture>
      <source srcset="https://raw.githubusercontent.com/mallikcheripally/colore-js/main/assets/images/github-poster-dark-theme.png" media="(prefers-color-scheme: dark)">
      <img src="https://raw.githubusercontent.com/mallikcheripally/colore-js/main/assets/images/github-poster.png" alt="colore-js">
    </picture>
  </a>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/colore-js">
    <img alt="npm" src="https://img.shields.io/npm/v/colore-js.svg" />
  </a>
    <a href="https://colore.mallikcheripally.com">
    <img alt="documentation" src="https://img.shields.io/badge/Visit-Documentation-js.svg" />
  </a>
  <a href="https://github.com/mallikcheripally/colore-js/actions">
    <img alt="build" src="https://img.shields.io/github/actions/workflow/status/mallikcheripally/colore-js/ci.yml" />
  </a>
  <a href="https://github.com/mallikcheripally/colore-js/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/colore-js.svg" />
  </a>
  <a href="https://www.npmjs.com/package/colore-js">
    <img alt="downloads" src="https://img.shields.io/npm/dm/colore-js.svg" />
  </a>
  <a href="https://codecov.io/gh/mallikcheripally/colore">
    <img alt="types included" src="https://codecov.io/gh/mallikcheripally/colore/branch/main/graph/badge.svg" />
  </a>
</div>
 <br />

<div align="center" style="font-size: 20px">
A High-Performance JavaScript Library for Color Management.
</div>

# Features

### 🔄 Color Manipulations
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Easily manipulate colors with functions to lighten, darken, saturate, desaturate, invert, and blend colors.</p>

### 🌈 Color Harmony
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generate harmonious colors using monochromatic, complementary, triadic, tetradic, and more color schemes.</p>

### 🔍 Color Validation
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Validate color formats to ensure correct color values before applying transformations.</p>

### 🎨 Color Conversions
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Convert colors between all popular color formats such as RGB, HEX, HSL, LAB, LCH, and more.</p>

### 📊 Accessibility
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Calculate contrast ratios, luminance, and other color metrics for accessibility.</p>

### 🛠 Color Parsing
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Parse individual components of colors, decompose and recompose colors.</p>

### 🚀 High Performance
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Optimized for performance with a small footprint.</p>

### ✅ No Dependencies
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Designed to be lean and efficient without any external dependencies.</p>

### 📦 Small Size
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~10 KB gzipped.</p>


# Installation

To install the Colore library, use the follow command:

```bash
npm install colore-js
```

Alternatively, if you use Yarn:

```bash
yarn add colore-js
```

# Getting Started

```javascript
import { hexToRgb, lightenColor, saturateColor, setCssVariableValue } from 'colore-js';

// Lightening a color
const lightenedRgb = lightenColor('rgb(255, 0, 0)', 20);
console.log(lightenedRgb); // Output: 'rgb(255, 51, 51)'

// Saturating a color
const saturatedRgb = saturateColor('rgb(255, 0, 0)', 50);
console.log(saturatedRgb); // Output: 'rgb(255, 51, 51)'

// Converting HEX to RGB color format
const rgbString = hexToRgb('#ff5733');
console.log(rgbString); // Output: 'rgb(255, 87, 51)'

// Setting a new CSS Variable Value
const element = document.querySelector('.my-element');
setCssVariableValue(element, '--my-variable', 'blue');

```


# API Reference

<details>
<summary>getContrastRatio</summary>

```javascript
import { getContrastRatio } from 'colore-js';

// Example with hex colors
const result = getContrastRatio('#ffffff', '#000000');
console.log(result);
// Output: { ratio: 21, ratioString: "21.00:1", isAccessible: true, level: 'AAA' }
```
</details>

<details>
<summary>generateRandomColor</summary>

```javascript
import { generateRandomColor, ColorFormats } from 'colore-js';

const randomHexColor = generateRandomColor(ColorFormats.HEX);
console.log(randomHexColor); // Output: "#a1b2c3" (example)
```
</details>

<details>
<summary>blendColors</summary>

```javascript
import { blendColors, BlendingModes } from 'colore-js';

const blendedNormal = blendColors('rgb(255, 0, 0)', 'rgb(0, 0, 255)', BlendingModes.NORMAL, 0.5);
console.log(blendedNormal); // Output: 'rgb(128, 0, 128)'
```
</details>

<details>
<summary>darkenColor</summary>

```javascript
import { darkenColor } from 'colore-js';

const darkened = darkenColor('#ff0000', 20);
console.log(darkened); // Output: '#cc0000'
```
</details>

<details>
<summary>lightenColor</summary>

```javascript
import { lightenColor } from 'colore-js';

const lightened = lightenColor('#ff0000', 20);
console.log(lightened); // Output: '#ff6666'
```
</details>

<details>
<summary>saturateColor</summary>

```javascript
import { saturateColor } from 'colore-js';

const saturated = saturateColor('#ff0000', 50);
console.log(saturated); // Output: '#ff3333'
```
</details>

<details>
<summary>setAlphaValue</summary>

```javascript
import { setAlphaValue } from 'colore-js';

const rgbaColorFromRgb = setAlphaValue('rgb(255, 0, 0)', 0.5);
console.log(rgbaColorFromRgb); // Output: 'rgba(255, 0, 0, 0.5)'
```
</details>

<details>
<summary>decomposeColor</summary>

```javascript
import { decomposeColor } from 'colore-js';

const decomposedRgb = decomposeColor('rgb(255, 0, 0)');
console.log(decomposedRgb); // Output: { r: 255, g: 0, b: 0 }
```
</details>

<details>
<summary>getCssVariableValue</summary>

```javascript
import { getCssVariableValue } from 'colore-js';

const element = document.querySelector('.my-element');
const variableValue = getCssVariableValue(element, '--my-variable');
console.log(variableValue); // Output: 'your-css-variable-value'
```
</details>

<details>
<summary>setCssVariableValue</summary>

```javascript
import { setCssVariableValue } from 'colore-js';

const element = document.querySelector('.my-element');
setCssVariableValue(element, '--my-variable', 'blue');
```
</details>

<p>and more..</p>

> See **[Documentation](https://colore.mallikcheripally.com)** for complete API reference.


### Supported Color Formats

-   Hex strings
-   Hex Alpha strings
-   HSL strings and objects
-   HSV strings and objects
-   LAB strings and objects
-   LCH strings and objects
-   Named Colors strings and objects
-   RGB strings and objects
-   RGBA strings and objects
-   XYZ strings and objects


### Contributing

We welcome contributions from the community to make Colore better. If you find any issues or have suggestions for improvements, feel free to contribute or open an issue on our [GitHub Repository](https://github.com/mallikcheripally/colore-js).

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Something Missing?

If you find any issues or have suggestions for improvements, feel free to contribute or open an issue on our [GitHub Repository](https://github.com/mallikcheripally/colore-js). We welcome contributions from the community to make Colore better.
