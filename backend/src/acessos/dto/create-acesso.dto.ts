import { ApiProperty } from "@nestjs/swagger";

export class CreateAcessoDto {

    
    descricao: string;
    data_hora_entrada: Date;
    data_hora_saida: Date;
    alunoId: number;
    solicitacaoId: number;


}