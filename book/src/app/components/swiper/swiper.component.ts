import { Component, OnInit } from '@angular/core';
import { lastValueFrom} from 'rxjs'
import { DogServiceService } from 'src/app/services/dog-service.service';
import SwiperCore, { Navigation } from 'swiper'

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  breeds:any = []

  swiperConfig: any = {
    slidesPerView: 2,
    spaceBetween: 10,
    initialSlide : 1,
}


  constructor(private dogService:DogServiceService) { }

  ngOnInit(): void {
    this.test()
  }
  test(){
    this.dogService.getData().toPromise().then((e:any)=>{
      console.log(e.message)
      this.breeds = e.message
    })
  }

}
