import { ApiProperty } from "@nestjs/swagger";

export class CreateObjetoDto {
    @ApiProperty({required: true})
    nome: string;
}