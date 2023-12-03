import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AcessoComponent } from './acesso/acesso.component';

const routes: Routes = [
  {path: '', component: AlunosComponent},
  {path: 'cadastro', component: CadastroAlunoComponent},
  {path: 'solicitacao', component: SolicitacaoComponent},
  {path: 'acesso', component: AcessoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
