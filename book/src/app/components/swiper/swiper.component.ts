import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  animations: [
    trigger('divState',[
      state('normal',style({
        backgroundColor:'red',
        maxHeight:'400px'
      })),
      state('highlighted',style({
        backgroundColor:'blue',
        maxHeight:'0px'
      }))
    ])
  ]
})
export class SwiperComponent {

  @Input()
  breeds:any = []

  state = 'normal'

  swiperConfig: any = {
    slidesPerView: 2,
    spaceBetween: 10,
    initialSlide : 1,
  }


  constructor() { }

  changeState(){
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  }
}
