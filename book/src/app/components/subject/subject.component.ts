import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  data = null

  constructor(private subjectService:SubjectService) { }
  
  ngOnInit(): void { 
     this.subjectService.getData().subscribe(e=>{
       this.data = e
     })
    
  }

  changeObservableValue(){
    const newObject2 = {
      name:'XXXXXXX',
      age:987,
      born:1023,
      car:'rock'
    }
    
    this.subjectService.setData(newObject2)
    
  }


}
