import { Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProfessoresController],
  providers: [ProfessoresService],
  imports: [PrismaModule],
})
export class ProfessoresModule {}
