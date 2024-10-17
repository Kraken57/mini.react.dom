// import { createElement } from './core/createElement';
// import { render } from './core/render';
// import { App } from './components/App';

// const rootElement = createElement(App);
// const rootContainer = document.getElementById("root");
// render(rootElement, rootContainer);


import { createElement } from './core/createElement';
import { render } from './core/render'; // Ensure this path is correct
import { App } from './components/App';

render(createElement(App), document.getElementById('root'));

