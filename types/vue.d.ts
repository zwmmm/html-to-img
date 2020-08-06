interface Component {
    readonly $el: Element;
    $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
}
interface Vue extends Component {
    new (options: Object): Component;
    extend: Function;
}
declare function vueComponentToHtml(Component: Component, Vue: Vue, props?: Object): Element;
export { vueComponentToHtml, Component, Vue };
