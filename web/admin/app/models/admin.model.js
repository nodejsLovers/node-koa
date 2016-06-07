import * as uuid from "node-uuid";

export class AdminModel {
    uid;
    username;
    password;
    status;
    salt;
    authLevel;
    operator;
    created;
    updated;

    constructor(username, password, status, salt, authLevel, operator, created, updated) {
        this.uid = uuid.v4();
        this.username = username;
        this.password = password;
        this.status = status;
        this.salt = salt;
        this.authLevel = authLevel;
        this.operator = operator;
        this.created = created;
        this.updated = updated;
    }
}
