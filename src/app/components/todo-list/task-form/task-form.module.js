import angular from 'angular';
import { TaskFormComponent, TaskForm } from './task-form.component';
import './task-form.component.scss';

export const TaskFormModule = angular
    .module('app.taskForm', [])
    .component('taskForm', TaskFormComponent)
    .controller('TaskForm', TaskForm)
    .name;