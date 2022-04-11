import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

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
    const newObject = {
      name:'jc',
      age:5,
      born:1990,
      car:'Fiat 141'
    }

    this.subjectService.setData(newObject)
  }
}
