interface Component {
    readonly $el: Element;
    $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
}

interface Vue extends Component {
    new (options: Object): Component
    extend: Function;
}

function vueComponentToHtml(
    Component: Component,
    Vue: Vue,
    props: Object = {}
): Element {
    const Fn: Vue = Vue.extend(Component)
    const instance: Component = new Fn({
        el: document.createElement('div'),
        propsData: props
    }).$mount()
    return instance.$el
}

export {
    vueComponentToHtml,
    Component,
    Vue
}
