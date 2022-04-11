import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  data =  new Subject<any>()

  setData(value:any){
    this.data.next(value)
  }

  getData():Observable<any>{
    return this.data.asObservable()
  }
}
