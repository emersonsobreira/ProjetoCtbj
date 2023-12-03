import { PartialType } from '@nestjs/swagger';
import { CreateObjetoDto } from './create-objeto.dto';

export class UpdateObjetoDto extends PartialType(CreateObjetoDto) {}
