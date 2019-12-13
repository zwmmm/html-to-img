import { parseHtml, html2img, setDebugStyle, setStyle } from './utils'

interface options {
    debug?: boolean
    scale?: number
    base64?: boolean
}

/**
 * 将 html 转成 img
 * @param element: HTMLElement
 * @param options: options
 */
export default async (
    element: HTMLElement,
    options?: options
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
