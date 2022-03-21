import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom} from 'rxjs'
import { DogServiceService } from 'src/app/services/dog-service.service';
import SwiperCore, { Navigation } from 'swiper'

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
