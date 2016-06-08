import {Component} from "@angular/core";
import {AdminStoreService} from "./../../services/admin.service";

@Component({
    selector: 'admin',
    template: require('./admin.template.html')
})
export class AdminComponent {
    constructor(adminStore:AdminStoreService) {
        this._adminStore = adminStore;
    }

    getAdmins() {
        return this._adminStore.admins;
    }
}
