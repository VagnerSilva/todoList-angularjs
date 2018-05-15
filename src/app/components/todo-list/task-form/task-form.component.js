
import template from './task-form.component.html'
import './task-form.component.scss'

import TodoActions from '../../../store/todolist/action';

export const TaskFormComponent = {
  bindings: {
    createTask: '&'
  },
  template,
  controller: 'TaskForm'
};

export class TaskForm {

  submit() {



    this.createTask({ title: this.title });
    this.title = '';
  }


}