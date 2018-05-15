
import angular from 'angular';

import TaskListComponent from './task-list.component';
import { TaskItemModule  }  from '../task-item/task-item.module';


export const TaskListModule = angular
.module('app.tasklist',[TaskItemModule])
.component('taskList', TaskListComponent)
.name;