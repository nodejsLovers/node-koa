import {Component} from "@angular/core";
import {AdminStoreService} from "./../../services/admin.service";
import {DateFormat} from "./../../pipes/date.formate.pipe";

@Component({
    selector: 'admin',
    template: require('./admin.template.html'),
    pipes: [DateFormat]
})
export class AdminComponent {
    constructor(adminStore:AdminStoreService) {
        this._adminStore = adminStore;
    }

    getAdmins() {
        return this._adminStore.findAll();
    }
}
