/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import {ListService} from "../service/classListService";
import { AppState } from '../service/app.service';
// import { Home } from './home';
import { SmallGirdComponent } from './metro/smallGird';
import { RouterActive } from '../router-active';
import { MenuComponent } from './menuCom/menu';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [ListService],
  directives: [RouterActive,MenuComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.css')],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',name: 'Index', component: SmallGirdComponent, useAsDefault: true },
  // { path: '/home',  name: 'Home',  component: Home },
  // // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  // { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
title = 'Database';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
