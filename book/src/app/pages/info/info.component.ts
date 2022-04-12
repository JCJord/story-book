import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  data = null

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    const newObject = {
      name:'jc',
      age:5,
      born:1990,
      car:'Fiat 141'
    }
    this.subjectService.getBehaviorSub().subscribe((e)=>{
      this.data = e
    })

    setTimeout(()=>{
      
       this.subjectService.setBehaviorSub(newObject)
      

      console.log('triggerrer 1')
      
    },1000)

    

   
    
    
  }

}
