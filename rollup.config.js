import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import externals from 'rollup-plugin-node-externals'

const PCKNAME = 'html2img'

function createConfig(mode) {
    const outputs = {
        umd: {
            file: `./dist/${PCKNAME}.umd.js`,
            format: 'umd',
            name: PCKNAME
        },
        esm: {
            file: `./dist/${PCKNAME}.esm.js`,
            format: 'es'
        }
    }
    const plugins = [
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
    ]
    if (mode === 'esm') {
        plugins.unshift(externals({
            deps: true
        }))
    }
    return {
        input: './src/index.ts',
        output: outputs[mode],
        plugins
    }
}


export default [
    createConfig('esm'),
    createConfig('umd'),
]
