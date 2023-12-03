import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Aluno } from 'src/alunos/entities/aluno.entity';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({ data: createCursoDto });
  }

  findAll() {
    return this.prisma.curso.findMany({
      include: {
        turmas: {
          select: {
            turma: {
              select: {
                nome: true,
              },
            },
          },
        },
      },
    });
  }
  getCursosPorOrdemABC() {
    return this.prisma.curso.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
  }

  getTurmasPorCurso(cursoId: number) {
    return this.prisma.curso.findUnique({
      where: { id: cursoId },
      include: {
        turmas: {
          select: {
            turma: true,
          },
        },
      },
    });
  }

 

  getAlunosPorCurso(cursoId: number) {
    return this.prisma.curso.findUnique({
      where: { id: cursoId },
      include: {
        turmas: {
          select: {
            turma: {},
          },
        },
      },
    });
  }

  findOne(idCurso: number) {
    return this.prisma.curso.findUnique({
      where: { id: idCurso },
    });
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id: id },
      data: updateCursoDto,
    });
  }

  remove(id: number) {
    return this.prisma.curso.delete({
      where: { id: id },
    });
  }
}
