import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {

  @Input()
  breeds:any = []

  swiperConfig: any = {
    slidesPerView: 2,
    spaceBetween: 10,
    initialSlide : 1,
}


  constructor() { }

}
