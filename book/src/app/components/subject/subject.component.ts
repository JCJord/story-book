import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  behaviorSubject = new BehaviorSubject<string>('Default');

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

    this.behaviorSubject.subscribe((a:any) => console.log('obs-1' + a))
    this.behaviorSubject.subscribe((a:any) => console.log('obs-2' + a))
    this.behaviorSubject.subscribe((a:any) => console.log('obs-3' + a))
    this.behaviorSubject.subscribe((a:any) => console.log('obs-4' + a))

    setTimeout(()=>{
      this.behaviorSubject.subscribe((a:any) => console.log('obs-5' + a))
    },4000)
    
    this.behaviorSubject.subscribe((a:any) => console.log('obs-4' + a))

    
    
    this.subjectService.setData(newObject)
  }
}
