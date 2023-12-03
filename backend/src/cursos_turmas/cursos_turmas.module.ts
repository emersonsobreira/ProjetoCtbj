import { Module } from '@nestjs/common';
import { CursosTurmasService } from './cursos_turmas.service';
import { CursosTurmasController } from './cursos_turmas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CursosTurmasController],
  providers: [CursosTurmasService],
  imports: [PrismaModule],
})
export class CursosTurmasModule {}
