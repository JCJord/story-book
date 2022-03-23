import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('sideNav',[
      state('open',style({
        width:'200px'
      })),
      state('closed',style({
        width:'0px'
      }))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  @Output()
  menuState = new EventEmitter<string>();

  state = 'closed'

  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    this.state === 'closed' ? this.state = 'open' : this.state = 'closed';
    this.menuState.emit(this.state)
  }
}
