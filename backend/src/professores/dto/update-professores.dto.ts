import { PartialType } from '@nestjs/swagger';
import { CreateProfessoreDto } from './create-professores.dto';

export class UpdateProfessoreDto extends PartialType(CreateProfessoreDto) {}
