import { Component, OnInit, forwardRef} from '@angular/core';
import { Classification } from '../../data/classification';
import {ListService} from "../../service/classListService";

@Component({
    selector: 'menu',
    styles: [require('./menu.css')],
    template: require('./menu.html'),
    inputs: ['smallGirdLists']
})


export class MenuComponent implements OnInit {
    smallGirdLists: Classification[];
    menuArray = [];
    menuNum: number;
    constructor(

        private listService: ListService) { }
    getLists() {
        this.listService.getLists().then(
            smallGirdLists => this.smallGirdLists = smallGirdLists
            )

    }
    ngOnInit() {
        this.getLists();
    }

    showNextMenu(data, num) {
        if (data.length != 0) {
            this.menuNum = num;
        } else {
            this.menuNum = num - 1;
        }
        this.menuArray[num - 1] = data;
        for (var i = 0; i < this.menuArray.length; i++) {
            if (i > num - 1) {
                this.menuArray[i] = [];
            }
        }


    }
}
