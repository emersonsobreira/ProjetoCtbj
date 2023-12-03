import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  url = 'http://localhost:3000/turmas'

  constructor(private http: HttpClient) { }

  getAll(){
   return this.http.get(this.url)
  }
}
