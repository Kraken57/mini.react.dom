// let rootInstance = null;

// export function render(element, container) {
//     const prevInstance = rootInstance;
//     const nextInstance = reconcile(container, prevInstance, element);
//     rootInstance = nextInstance;
// }

// function reconcile(parentDom, instance, element) {
//     if (instance == null) {
//         const newInstance = instantiate(element);
//         parentDom.appendChild(newInstance.dom);
//         return newInstance;
//     } else if (element == null) {
//         parentDom.removeChild(instance.dom);
//         return null;
//     } else if (instance.element.tag !== element.tag) {
//         const newInstance = instantiate(element);
//         parentDom.replaceChild(newInstance.dom, instance.dom);
//         return newInstance;
//     } else {
//         updateDomProperties(instance.dom, instance.element.props, element.props);
//         instance.childInstances = reconcileChildren(instance, element);
//         instance.element = element;
//         return instance;
//     }
// }

// function instantiate(element) {
//     const { tag, props } = element;
//     const dom = document.createElement(tag);
//     updateDomProperties(dom, [], props);
    
//     const childElements = props.children || [];
//     const childInstances = childElements.map(instantiate);
//     const childDoms = childInstances.map(child => child.dom);
//     childDoms.forEach(childDom => dom.appendChild(childDom));

//     return { dom, element, childInstances };
// }

// function updateDomProperties(dom, prevProps, nextProps) {
//     // Handle setting attributes or event listeners here
// }



// src/render.js

function render(element, container) {
    container.innerHTML = ''; // Clear container
    const dom = createDOM(element);
    container.appendChild(dom);
}

function createDOM(element) {
    if (typeof element === "string") {
        return document.createElement(element); // Create HTML element if string
    }

    // Handle components
    if (typeof element.type === "function") {
        const component = new element.type(); // Create instance of component
        return createDOM(component.render()); // Assuming component has a render method
    }

    // Handle functional components directly
    return createDOM(element.type(element.props)); // Render functional component
}
