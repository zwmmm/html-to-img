import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'
import externals from 'rollup-plugin-node-externals'

const PCKNAME = 'html2img'

export default {
    input: './src/index.ts',
    output: [
        {
            file: `./dist/${PCKNAME}.umd.js`,
            format: 'umd',
            name: PCKNAME
        },
        {
            file: `./dist/${PCKNAME}.esm.js`,
            format: 'es'
        }
    ],
    external: ['html2canvas', '@babel/runtime-corejs3', 'core-js'],
    plugins: [
        externals(),
        resolve({
            extensions: [".js", ".ts"],
        }), // 引入 node_modules
        commonjs(), // 将 commonjs 的包使用 es6 模块化引入
        babel({
            extensions: [".js", ".ts"],
            exclude: "node_modules/**",
            runtimeHelpers: true
        }),
        terser(), // 压缩代码
        filesize(), // 显示打包之后的文件大小
    ]
}
