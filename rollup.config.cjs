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
            file: 'dist/colore.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/colore.esm.js',
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
        terser({
            ecma: 2015,
            module: true,
            toplevel: true,
            compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2,
                dead_code: true,
            },
            mangle: {
                properties: {
                    regex: /^_/,
                },
            },
            output: {
                comments: false,
            },
        }),
    ],
};
