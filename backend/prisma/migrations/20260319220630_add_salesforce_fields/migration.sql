-- AlterTable
ALTER TABLE "users" ADD COLUMN     "salesforce_id" TEXT,
ADD COLUMN     "salesforce_sync_at" TIMESTAMP(3);
