import { ApiProperty } from "@nestjs/swagger";

export class CreateCursoDto {
    @ApiProperty({required: true})
    nome: string;


}
