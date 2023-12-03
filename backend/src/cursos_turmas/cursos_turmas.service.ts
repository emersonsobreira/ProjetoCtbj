import { Injectable } from '@nestjs/common';
import { CreateCursosTurmaDto } from './dto/create-cursos_turma.dto';
import { UpdateCursosTurmaDto } from './dto/update-cursos_turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosTurmasService {

  constructor(private prisma: PrismaService) {}

  create(createCursosTurmaDto: CreateCursosTurmaDto) {
    return 'This action adds a new cursosTurma';
  }

  findAll() {
    return `This action returns all cursosTurmas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cursosTurma`;
  }

  update(id: number, updateCursosTurmaDto: UpdateCursosTurmaDto) {
    return `This action updates a #${id} cursosTurma`;
  }

  remove(id: number) {
    return `This action removes a #${id} cursosTurma`;
  }
}
