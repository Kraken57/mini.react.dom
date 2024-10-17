import { createElement } from '../core/createElement';

export function Todo({ todo, index, onDelete }) {
    return createElement("div", { className: 'todo-item' },
        createElement("h1", null, `${index + 1}. ${todo.title}`),
        createElement("button", { onClick: onDelete, className: 'delete-btn' }, "Delete")
    );
}
