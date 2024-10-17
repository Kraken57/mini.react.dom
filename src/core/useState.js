// let state = [];
// let stateIndex = 0;

// export function useState(initialValue) {
//     const currentIndex = stateIndex;
//     if (!state[currentIndex]) {
//         state[currentIndex] = initialValue;
//     }
//     const setState = (newValue) => {
//         state[currentIndex] = newValue;
//         render(rootElement, rootContainer);  // Trigger re-render
//     };
//     stateIndex++;
//     return [state[currentIndex], setState];
// }

// export function resetState() {
//     stateIndex = 0;
// }



export function useState(initialValue) {
    let value = initialValue;
    const listeners = [];

    const setValue = (newValue) => {
        value = newValue;
        listeners.forEach((listener) => listener(value));
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };

    return [() => value, setValue, subscribe];
}
