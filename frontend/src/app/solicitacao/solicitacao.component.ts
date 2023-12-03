import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProfessoresService } from '../servicos/professores.service'; 
import { objetosService } from '../servicos/objetos.service'; 
import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from '../servicos/solicitacao.service';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss'],
})
export class SolicitacaoComponent implements OnInit {
  formularioSolicitacao!: any
  listaProfessores!: any
  listaObjeto!: any
  fontSize: any
  triggerResize() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private objetosService: objetosService,  
    private professoresService: ProfessoresService,
    private service: SolicitacaoService,  
    private _snackBar: MatSnackBar
 
  
  ) {
    this.gerarForm();
  }

  ngOnInit(): void {
  
    this.objetosService.getAll().subscribe(data => {
      console.log(data);
      this.listaObjeto = data;
    })
    this.professoresService.getAll().subscribe(data => {
      console.log(data);
      this.listaProfessores = data;
    })

  }

  gerarForm() {
    this.formularioSolicitacao = this.fb.group({
       descricao: '',
       data_hora_entrada: [''],
       data_hora_saida: [''],
      professor_id: ['', Validators.required],
      objeto_id: ['', Validators.required]
    });
  }

  salvar() {
    console.log('Dados a serem enviados:', this.formularioSolicitacao.value);
  
    this.service.createSolicitacao(this.formularioSolicitacao.value).subscribe({
      next: data => {
        console.log('Resposta do servidor:', data);
        this.openSnackBar('Solicitação enviada');
        this.router.navigateByUrl('solicitacoes');
      },
      error: err => { 
        console.error('Erro ao enviar solicitação:', err);
        this.openSnackBar('Erro ao enviar solicitação');
      }
    });
  }
  
 



  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}