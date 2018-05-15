
import TYPE from './action-types';

const initialState = [];

export function ToDoListReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.TODO_ADD:
        state.map(task => console.log(task));
            return [...state, {
                title: action.task.title,
                completed: action.task.completed
            }] ;
        case TYPE.TODO_REMOVE:
            state[action.id]
            return;
        case TYPE.TODO_UPDATE:
            console.log(state);
            console.log(action);
            return;
        default:
            return state;
    }
}