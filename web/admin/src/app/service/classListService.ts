import { Injectable } from '@angular/core';
import { Classification } from '../data/classification';
import {CLASSESLIST} from "../data/mock-classes";

@Injectable()
export class ListService {
  getLists() {
    return Promise.resolve(CLASSESLIST);
  }

  // See the "Take it slow" appendix
  getListsSlowly() {
    return new Promise<Classification[]>(resolve =>
      setTimeout(()=>resolve(CLASSESLIST), 2000) // 2 seconds
    );
  }
  //
  // getClassification(id: number) {
  //   return Promise.resolve(CLASSESLISTEROES).then(
  //     lists => lists.filter(list => list.id === id)[0]
  //   );
  // }
}
