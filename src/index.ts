import { parseHtml, html2img, setDebugStyle, setStyle } from './utils'
import { vueComponentToHtml } from './vue'

interface Options {
    debug?: boolean
    scale?: number
    base64?: boolean
}

export {
    Options,
    vueComponentToHtml
}

/**
 * 将 html 转成 img
 * @param element: HTMLElement
 * @param options: options
 */
export default async (
    element: HTMLElement,
    options?: Options
): Promise<string> => {
    const { debug = false, scale = 2, base64 = false } = options || {}
    const node: HTMLElement = <HTMLElement>element.cloneNode(true)

    setStyle(node)

    const html: HTMLElement = base64 ? await parseHtml(node) : node

    document.body.appendChild(html)

    if (debug) {
        setDebugStyle(node)
        return Promise.resolve('')
    }

    const url: string = await html2img(html, { scale })
    document.body.removeChild(html)
    return url
}
