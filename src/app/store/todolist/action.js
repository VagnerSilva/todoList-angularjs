
import TYPE from './action-types';

function createTask(task) {
    return {
        type: TYPE.TODO_ADD,
        task: { completed: false, title: task }
    };
}

function removeTask(id) {
    console.log('id');
    console.log(id);
    return {
        type: TYPE.TODO_REMOVE,
        task: { id: id }
    }
}

function updateTask(title, id) {
    return {
        type: TYPE.TODO_UPDATE,
        task: { editing: true, title: title, _id: id }
    }
}

export default { createTask, removeTask, updateTask }