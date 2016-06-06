import {Component} from "@angular/core";
import {TodoStoreService} from "../../services/todo-store.service";

@Component({
    selector: 'todo-header',
    template: require('./todo-header.template.html')
})
export class TodoHeaderComponent {
    newTodo = '';

    constructor(todoStore:TodoStoreService) {
        this._todoStore = todoStore;
    }

    addTodo() {
        if (this.newTodo.trim().length) {
            this._todoStore.add(this.newTodo);
            this.newTodo = '';
        }
    }
}
