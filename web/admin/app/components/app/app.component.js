import {Component, Inject} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {TodoComponent} from "../todo-list/todo-list.component";

@Component({
    selector: 'todo-app',
    directives: [ROUTER_DIRECTIVES],
    template: require('./app.template.html')
})
@Routes([
    {path: '/', component: TodoComponent},
    {path: '/status/:status', component: TodoComponent}
])
export class AppComponent {

    constructor(@Inject('AUTHOR') author) {
        this.author = author;
    }

}
