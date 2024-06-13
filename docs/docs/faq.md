---
id: faq
title: FAQ
---

# FAQ

<details>
  <summary>What is the purpose of this library?</summary>
  <div class="summary-content">
    Colore library provides a comprehensive set of color manipulation and conversion utilities for use in JavaScript and TypeScript applications.
  </div>
</details>

<details>
  <summary>How do I install the library?</summary>
  <div class="summary-content">
    You can install the library using npm or yarn:
    <pre><code>npm install colore</code></pre>
    <pre><code>yarn add colore</code></pre>
  </div>
</details>

<details>
  <summary>Is this library compatible with both JavaScript and TypeScript?</summary>
  <div class="summary-content">
    Yes, the library is written in TypeScript and provides type definitions, making it compatible with both JavaScript and TypeScript.
  </div>
</details>

<details>
  <summary>How do I convert a HEX color to RGB?</summary>
  <div class="summary-content">
    You can use the <code>hexToRgb</code> function:
    <pre><code>

const rgbColor = hexToRgb('#ff5733');
console.log(rgbColor); // Output: "rgb(255, 87, 51)"
</code></pre>
  </div>
</details>

<details>
  <summary>How do I blend two colors together?</summary>
  <div class="summary-content">
    You can use the <code>blendColors</code> function (assuming such a function exists):
    <pre><code>

const blendedColor = blendColors('#ff5733', '#33ff57', 'multiply');
console.log(blendedColor); // Output: the resulting blended color
</code></pre>
  </div>
</details>

<details>
  <summary>What color formats are supported by the library?</summary>
  <div class="summary-content">
    The library supports a wide range of color formats including:
    <ul>
      <li>CMYK</li>
      <li>HEX</li>
      <li>HEX Alpha</li>
      <li>HSL</li>
      <li>HSLA</li>
      <li>HSV</li>
      <li>HSVA</li>
      <li>LAB</li>
      <li>LCH</li>
      <li>RGB</li>
      <li>RGBA</li>
      <li>XYZ</li>
      <li>Named Colors</li>
    </ul>
  </div>
</details>

<details>
  <summary>How do I contribute to the library?</summary>
  <div class="summary-content">
    Contributions are welcome! Please refer to the contribution guidelines in the repository for more details on how to get started.
  </div>
</details>

<details>
  <summary>How do I report a bug or request a feature?</summary>
  <div class="summary-content">
    You can report bugs or request features by opening an issue on our <a href="https://github.com/mallikcheripally/colore">GitHub repository</a>.
  </div>
</details>
