import { Module } from '@nestjs/common';
import { PcsService } from './pcs.service';
import { PcsController } from './pcs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PcsController],
  providers: [PcsService],
  imports: [PrismaModule],
})
export class PcsModule {}
