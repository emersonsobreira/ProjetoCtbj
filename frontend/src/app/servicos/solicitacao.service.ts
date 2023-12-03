import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface solicitacao {
  id?: number
  descricao: string
  professor_id: number
  
  
}

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  listaSolicitacao: any = []
  url = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  addSolicitacao(solicitacao: solicitacao) {
    this.listaSolicitacao.push(solicitacao);
}

getSolicitacao() {
  return this.http.get('http://localhost:3000/solicitacoes/listaSolicitacao')
}

// createSolicitacao(dados: any) {
//   return this.http.post('http://localhost:3000/solicitacao', dados)
// }
createSolicitacao(dados: any) {
  return this.http.post('http://localhost:3000/solicitacoes', dados)
}

}
