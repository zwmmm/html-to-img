declare function genBase64(src: string): Promise<string>;
declare function parseHtml(html: HTMLElement): Promise<HTMLElement>;
interface options {
    scale: number;
}
declare function html2img(html: HTMLElement, options: options): Promise<string>;
export { genBase64, parseHtml, html2img, };
