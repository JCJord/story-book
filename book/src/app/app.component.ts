import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book';

  menu = 'closed'

  actualState(e:string){
    this.menu = e
  }
}
