const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const alias = require('@rollup/plugin-alias');
const path = require('path');

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/kolors.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/kolors.esm.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'src') },
            ]
        }),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        terser(),
    ],
};
