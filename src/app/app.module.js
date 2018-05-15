
import angular from 'angular';
import ngAria from 'angular-aria';
import ngRedux from 'ng-redux';

//modules
import { TodoListModule } from './components/todo-list/todo-list.module';

// components
import AppComponent from './app.component';


// reduces 
import { RootReducer }  from './store';

angular
    .module('app', [
        TodoListModule,
        ngAria,
        ngRedux
    ])
    .component('app', AppComponent)
    .config(($ngReduxProvider) => {
        'ngInject';
        $ngReduxProvider.createStoreWith(RootReducer);
      });