import typescript from '@rollup/plugin-typescript';
import { terser } from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/kolors.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/kolors.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/kolors.umd.js',
            format: 'umd',
            name: 'Kolors',
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
