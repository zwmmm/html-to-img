import html2canvas from 'html2canvas'

const URL_MATCH_REX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/

/**
 * 生成 base64 地址
 * @param src: string
 */
function genBase64(src: string): Promise<string> {
    return new Promise<string>(
        (resolve, rejects) => {
            // 校验 src 是否正确
            if (!src.match(URL_MATCH_REX)) return resolve(src)

            // 创建 canvas
            const canvas: HTMLCanvasElement = document.createElement('canvas')
            const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
            const img: HTMLImageElement = new Image()

            // 将图片画到 canvas 上
            img.crossOrigin = 'Anonymous'
            img.src = src
            img.onload = (): void => {
                canvas.width = img.width
                canvas.height = img.height

                ctx && ctx.drawImage(img, 0, 0)
                resolve(
                    canvas.toDataURL('image/png')
                )
            }
            img.onerror = rejects
        }
    )
}

/**
 * 解析 html 中的 img
 * @param html: HTMLElement
 * @param base64
 */
async function parseHtml(html: HTMLElement, base64: boolean): Promise<HTMLElement> {
    try {
        // 找出所有的 img
        let imgList: NodeListOf<HTMLImageElement>
        if (base64) {
            imgList = html.querySelectorAll('img')
        } else {
            imgList = html.querySelectorAll('img[data-base64]')
        }
        // 生成对应 img 的 base64地址
        const task: Array<Promise<string>> = Array.from(imgList, item => genBase64(item.src))
        const urls: Array<string> = await Promise.all(task)
        urls.forEach((url, i) => (imgList[i].src = url))
    } catch (e) {
        console.error(e, '图片错误')
        return e
    } finally {
        return html
    }
}

interface Options {
    scale: number;
}

/**
 * 将 html 转成 img
 * @param html
 * @param options
 */
async function html2img(
    html: HTMLElement,
    options: Options
): Promise<string> {
    try {
        const myCanvas: HTMLCanvasElement = document.createElement('canvas')
        const width: number = html.offsetWidth
        const height: number = html.offsetHeight
        const { scale } = options

        myCanvas.width = width * scale
        myCanvas.height = height * scale

        myCanvas.style.width = `${width}px`
        myCanvas.style.height = `${height}px`

        const canvas: HTMLCanvasElement = await html2canvas(html, {
            width,
            height,
            scale,
            useCORS: true,
            canvas: myCanvas,
            scrollX: 0,
            scrollY: 0,
            imageTimeout: 0
        })

        return canvas.toDataURL('image/jpeg', 1)
    } catch (e) {
        return Promise.resolve(e)
    }
}

function setStyle(node: HTMLElement): void {
    node.style.position = 'fixed'
    node.style.left = '-100vw'
    node.style.top = '0'
}

function setDebugStyle(node: HTMLElement): void {
    node.style.left = '0'
}



export {
    genBase64,
    parseHtml,
    html2img,
    setStyle,
    setDebugStyle,
}
