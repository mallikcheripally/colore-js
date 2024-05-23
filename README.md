# Kolors

[![Version](https://img.shields.io/npm/v/kolors.svg)](https://www.npmjs.com/package/kolors)
[![Build Status](https://img.shields.io/github/actions/workflow/status/mallikcheripally/kolors/build.yml)](https://github.com/mallikcheripally/kolors/actions)
[![License](https://img.shields.io/npm/l/kolors.svg)](https://github.com/mallikcheripally/kolors/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/kolors.svg)](https://www.npmjs.com/package/kolors)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Kolors is a JavaScript library for advanced color manipulation and conversion. It provides utility functions to enhance, lighten, darken, and transform colors between various formats such as HEX and RGB.

## Features

- Convert HEX to RGB and vice versa
- Convert RGB to HSL and vice versa
- Lighten and darken colors
- Enhance colors

## Installation

You can install Kolors using npm or Yarn:

```bash
npm install kolors
```
or 
```bash
yarn add kolors
```

## Usage

Here's an example of how to use Kolors in your project:

### Converting HEX to RGB
```javascript
import { hexToRgb } from 'kolors';

const rgbColor = hexToRgb('#ff5733');
console.log(rgbColor); // Output: rgb(255, 87, 51)
```

### Converting RGB to HEX
```javascript
import { rgbToHex } from 'kolors';

const hexColor = rgbToHex(255, 87, 51);
console.log(hexColor); // Output: #ff5733
```

### Converting RGB to HSL
```javascript
import { rgbToHsl } from 'kolors';

const hslColor = rgbToHsl(255, 87, 51);
console.log(hslColor); // Output: hsl(14, 100%, 60%)
```

### Converting HSL to RGB
```javascript
import { hslToRgb } from 'kolors';

const rgbColor = hslToRgb(14, 100, 60);
console.log(rgbColor); // Output: rgb(255, 87, 51)
```

## API Reference

### hexToRgb(hex: string): string

Converts a HEX color string to an RGB color string.

### rgbToHex(r: number, g: number, b: number): string

Converts RGB values to a HEX color string.

### rgbToHsl(r: number, g: number, b: number): string

Converts RGB values to an HSL color string.

### hslToRgb(h: number, s: number, l: number): string

Converts HSL values to an RGB color string.
