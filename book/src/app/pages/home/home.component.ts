import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { DogServiceService } from 'src/app/services/dog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breeds:any = []
  details = 0;
  constructor(private dogService:DogServiceService) { }


  ngOnInit(): void {
    this.test()
    
  

  }
  async test(){
    let data:any = await lastValueFrom(this.dogService.getData())
    this.breeds = data.message 
    console.log(data)
  }

  pipeMethod(){
    const g = this.dogService.getData().pipe(map((e:any)=>{
      

      return {
        message:['No label','no label'], status:'not running'
      }
    })).subscribe((e)=>{
      console.log(e)
    }) 
   
  }
  
  getDetails(e:any){
    this.details === 0 ? this.details = e.id : this.details = e.id+this.details;
  }
}

