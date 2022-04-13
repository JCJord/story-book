import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public data =  new Subject<any>()

  behaviorSubject = new BehaviorSubject<any>({name:'YZJHSAH',age:150,born:1875, car:'bus'});
  
  setData(value:any){
    this.data.next(value)
  }

  getData():Observable<any>{
    return this.data.asObservable()
  }

  getBehaviorSub():Observable<any>{
    return this.behaviorSubject
  }

  setBehaviorSub(value:any): void{
    this.behaviorSubject.next(value)
  }
}
