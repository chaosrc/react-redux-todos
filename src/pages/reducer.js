import { TODO_ADD, TODO_DONE } from './action'



export const todoApp = (state = [], action) => {
    switch (action.type) {
        case TODO_ADD:
            return [
                ...state,
                {
                    text: action.text,
                    isDone: false
                }
            ]
        case TODO_DONE:
            return [
                ...state.slice(0, action.index),
                {
                    ...state[action.index],
                    isDone: action.value
                },
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}
