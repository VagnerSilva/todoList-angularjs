import angular from 'angular';
import TaskItemComponent from './task-item.component';
import UtilsDirective from '../../../directives/utils.directive';

export const TaskItemModule = angular
.module('app.taskitem', [])
.component('taskItem', TaskItemComponent)
.directive('focus', UtilsDirective.create)
.name