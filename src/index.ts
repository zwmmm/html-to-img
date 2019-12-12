import { parseHtml, html2img } from './utils'

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

    const html: HTMLElement = base64 ? await parseHtml(element) : element
    document.body.appendChild(html)

    if (debug) {
        return Promise.resolve('')
    }

    const url: string = await html2img(html, { scale })
    document.body.removeChild(html)
    return url
}
