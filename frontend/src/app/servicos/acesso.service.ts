import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface acesso {
  id?: number
  descricao: string
  
  
}

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  listaAcesso: any = []
  url = 'http://localhost:3000/acesso'
  
  constructor(private http: HttpClient) { }

  addAcesso(acesso: acesso) {
    this.listaAcesso.push(acesso);
}

getAcesso() {
  return this.http.get('http://localhost:3000/acesso/listaacesso')
}


createAcesso(dados: any) {
  return this.http.post('http://localhost:3000/acesso', dados)
}

}

