import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  replaySubject = new ReplaySubject(3)

  data = null

  constructor(private subjectService:SubjectService) { }
  
  ngOnInit(): void { 
     this.subjectService.getData().subscribe(e=>{
       this.data = e
     })
    
     this.replaySubject.next(5)
     this.replaySubject.next(15)

     this.replaySubject.subscribe((e)=>{
        console.log(e)
     })
     setTimeout(()=>{
      this.replaySubject.next(25)


      this.replaySubject.subscribe((e)=>{
        console.log(e)
     })
     },3000)
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
