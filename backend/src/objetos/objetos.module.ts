import { Module } from '@nestjs/common';
import { ObjetosService } from './objetos.service';
import { ObjetosController } from './objetos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ObjetosController],
  providers: [ObjetosService],
  imports: [PrismaModule],
})
export class ObjetosModule {}
