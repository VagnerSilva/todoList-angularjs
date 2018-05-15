
import template from './task-list.component.html';
import './task-list.component.scss';
import TodoActions from '../../../store/todolist/action';

const TaskListComponent = {
    template,
    controllerAs: 'taskList',
    controller: class TaskListComponent {


        constructor($ngRedux, $scope) {
            this.tasks = [{ title: 'oi' }];
            const disconnect = $ngRedux.connect(state => {
                return ({
                    tasks: state.tasks
                })
            }, TodoActions)((state, actions) => {
                console.log(this.tasks);
                this.actions = actions;
                this.tasks = state.tasks;
            });

            $scope.$on('$destroy', disconnect);
        }
    }
};

TaskListComponent.$inject = [
    '$ngRedux',
    '$scope'
];
export default TaskListComponent;