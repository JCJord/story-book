import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  data = null
  data2 = null
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    const newObject = {
      name:'jc',
      age:5,
      born:1990,
      car:'Fiat 141'
    }

    const newObject2 = {
      name:'jcXXXXXXXXXXXXXXXXXXXXX',
      age:5,
      born:1990,
      car:'Fiat 141'
    }
    this.subjectService.getBehaviorSub().subscribe((e)=>{
      this.data = e
      console.log(e)
    })

    setTimeout(()=>{
      
       this.subjectService.setBehaviorSub(newObject)
      

      console.log('triggerrer 1')
      
    },1000)

    
    setTimeout(()=>{
      
      this.subjectService.setData(newObject2)
     

     console.log('triggerrer 2')
     
   },2000)

   this.subjectService.getData().subscribe((e)=>{
     this.data2 = e
   })
   
    
    
  }

}
