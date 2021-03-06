import { vueComponentToHtml } from './vue';
interface Options {
    debug?: boolean;
    scale?: number;
    base64?: boolean;
}
export { Options, vueComponentToHtml };
declare const _default: (element: HTMLElement, options?: Options | undefined, callback?: ((url: string) => void) | undefined) => Promise<string>;
export default _default;
