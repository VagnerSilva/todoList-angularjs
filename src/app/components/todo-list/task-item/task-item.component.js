
import template from './task-item.component.html';
import './task-item.component.scss';

import TodoActions from '../../../store/todolist/action';

const TaskItemComponent = {
    template,
    bindings: {
        task: '=',
        deleteTask: '&',
        updateTask: '&'
    },
    controller: class TaskItemComponent {

        constructor($ngRedux) {
            this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
        }

        $onInit() {
            this.editing = false;
            this.title = '';
        }

        $onDestroy() {
            this.unsubscribe();
        }

        editTitle() {
            this.editing = true;
            this.title = this.task.title;
            console.log(this.title);
        }

        saveTitle(title) {

            if (this.editing) {
                const title = this.title.trim();
                if (title.length && title !== this.task.title) {
                    this.createTask(title)
                }
                this.stopEditing();
            }
            console.log(this.title);
        }


        remove(id) {
            console.log('remove(id)');
            console.log(id);
            this.removeTask({_id: id});
          }
        
          save() {

            this.createTask(this.title);
            // if (this.editing) {
            //   if (this.model.title !== this.title) {
            //     this.model.title = this.title;
            //     this.updateTask({task: this.model});
            //   }
            //   this.editing = false;
            // }
          }
        

        stopEditing() {
            this.editing = false;
        }

        mapStateToThis(state) {
            return {
                tasks: state.tasks
            };
        }

        toggleStatus() {

            this.task.completed = !this.task.completed;
            console.log(this.task.completed)
        }
    }
}

TaskItemComponent.$inject = ["$ngRedux"];

export default TaskItemComponent;