import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'category',
          label: 'Analysis',
          items: [
            'api/analysis/getContrastRatio',
            'api/analysis/getLuminance',
          ],
        },
        {
          type: 'category',
          label: 'Conversions',
          items: [
            'api/conversions/cmykToRgb',
            'api/conversions/hexAlphaToHsla',
            'api/conversions/hexAlphaToHsva',
            'api/conversions/hexAlphaToRgba',
            'api/conversions/hexToHsl',
            'api/conversions/hexToHsv',
            'api/conversions/hexToRgb',
            'api/conversions/hslaToHexAlpha',
            'api/conversions/hslaToRgba',
            'api/conversions/hslToHex',
            'api/conversions/hslToRgb',
            'api/conversions/hsvaToRgba',
            'api/conversions/hsvToHex',
            'api/conversions/hsvToRgb',
            'api/conversions/labToLch',
            'api/conversions/labToRgb',
            'api/conversions/labToXyz',
            'api/conversions/lchToLab',
            'api/conversions/lchToRgb',
            'api/conversions/rgbaToHexAlpha',
            'api/conversions/rgbaToHsla',
            'api/conversions/rgbaToHsva',
            'api/conversions/rgbToCmyk',
            'api/conversions/rgbToHex',
            'api/conversions/rgbToHsl',
            'api/conversions/rgbToHsv',
            'api/conversions/rgbToLab',
            'api/conversions/rgbToLch',
            'api/conversions/rgbToXyz',
            'api/conversions/xyzToLab',
            'api/conversions/xyzToRgb',
          ],
        },
        {
          type: 'category',
          label: 'CSS Variables',
          items: [
            'api/cssVariables/getCssVariableValue',
            'api/cssVariables/setCssVariableValue',
          ],
        },
        {
          type: 'category',
          label: 'Generators',
          items: [
              'api/generators/generateInterpolatedColors',
              'api/generators/generateRandomColor',
          ]
        },
        {
          type: 'category',
          label: 'Harmony',
          items: [
            'api/harmony/analogousColors',
            'api/harmony/complementaryColor',
            'api/harmony/monochromaticColors',
            'api/harmony/tetradicColors',
            'api/harmony/triadicColors',
          ],
        },
        {
          type: 'category',
          label: 'Manipulations',
          items: [
            'api/manipulations/blendColors',
            'api/manipulations/darkenColor',
            'api/manipulations/desaturateColor',
            'api/manipulations/invertColor',
            'api/manipulations/saturateColor',
            'api/manipulations/lightenColor',
          ],
        },
        {
          type: 'category',
          label: 'Parser',
          items: [
            'api/parser/decomposeColor',
            'api/parser/detectColorFormat',
            'api/parser/parseColorToRgba',
            'api/parser/parseHex',
            'api/parser/parseHexAlpha',
            'api/parser/parseHsl',
            'api/parser/parseHsla',
            'api/parser/parseLab',
            'api/parser/parseLch',
            'api/parser/parseNamedColor',
            'api/parser/parseRgb',
            'api/parser/parseRgba',
            'api/parser/parseXyz',
            'api/parser/rebuildColorFromRgba',
            'api/parser/recomposeColor',
          ],
        },
        {
          type: 'category',
          label: 'Validations',
          items: [
            'api/validations/isValidHex',
            'api/validations/isValidHexAlpha',
            'api/validations/isValidHsl',
            'api/validations/isValidHsla',
            'api/validations/isValidLab',
            'api/validations/isValidLch',
            'api/validations/isValidNamedColor',
            'api/validations/isValidRgb',
            'api/validations/isValidRgba',
            'api/validations/isValidXyz',
          ],
        },
        {
          type: 'category',
          label: 'Utils',
          items: [
            'api/utils/BlendingModes',
            'api/utils/ColorFormats',
          ],
        },
      ],
    },
    'faq',
    'changelog',
  ],
};

export default sidebars;
