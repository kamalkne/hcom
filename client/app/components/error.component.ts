import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{error}}</h1><div><router-outlet></router-outlet></div>`
})
export class ErrorComponent { error = 'Ahh.. Go back to some known routes..'; }
