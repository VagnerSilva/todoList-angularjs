import angular from 'angular';


import { TaskFormModule } from './task-form/task-form.module';
import { TaskListModule } from './task-list/task-list.module';

export const TodoListModule = angular
    .module('app.todoList', [
        TaskFormModule,
        TaskListModule
    ])
    .name