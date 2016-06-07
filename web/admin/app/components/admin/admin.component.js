import {Component} from "@angular/core";
import {RouteSegment} from "@angular/router";

import {AdminStoreService} from "./../../services/admin.service";

@Component({
    selector: 'admin',
    template: require('./admin.template.html')
})
export class AdminComponent {
    constructor(adminStore:AdminStoreService, route:RouteSegment) {
        this._adminStore = adminStore;
        this._route = route;
    }

    getAdmins() {
        return this._adminStore.admins;
    }
}
