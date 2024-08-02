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

### Analysis

<details>
<summary>getContrastRatio</summary>

```javascript
import { getContrastRatio } from 'colore-js';

const result = getContrastRatio('#ffffff', '#000000');
console.log(result); // Output: { ratio: 21, ratioString: "21.00:1", isAccessible: true, level: 'AAA' }
```
</details>

<details>
<summary>getLuminance</summary>

```javascript
import { getLuminance } from 'colore-js';

const luminance = getLuminance('#ffffff');
console.log(luminance); // Output: 1
```
</details>

### Conversions

<details>
<summary>cmykToRgb</summary>

```javascript
import { cmykToRgb } from 'colore-js';

const rgbString = cmykToRgb(0, 100, 100, 0);
console.log(rgbString); // Output: "rgb(255, 0, 0)"
```
</details>

<details>
<summary>hexAlphaToHsla</summary>

```javascript
import { hexAlphaToHsla } from 'colore-js';

const hslaColor = hexAlphaToHsla('#ff5733cc');
console.log(hslaColor); // Output: "hsla(14, 100%, 60%, 0.8)"
```
</details>

<details>
<summary>hexAlphaToHsva</summary>

```javascript
import { hexAlphaToHsva } from 'colore-js';

const hsvaString = hexAlphaToHsva('#ff5733cc');
console.log(hsvaString); // Output: "hsva(11, 0.8, 1, 0.8)"
```
</details>

<details>
<summary>hexAlphaToRgba</summary>

```javascript
import { hexAlphaToRgba } from 'colore-js';

const rgbaString = hexAlphaToRgba('#FF5733CC');
console.log(rgbaString); // Output: "rgba(255, 87, 51, 0.8)"
```
</details>

<details>
<summary>hexToHexAlpha</summary>

```javascript
import { hexToHexAlpha } from 'colore-js';

const hexWithAlpha = hexToHexAlpha('#ff0000', 0.5);
console.log(hexWithAlpha); // Output: '#ff000080'
```
</details>
<p>See all <a href="https://colore.mallikcheripally.com/docs/api/conversions/cmykToRgb">Conversions</a>.</p>

### CSS Variables

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

### Generators

<details>
<summary>generateInterpolatedColors</summary>

```javascript
import { generateInterpolatedColors } from 'colore-js';

const color1 = '#ff0000';
const color2 = '#00ff00';
const steps = 5;

const interpolatedColorsStrings = generateInterpolatedColors(color1, color2, steps);
console.log(interpolatedColorsStrings);
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

### Harmony

<details>
<summary>analogousColors</summary>

```javascript
import { analogousColors } from 'colore-js';

const analogous = analogousColors('#ff0000');
console.log(analogous); // Output: ['#ff8000', '#ff0080']
```
</details>

<details>
<summary>complementaryColor</summary>

```javascript
import { complementaryColor } from 'colore-js';

const complementary = complementaryColor('#ff0000');
console.log(complementary); // Output: '#00ffff'
```
</details>

<details>
<summary>monochromaticColors</summary>

```javascript
import { monochromaticColors } from 'colore-js';

const monochromatic = monochromaticColors('#ff0000');
console.log(monochromatic); // Output: ['#4c0000', '#b20000', '#ff0000', '#ff4c4c', '#ff9999']
```
</details>

<details>
<summary>tetradicColors</summary>

```javascript
import { tetradicColors } from 'colore-js';

const tetradic = tetradicColors('#ff0000');
console.log(tetradic); // Output: ['#00ff00', '#0000ff', '#ff00ff']
```
</details>

<details>
<summary>triadicColors</summary>

```javascript
import { triadicColors } from 'colore-js';

const triadic = triadicColors('#ff0000');
console.log(triadic); // Output: ['#00ff00', '#0000ff']
```
</details>

### Manipulations

<details>
<summary>blendColors</summary>

```javascript
import { blendColors, BlendingModes } from 'colore-js';

const blended = blendColors('#ff0000', '#0000ff', BlendingModes.MULTIPLY);
console.log(blended); // Output: '#000000'
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
<summary>desaturateColor</summary>

```javascript
import { desaturateColor } from 'colore-js';

const desaturated = desaturateColor('#ff0000', 50);
console.log(desaturated); // Output: '#804040'
```
</details>

<details>
<summary>invertColor</summary>

```javascript
import { invertColor } from 'colore-js';

const invertedColor = invertColor("#ff5733");
console.log(invertedColor); // Output: "#00a8cc"
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

<p>See all <a href="https://colore.mallikcheripally.com/docs/api/manipulations/blendColors">Manipulations</a>.</p>

### Parser

<details>
<summary>decomposeColor</summary>

```javascript
import { decomposeColor } from 'colore-js';

const decomposedHex = decomposeColor('#ff0000');
console.log(decomposedHex); // Output: { r: 255, g: 0, b: 0 }
```
</details>

<details>
<summary>detectColorFormat</summary>

```javascript
import { detectColorFormat } from 'colore-js';

const formatHex = detectColorFormat('#ff0000');
console.log(formatHex); // Output: 'HEX'
```
</details>

<details>
<summary>parseColorToRgba</summary>

```javascript
import { parseColorToRgba } from 'colore-js';

const rgbaHex = parseColorToRgba('#ff0000');
console.log(rgbaHex); // Output: { r: 255, g: 0, b: 0 }
```
</details>

<details>
<summary>parseHex</summary>

```javascript
import { parseHex } from 'colore-js';

const rgb = parseHex('#ff0000');
console.log(rgb); // Output: { r: 255, g: 0, b: 0 }
```
</details>

<details>
<summary>parseHexAlpha</summary>

```javascript
import { parseHexAlpha } from 'colore-js';

const rgba = parseHexAlpha('#ff000080');
console.log(rgba); // Output: { r: 255, g: 0, b: 0, a: 0.502 }
```
</details>

<p>See all <a href="https://colore.mallikcheripally.com/docs/api/parser/decomposeColor">Parsers</a>.</p>

### Validations

<details>
<summary>isValidHex</summary>

```javascript
import { isValidHex } from 'colore-js';

console.log(isValidHex('#ff0000')); // Output: true
```
</details>

<details>
<summary>isValidHexAlpha</summary>

```javascript
import { isValidHexAlpha } from 'colore-js';

console.log(isValidHexAlpha('#ff0000ff')); // Output: true
```
</details>

<details>
<summary>isValidHsl</summary>

```javascript
import { isValidHsl } from 'colore-js';

console.log(isValidHsl('hsl(120, 100%, 50%)')); // Output: true
```
</details>

<details>
<summary>isValidHsla</summary>

```javascript
import { isValidHsla } from 'colore-js';

console.log(isValidHsla('hsla(120, 100%, 50%, 0.5)')); // Output: true
```
</details>

<details>
<summary>isValidLab</summary>

```javascript
import { isValidLab } from 'colore-js';

console.log(isValidLab('lab(50% 0% 0%)')); // Output: true
```
</details>

<p>See all <a href="https://colore.mallikcheripally.com/docs/api/validations/isValidHex">Validations</a>.</p>

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
