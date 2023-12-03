import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Aluno {
  id?: number
  matricula: number
  nome: string
  turma_id: number
  email: string,
  senha: string
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  listaAlunos: any = []
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addAluno(aluno: Aluno) {
    this.listaAlunos.push(aluno);
  }

  removeAluno(id: number) {
    // return this.http.delete(this.url+'/alunos/'+id)
    return this.http.delete(`${this.url}/alunos/${id}`)
  }

  getAlunos() {
    return this.http.get('http://localhost:3000/alunos/comTurmas')
  }

  createAluno(dados: any) {
    return this.http.post('http://localhost:3000/alunos', dados)
  }

}
