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

## API Reference

### `hexToRgb(hex: string): string`
Converts a HEX color string to an RGB color string.


### `rgbToHex(r: number, g: number, b: number): string`
Converts RGB values to a HEX color string.


### `rgbToHsl(r: number, g: number, b: number): string`
Converts RGB values to an HSL color string.


### `hslToRgb(h: number, s: number, l: number): string`
Converts HSL values to an RGB color string.


### `rgbToCmyk(r: number, g: number, b: number): string`
Converts RGB values to a CMYK color string.


### `cmykToRgb(c: number, m: number, y: number, k: number): string`
Converts CMYK values to an RGB color string.


### `hexToHsl(hex: string): string`
Converts a HEX color string to an HSL color string.
