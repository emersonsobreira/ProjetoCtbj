import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TurmasService {

  constructor(private prisma: PrismaService) {}

  create(createTurmaDto: CreateTurmaDto) {

  }

  findAll() {
    return this.prisma.turma.findMany({
      include:{
        cursos:{

        }
      }
    });
  }
  getTurmasPorOrdem(){
    return this.prisma.turma.findMany({
      orderBy:{
        nome: 'asc'
      }
    })
  }

  findOne(idTurmas: number) {
    return this.prisma.turma.findUnique({
      where: {id: idTurmas}
    });
  }
  getAlunosPorTurma(turmaId: number){
    return this.prisma.turma.findUnique({
      where:{id: turmaId},
      include:{
        alunos:{
          select:{
            turma: true
          }
         }
        }
      }
    )
  }
  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return this.prisma.turma.update({
      where:{id: id},
      data: updateTurmaDto

    });
  }

  remove(id: number) {
    return this.prisma.turma.delete({
      where: {id: id}
    });
  }
}