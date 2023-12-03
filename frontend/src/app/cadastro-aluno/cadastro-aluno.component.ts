import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../servicos/aluno.service';
import { TurmaService } from '../servicos/turma.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {

  formularioAluno!: any
  listaTurmas!: any

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: AlunoService,
    private turmaService: TurmaService,
    private _snackBar: MatSnackBar
  ) {
    this.gerarForm()
  }

  ngOnInit(): void {
    this.turmaService.getAll().subscribe(data => {
      console.log(data);
      this.listaTurmas = data
    })
  }

  gerarForm() {
    this.formularioAluno = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      turma_id: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  salvar() {
    console.log(this.formularioAluno.value);

    this.service.createAluno(this.formularioAluno.value).subscribe({
      next: data => {
        console.log(data);
        this.openSnackBar('Cadastrado com sucesso!')
        this.router.navigateByUrl('')
      },
      error: err => { console.log("Ocorreu um erro: " + err); }
    })

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}
