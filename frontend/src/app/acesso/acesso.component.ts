import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcessoService } from '../servicos/acesso.service';
import { Component, OnInit } from '@angular/core';
import { objetosService } from '../servicos/objetos.service';
 
@Component({ 
  selector: 'app-acesso', 
  templateUrl: './acesso.component.html', 
  styleUrls: ['./acesso.component.scss'], 
})


export class AcessoComponent  implements OnInit {
triggerResize() {
throw new Error('Method not implemented.');
}
  listaObjeto!: any
  formularioAcesso!: any
  listaAcesso!: any

fontSize: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private objetosService: objetosService,
    private service: AcessoService,
    private _snackBar: MatSnackBar
  ) {
    this.gerarForm()
  }
  gerarForm() {
    this.formularioAcesso = this.fb.group({
      descricao: '',
      professor_id: '', 
      objeto_id: ['', Validators.required],
    })
  }

    ngOnInit(): void {
      this.objetosService.getAll().subscribe(data => {
        console.log(data);
        this.listaObjeto = data;
      })
    }

    salvar(){
      console.log('Dados a serem enviados:', this.formularioAcesso.value);
  
      this.service.createAcesso(this.formularioAcesso.value).subscribe({
        next: data => {
          console.log('Resposta do servidor:', data);
          this.openSnackBar('Solicitação de acesso enviada');
          this.router.navigateByUrl('acesso');
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


  
  