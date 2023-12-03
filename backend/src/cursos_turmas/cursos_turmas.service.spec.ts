import { Test, TestingModule } from '@nestjs/testing';
import { CursosTurmasService } from './cursos_turmas.service';

describe('CursosTurmasService', () => {
  let service: CursosTurmasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursosTurmasService],
    }).compile();

    service = module.get<CursosTurmasService>(CursosTurmasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
