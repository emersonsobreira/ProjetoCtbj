import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { AlunosModule } from './alunos/alunos.module';
import { TurmasModule } from './turmas/turmas.module';
import { CursosModule } from './cursos/cursos.module';
import { CursosTurmasModule } from './cursos_turmas/cursos_turmas.module';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { ProfessoresModule } from './professores/professores.module';
import { ObjetosModule } from './objetos/objetos.module';
import { PcsModule } from './pcs/pcs.module';
import { AcessosModule } from './acessos/acessos.module';

@Module({
  imports: [PrismaModule, AlunosModule, TurmasModule, CursosModule, CursosTurmasModule, SolicitacoesModule, ProfessoresModule, ObjetosModule, PcsModule, AcessosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
