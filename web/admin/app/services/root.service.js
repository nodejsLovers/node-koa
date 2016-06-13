import {Http, Response} from "@angular/http";
import {TodoStoreService} from "./todo-store.service";
import {AdminStoreService} from "./admin.service";


export const RootService = [
    TodoStoreService,
    AdminStoreService
];