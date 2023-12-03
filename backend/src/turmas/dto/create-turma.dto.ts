import { ApiProperty } from "@nestjs/swagger";
export class CreateTurmaDto {
    @ApiProperty({required: true}) 
    nome : string;
}