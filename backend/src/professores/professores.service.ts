import { Injectable } from '@nestjs/common';
import { CreateProfessoreDto } from './dto/create-professores.dto';
import { UpdateProfessoreDto } from './dto/update-professores.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProfessoresService {
  constructor(private prisma: PrismaService) {}

  create(createProfessoreDto: CreateProfessoreDto) {
    return this.prisma.professor.create({ data: createProfessoreDto });
  }

  findAll() {
    return this.prisma.professor.findMany();
    
  }

  ObterEmOrdem() {
    return this.prisma.professor.findMany({
      select: {
        nome: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });
  }

    /*obterSolicitacaoProfessor() {
    return this.prisma.professor.findFirst({
      include: {
        solicitacoes: {
          where:{
            status: 'aceito',
          
        }
      }
      
      
    },
  });
}
*/




  findOnee(idProfessor: number) {
    return this.prisma.professor.findUnique({
      where: { id: idProfessor },
    });
  }


  update(id: number, updateProfessorDto: UpdateProfessoreDto) {
    return this.prisma.professor.update({
      where: { id: id },
      data: updateProfessorDto,
    });
  }

  remove(id: number) {
    return this.prisma.professor.delete({
      where: { id: id },
    });
  }
}
