import { Injectable } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Objeto } from './entities/objeto.entity';

@Injectable()
export class ObjetosService {

  constructor(private prisma: PrismaService) {}

  create(createObjetoDto: CreateObjetoDto) {


  }
  findAll() {
    return this.prisma.objeto.findMany();
  }


  findOne(idObjeto: number) {
    return this.prisma.objeto.findUnique({
      where: {id:idObjeto }
    });
  }
      
        
        
      
  update(id: number, updateObjetoDto: UpdateObjetoDto) {
    return `This action updates a #${id} objeto`;
  }

  remove(id: number) {
    return this.prisma.objeto.delete({
      where: { id: id },
    });
  }
}