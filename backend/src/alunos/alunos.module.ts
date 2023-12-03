import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService],
  imports: [PrismaModule],
})
export class AlunosModule {}
