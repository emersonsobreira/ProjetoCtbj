import { PartialType } from '@nestjs/swagger';
import { CreateCursosTurmaDto } from './create-cursos_turma.dto';

export class UpdateCursosTurmaDto extends PartialType(CreateCursosTurmaDto) {}
