import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosTurmasService } from './cursos_turmas.service';
import { CreateCursosTurmaDto } from './dto/create-cursos_turma.dto';
import { UpdateCursosTurmaDto } from './dto/update-cursos_turma.dto';

@Controller('cursos-turmas')
export class CursosTurmasController {
  constructor(private readonly cursosTurmasService: CursosTurmasService) {}

  @Post()
  create(@Body() createCursosTurmaDto: CreateCursosTurmaDto) {
    return this.cursosTurmasService.create(createCursosTurmaDto);
  }

  @Get()
  findAll() {
    return this.cursosTurmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosTurmasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursosTurmaDto: UpdateCursosTurmaDto) {
    return this.cursosTurmasService.update(+id, updateCursosTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosTurmasService.remove(+id);
  }
}
