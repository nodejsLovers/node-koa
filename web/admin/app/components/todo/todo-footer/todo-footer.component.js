import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteSegment} from "@angular/router";
import {TodoStoreService} from "../../../services/todo-store.service";

@Component({
    selector: 'todo-footer',
    template: require('./todo-footer.template.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class TodoFooterComponent {

    /**
     * 构造函数
     * @param todoStore
     * @param route
     */
    constructor(todoStore:TodoStoreService, route:RouteSegment) {
        this._todoStore = todoStore;
        this._route = route;
    }

    /**
     * 移除所有己完成的项目
     */
    removeCompleted() {
        this._todoStore.removeCompleted();
    }

    /**
     * 获取所有项目的数量
     * @returns {*}
     */
    getCount() {
        return this._todoStore.todos.length;
    }

    getRemainingCount() {
        return this._todoStore.getRemaining().length;
    }

    /**
     * 获取己完成的项目数量
     * @returns {boolean}
     */
    hasCompleted() {
        return this._todoStore.getCompleted().length > 0;
    }

    /**
     * 获取状态
     * @returns {*|string}
     */
    getStatus() {
        return this._route.parameters.status || '';
    }
}
