import { Injectable } from '@nestjs/common';
import { CreatePcDto } from './dto/create-pc.dto';
import { UpdatePcDto } from './dto/update-pc.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PcsService {

  constructor(private prisma: PrismaService) {}

  create(createPcDto: CreatePcDto) {
    return this.prisma.pc.create({data: createPcDto});
  }

  findAll() {
    return this.prisma.pc.findMany();
  }

  findOne(idPCs: number) {
    return this.prisma.pc.findUnique({
      where: {id: idPCs}
    })
  }
  getAcessoPC(idPCs: number){
    return this.prisma.pc.findUnique({
      where:{id: idPCs},
      include:{
      
      }
    })
  }
  
  update(id: number, updatePcDto: UpdatePcDto) {
    return this.prisma.pc.update({ 
      where: {id: id},
      data: updatePcDto 
    });
  }

  remove(id: number) {
    return this.prisma.pc.delete({
      where:{id: id}
    });
  }
}