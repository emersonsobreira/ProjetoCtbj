import { Module } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service';
import { SolicitacoesController } from './solicitacoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService],
  imports: [PrismaModule],
})
export class SolicitacoesModule {}
