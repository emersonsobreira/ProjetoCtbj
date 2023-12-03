/*
  Warnings:

  - You are about to alter the column `senha` on the `Aluno` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to drop the column `data_hora_solicitacao` on the `Solicitacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Aluno" ALTER COLUMN "senha" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "Objeto" ALTER COLUMN "nome" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Solicitacao" DROP COLUMN "data_hora_solicitacao";

-- AlterTable
ALTER TABLE "Turma" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(50);
