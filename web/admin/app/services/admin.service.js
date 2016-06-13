import {Http, Response} from "@angular/http";

export class AdminStoreService {
    data:Object;

    /**
     * 构造函数
     */
    constructor(http:Http) {
        this.http = http;
    }

    findAll() {
        return this.http
            .get('/data/admin.json')
            .map((res:Response) => {
                this.data = res.json();
            });
    }
}
