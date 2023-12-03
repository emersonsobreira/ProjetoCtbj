import { Injectable } from '@nestjs/common';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AcessosService {

  constructor(private prisma: PrismaService) {}

  create(createAcessoDto: CreateAcessoDto) {
    
    const data_hora_entrada = new Date().toISOString();
    const data_hora_saida = new Date().toISOString();

    const solicitacaoId = 1;
    const alunoId = 22;   // atribuição de valor de ID para buscar as solicitações

    return this.prisma.acesso.create({data: {
     descricao: createAcessoDto.descricao,
     data_hora_entrada: data_hora_entrada,
     data_hora_saida: data_hora_saida,
     aluno: {
      connect: {
        id: alunoId
      }
    },
    solicitacao: {
      connect: {
        id: solicitacaoId
      }
    },
    }
    });
  }

  findAll() {
    return this.prisma.acesso.findMany({});
  }

  findOne(id: number) {
    return this.prisma.acesso.findUnique({
      where: { id: id}
    });
  }

  update(id: number, updateAcessoDto: UpdateAcessoDto) {
    return this.prisma.acesso.update({
      where: {id: id},
      data: updateAcessoDto
    });
  }

  remove(id: number) {
    return this.prisma.acesso.delete({
      where: {id: id}
    })
  }
}
