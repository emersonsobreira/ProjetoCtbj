import { PartialType } from '@nestjs/swagger';
import { CreateSolicitacoeDto } from './create-solicitacoe.dto';

export class UpdateSolicitacoeDto extends PartialType(CreateSolicitacoeDto) {}
