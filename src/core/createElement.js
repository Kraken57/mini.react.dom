export function createElement(tag, props, ...children) {
    return { tag, props: { ...props, children } };
}
