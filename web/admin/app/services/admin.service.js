import {Http, Response} from "@angular/http";
import * as api from "./../url/api.url";

export class AdminStoreService {
    /**
     * 构造函数
     */
    constructor(http:Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(api.findAll).map((res:Response) => res.json().adminUsers.content);
    }
}
