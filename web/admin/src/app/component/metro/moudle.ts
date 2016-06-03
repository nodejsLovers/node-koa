import {Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import {typographyPipe} from "../../pipe/typography";
@Component({
  selector: 'moudle-gird',
  pipes:[typographyPipe],
  styles: [require('./moudle.css')],
  template: require('./moudle.html'),
   inputs: ['menus','random']
})

export class MoudleComponent {
// @Input() menus;

random=Math.floor(Math.random()*7+1);
}
