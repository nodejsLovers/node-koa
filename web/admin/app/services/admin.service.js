import {AdminModel} from "../models/admin.model";

export class AdminStoreService {
    admins = [];

    /**
     * 构造函数
     */
    constructor() {
        let persistedAdmins = require('./../data/admin.json') || [];
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
