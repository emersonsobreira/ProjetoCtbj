import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcsService } from './pcs.service';
import { CreatePcDto } from './dto/create-pc.dto';
import { UpdatePcDto } from './dto/update-pc.dto';

@Controller('pcs')
export class PcsController {
  constructor(private readonly pcsService: PcsService) {}

  @Post()
  create(@Body() createPcDto: CreatePcDto) {
    return this.pcsService.create(createPcDto);
  }

  @Get()
  findAll() {
    return this.pcsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcDto: UpdatePcDto) {
    return this.pcsService.update(+id, updatePcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcsService.remove(+id);
  }
}