/*
  Warnings:

  - Added the required column `status` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'APROVADA', 'REJEITADA');

-- AlterTable
ALTER TABLE "Solicitacao" ADD COLUMN     "status" "Status" NOT NULL;



