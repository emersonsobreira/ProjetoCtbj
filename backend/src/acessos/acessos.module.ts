import { Module } from '@nestjs/common';
import { AcessosService } from './acessos.service';
import { AcessosController } from './acessos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AcessosController],
  providers: [AcessosService],
  imports: [PrismaModule],
})
export class AcessosModule {}
