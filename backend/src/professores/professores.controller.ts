import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { CreateProfessoreDto } from './dto/create-professores.dto';
import { UpdateProfessoreDto } from './dto/update-professores.dto';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Post()
  create(@Body() createProfessoreDto: CreateProfessoreDto) {
    return this.professoresService.create(createProfessoreDto);
   
   
  }

  @Get()
  findAll() {
    return this.professoresService.findAll();
  }
  @Get(':id')
  findOnee(@Param('id') id: string) {
    return this.professoresService.findOnee(+id);
  }


  @Get('ordem')
  findOne(@Param('id') id: string) {
    return this.professoresService.ObterEmOrdem();
  }

  /*@Get('solicitacao')
  todas(@Param('id') id: string) {
    return this.professoresService.obterSolicitacaoProfessor();
  }
*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessoreDto: UpdateProfessoreDto) {
    return this.professoresService.update(+id, updateProfessoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);

  }
}
