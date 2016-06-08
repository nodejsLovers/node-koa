import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import "./../public/style/style.scss";
import {TodoStoreService} from "./services/todo-store.service";
import {AdminStoreService} from "./services/admin.service";
import {AppComponent} from "./components/app/app.component";

bootstrap(AppComponent, [
    TodoStoreService,
    AdminStoreService,
    ROUTER_PROVIDERS,
    {provide: 'AUTHOR', useValue: 'xiaomo'}
]);
