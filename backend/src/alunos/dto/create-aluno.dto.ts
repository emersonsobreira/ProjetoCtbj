import { ApiProperty } from "@nestjs/swagger";
export class CreateAlunoDto {
    // @ApiProperty({required: true})
    nome:       string;
    matricula:  number;
    email:      string;
    senha:      string;
    turma_id:   number;
}