import localStorage from "localStorage";
import {TodoModel} from "../models/todo.model";

export class TodoStoreService {
    todos = [];


    /**
     * 构造函数
     */
    constructor() {
        let persistedTodos = JSON.parse(localStorage.getItem('angular2-todos')) || [];

        this.todos = persistedTodos.map((todo) => {
            let ret = new TodoModel(todo.title);
            ret.completed = todo.completed;
            ret.uid = todo.uid;
            return ret;
        });
    }

    /**
     * 完成状态的项目列表
     * @param state
     * @returns {Array.<*>}
     */
    get(state) {
        return this.todos.filter((todo) => todo.completed === state.completed);
    }

    /**
     * 完成状态的数量
     * @returns {boolean}
     */
    allCompleted() {
        return this.todos.length === this.getCompleted().length;
    }

    /**
     * 把所有的项目设置成为己完成
     * @param completed
     */
    setAllTo(completed) {
        this.todos.forEach((todo) => todo.completed = completed);
        this.persist();
    }

    /**
     * 清除己完成项目
     */
    removeCompleted() {
        this.todos = this.get({completed: false});
        this.persist();
    }

    /**
     * 不知道什么鬼
     * @returns {Array.<*>|*|null}
     */
    getRemaining() {
        if (!this.remainingTodos) {
            this.remainingTodos = this.get({completed: false});
        }

        return this.remainingTodos;
    }

    /**
     * 获取己完成的项目列表
     * @returns {Array.<*>|*|null}
     */
    getCompleted() {
        if (!this.completedTodos) {
            this.completedTodos = this.get({completed: true});
        }

        return this.completedTodos;
    }

    /**
     * 切换完成和未完成的状态
     * @param uid
     */
    toggleCompletion(uid) {
        let todo = this._findByUid(uid);

        if (todo) {
            todo.completed = !todo.completed;
            this.persist();
        }
    }

    /**
     * 移除某个项目
     * @param uid
     */
    remove(uid) {
        let todo = this._findByUid(uid);

        if (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            this.persist();
        }
    }

    /**
     * 添加一个项目
     * @param title
     */
    add(title) {
        this.todos.push(new TodoModel(title));
        this.persist();
    }

    /**
     * 存储一个项目
     */
    persist() {
        this._clearCache();
        localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    }

    /**
     * 根据Id查找数据
     * @param uid
     * @returns {*}
     * @private
     */
    _findByUid(uid) {
        return this.todos.find((todo) => todo.uid == uid);
    }

    /**
     * 清除缓存
     * @private
     */
    _clearCache() {
        this.completedTodos = null;
        this.remainingTodos = null;
    }
}
