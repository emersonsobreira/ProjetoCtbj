import { ApiProperty } from "@nestjs/swagger";
export class CreateProfessoreDto {

    @ApiProperty({required: true})
    nome: string;

}






