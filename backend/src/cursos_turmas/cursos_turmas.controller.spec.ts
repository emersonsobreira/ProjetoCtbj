import { Test, TestingModule } from '@nestjs/testing';
import { CursosTurmasController } from './cursos_turmas.controller';
import { CursosTurmasService } from './cursos_turmas.service';

describe('CursosTurmasController', () => {
  let controller: CursosTurmasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosTurmasController],
      providers: [CursosTurmasService],
    }).compile();

    controller = module.get<CursosTurmasController>(CursosTurmasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
