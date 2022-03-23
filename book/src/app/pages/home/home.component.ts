import { Component, OnInit } from '@angular/core';
import { DogServiceService } from 'src/app/services/dog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breeds:any = []
  details!:any;
  constructor(private dogService:DogServiceService) { }


  ngOnInit(): void {
    this.test()
  }
  test(){
    this.dogService.getData().toPromise().then((e:any)=>{
      console.log(e.message)
      this.breeds = e.message
      console.log(e.message)
    })
  }
  getDetails(e:any){
    this.details = e.id

  }
}

