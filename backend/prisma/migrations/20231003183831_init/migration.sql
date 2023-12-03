/*
  Warnings:

  - You are about to drop the column `data_hora_entra` on the `Acesso` table. All the data in the column will be lost.
  - The primary key for the `Curso_Turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cursoId` on the `Curso_Turma` table. All the data in the column will be lost.
  - You are about to drop the column `turmaId` on the `Curso_Turma` table. All the data in the column will be lost.
  - You are about to drop the column `hora_entra` on the `Solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `hora_saida` on the `Solicitacao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Curso` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aluno_id` to the `Acesso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora_entrada` to the `Acesso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitacao_id` to the `Acesso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curso_id` to the `Curso_Turma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turma_id` to the `Curso_Turma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pc_id` to the `Objeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aluno_id` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora_entrada` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora_saida` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora_solicitacao` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objeto_id` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Curso_Turma" DROP CONSTRAINT "Curso_Turma_cursoId_fkey";

-- DropForeignKey
ALTER TABLE "Curso_Turma" DROP CONSTRAINT "Curso_Turma_turmaId_fkey";

-- AlterTable
ALTER TABLE "Acesso" DROP COLUMN "data_hora_entra",
ADD COLUMN     "aluno_id" INTEGER NOT NULL,
ADD COLUMN     "data_hora_entrada" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "solicitacao_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Curso_Turma" DROP CONSTRAINT "Curso_Turma_pkey",
DROP COLUMN "cursoId",
DROP COLUMN "turmaId",
ADD COLUMN     "curso_id" INTEGER NOT NULL,
ADD COLUMN     "turma_id" INTEGER NOT NULL,
ADD CONSTRAINT "Curso_Turma_pkey" PRIMARY KEY ("id", "curso_id", "turma_id");

-- AlterTable
ALTER TABLE "Objeto" ADD COLUMN     "pc_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Solicitacao" DROP COLUMN "hora_entra",
DROP COLUMN "hora_saida",
ADD COLUMN     "aluno_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data_hora_entrada" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_hora_saida" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_hora_solicitacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "objeto_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Curso_nome_key" ON "Curso"("nome");

-- AddForeignKey
ALTER TABLE "Objeto" ADD CONSTRAINT "Objeto_pc_id_fkey" FOREIGN KEY ("pc_id") REFERENCES "Pc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_objeto_id_fkey" FOREIGN KEY ("objeto_id") REFERENCES "Objeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acesso" ADD CONSTRAINT "Acesso_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acesso" ADD CONSTRAINT "Acesso_solicitacao_id_fkey" FOREIGN KEY ("solicitacao_id") REFERENCES "Solicitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso_Turma" ADD CONSTRAINT "Curso_Turma_curso_id_fkey" FOREIGN KEY ("curso_id") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso_Turma" ADD CONSTRAINT "Curso_Turma_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
