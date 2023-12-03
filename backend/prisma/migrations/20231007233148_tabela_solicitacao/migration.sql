-- DropForeignKey
ALTER TABLE "Solicitacao" DROP CONSTRAINT "Solicitacao_objeto_id_fkey";

-- AlterTable
ALTER TABLE "Solicitacao" ALTER COLUMN "objeto_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_objeto_id_fkey" FOREIGN KEY ("objeto_id") REFERENCES "Objeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
