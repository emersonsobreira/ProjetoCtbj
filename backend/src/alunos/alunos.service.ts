import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunosService {

  constructor(private prisma: PrismaService) {}


  create(createAlunoDto: CreateAlunoDto) {
    return this.prisma.aluno.create({data: { 
    nome: createAlunoDto.nome,
    matricula: createAlunoDto.matricula,
    email: createAlunoDto.email,
    senha: createAlunoDto.senha, 
    turma:  { 
      connect: {
        id: createAlunoDto.turma_id
      }
     },
    }
    });
  }

  findAll() {
    return this.prisma.aluno.findMany();
  }

  findAllComTurmas() {
    return this.prisma.aluno.findMany({
      include: {
        turma: true
      }
    });
  }
  // #### PARTE QUE ELTEREI. adicionei as pesquisas findAll, update, e remove ####
  findOne(id: number) {
    return this.prisma.aluno.findUnique({
      where:  { id: id }
    });
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.prisma.aluno.update({
      where: { id: id },
      data: updateAlunoDto
    });
  }

  remove(id: number) {
    return this.prisma.aluno.delete({
      where: { id: id }
    });
  }
}