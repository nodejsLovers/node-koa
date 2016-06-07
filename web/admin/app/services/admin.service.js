import {AdminModel} from "../models/admin.model";

export class AdminStoreService {
    admins = [];

    /**
     * 构造函数
     */
    constructor() {
        var admins = require('./../data/admin.json');
        console.log("后台用户:" + admins);
        let persistedAdmins = JSON.parse(admins) || [];
        this.admins = persistedAdmins.map((item) => {
            return new AdminModel(
                item.username,
                item.password,
                item.status,
                item.salt,
                item.authLevel,
                item.operator,
                Date.now(),
                Date.now()
            );
        });
    }
}
