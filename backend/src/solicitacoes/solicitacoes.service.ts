import { Injectable } from '@nestjs/common';
import { CreateSolicitacoeDto } from './dto/create-solicitacoe.dto';
import { UpdateSolicitacoeDto } from './dto/update-solicitacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Solicitacoe } from './entities/Solicitacoe.entity';
import { CreateAlunoDto } from 'src/alunos/dto/create-aluno.dto';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professore } from 'src/professores/entities/professore.entity';

@Injectable()
export class SolicitacoesService {
  constructor(private prisma: PrismaService) {}

  create(createSolicitacoeDto: CreateSolicitacoeDto) {
    
    const data_hora_entrada = new Date().toISOString();
    const data_hora_saida = new Date().toISOString();
    
    const professorId = 1;
    const alunoId = 22;   // atribuição de valor de ID para buscar as solicitações

    return this.prisma.solicitacao.create({
      data: {        
        descricao: createSolicitacoeDto.descricao,
        data_hora_entrada: data_hora_entrada,
        data_hora_saida: data_hora_saida,
        professor: {
          connect: {
            id: professorId,
          },
        },
        aluno: {
          connect: {
            id: alunoId, // buscar ID adicionado manualmente
          },
        },
 
      },
    });
  }


  
  findAll() {
    return this.prisma.solicitacao.findMany();
  }



  findAlllistaSolicitacao() {
    return this.prisma.solicitacao.findMany({
      include: {
        objeto: true,
       
      }
    });
  }
  todasDescricao() {
    return this.prisma.solicitacao.findMany({
      select: {
        descricao: true,
      },
    });
  }
  Situacao() {
    return this.prisma.solicitacao.findMany({
      select: {
        status: true,
      },
    });
  }
  TodasDatas() {
    return this.prisma.solicitacao.findMany({
      select: {
        data_hora_entrada: true,
        data_hora_saida: true,
      },
    });
  }
  

  findOne(id: number) {
    return this.prisma.solicitacao.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateSolicitacoeDto: UpdateSolicitacoeDto) {
    return this.prisma.solicitacao.update({
      where: { id: id },
      data: updateSolicitacoeDto,
    });
  }

  remove(id: number) {
    return this.prisma.solicitacao.delete({
      where: { id: id },
    });
  }
}
