import { combineReducers } from 'redux';
import { ToDoListReducer }  from './todolist/reducer';

// list all reducers
export const RootReducer = combineReducers({
    tasks: ToDoListReducer
});
