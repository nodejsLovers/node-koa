import {Component, Inject} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

import {TodoComponent} from "../todo/todo-list/todo-list.component"; //index
import {AdminComponent} from "../admin/admin.component" //admin
import {BlogComponent} from "../blog/blog.component" //blog
import {UserComponent} from "../user/user.component" //user
import {TagComponent} from "../tag/tag.component" //user
import {LinkComponent} from "../link/link.component" //user
import {ChangeLogComponent} from "../changeLog/changeLog.component" //user
import {GoodPluginComponent} from "../goodPlugin/goodPlugin.component"; //goodPlugin
import {GoodBlogComponent} from "../goodBlog/goodBlog.component"; //goodBlog
import {SystemSetComponent} from "../systemSet/systemSet.component"; //systemSet

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: require('./app.template.html')
})
@Routes([
    {path: '/', component: TodoComponent},
    {path: '/admin', component: AdminComponent},
    {path: '/blog', component: BlogComponent},
    {path: '/user', component: UserComponent},
    {path: '/tag', component: TagComponent},
    {path: '/link', component: LinkComponent},
    {path: '/changeLog', component: ChangeLogComponent},
    {path: '/goodBlog', component: GoodBlogComponent},
    {path: '/goodPlugin', component: GoodPluginComponent},
    {path: '/systemSet', component: SystemSetComponent}
])
export class AppComponent {

    constructor(@Inject('AUTHOR') author) {
        this.author = author;
    }

}
