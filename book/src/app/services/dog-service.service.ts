import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
 

  constructor(private http: HttpClient) {

  }

  getData(): Observable<[]>{
    return this.http.get<[]>('https://dog.ceo/api/breed/hound/images')
  }
}
