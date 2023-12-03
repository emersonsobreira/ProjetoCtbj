
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class objetosService {
  url = 'http://localhost:3000/objetos'

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.url)
  }
}
