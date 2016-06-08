import {Pipe, PipeTransform} from "@angular/core";
import moment from "moment";

@Pipe({name: 'dateFormat'})
export class DateFormat implements PipeTransform {
    transform(value, args) {
        return moment(value).format(args);
    }
}
