import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  breeds:[] = []

  constructor(private http: HttpClient) {

  }

  getData(): Observable<[]>{
    return this.http.get<[]>('https://dog.ceo/api/breed/hound/images')
  }
}
