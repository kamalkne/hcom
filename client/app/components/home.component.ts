import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `<h1>{{name}} Route!</h1><div><a routerLink="/about">Click me!</a></div>`
})
export class HomeComponent { name = 'Home'; }
