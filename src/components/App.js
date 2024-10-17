// import { createElement } from '../core/createElement';
// import { Todo } from './Todo';
// import { useState } from '../core/useState';

// export function App() {
//     const [todos, setTodos] = useState([]);

//     function addTodo() {
//         const input = document.querySelector("input").value.trim();
//         if (input) {
//             setTodos([...todos, { title: input }]);
//             document.querySelector("input").value = ''; // Clear input
//         }
//     }

//     function deleteTodo(indexToDelete) {
//         setTodos(todos.filter((_, index) => index !== indexToDelete));
//     }

//     return createElement("div", { className: 'app-container' },
//         createElement("input", { type: "text", placeholder: "Enter a new todo", className: 'input-field' }),
//         createElement("button", { onClick: addTodo, className: 'add-btn' }, "Add Todo!"),
//         createElement("div", { className: 'todos-container' }, 
//             todos.length === 0 
//                 ? createElement("p", null, "No todos available")
//                 : todos.map((todo, index) => 
//                     createElement(Todo, { key: index, todo, index, onDelete: () => deleteTodo(index) })
//                 )
//         )
//     );
// }


// src/components/App.js

import { useState } from '../core/useState'; // Ensure this path is correct
import { createElement } from '../core/createElement'; // Ensure this path is correct
import { Todo } from './Todo'; // Adjust this path based on your project structure

export function App() {
    const [todos, setTodos] = useState([]);

    function addTodo() {
        const input = document.querySelector("input").value.trim();
        if (input) {
            setTodos([
                ...todos,
                { title: input }
            ]);
            document.querySelector("input").value = ""; // Clear input
        }
    }

    function deleteTodo(indexToDelete) {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    }

    return createElement(
        "div",
        { className: "app-container" },
        createElement("input", {
            type: "text",
            placeholder: "Enter a new todo",
            className: "input-field"
        }),
        createElement("button", {
            onClick: addTodo,
            className: "add-btn"
        }, "Add Todo!"),
        createElement(
            "div",
            { className: "todos-container" },
            todos.length === 0
                ? createElement("p", null, "No todos available")
                : todos.map((todo, index) =>
                    createElement(Todo, {
                        key: index,
                        todo,
                        index,
                        onDelete: () => deleteTodo(index)
                    })
                )
        )
    );
}
