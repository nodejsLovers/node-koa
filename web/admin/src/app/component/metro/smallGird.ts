
import { Component,OnInit,ViewEncapsulation} from '@angular/core';
import { Classification } from '../../data/classification';
import {ListService} from "../../service/classListService";

import { MoudleComponent } from './moudle';

@Component({
  selector: 'small-gird',
  styles: [require('./smallGird.css')],
  template: require('./smallGird.html'),
  directives: [MoudleComponent]
})


export class SmallGirdComponent implements OnInit {
  smallGirdLists: Classification[];
  random:number=Math.floor(Math.random()*7+1);
  constructor(

    private listService: ListService) { }
    getLists() {
      this.listService.getLists().then(
        smallGirdLists => this.smallGirdLists = smallGirdLists
      );
    }
  ngOnInit() {
  this.getLists();
  }
}
