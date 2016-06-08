import {AdminStoreService} from "./../../app/services/admin.service";


describe('it should have value', function () {
    it('test', function () {
        expec(require('./../../app/data/admin.json')).toBe(new AdminStoreService().admins);
    });
});