import {AdminStoreService} from './../../app/services/admin.service';


describe('it should have value',function () {
    it('test',function () {
        expec(undefined).toBe(AdminStoreService.getAdmins());
    });
});