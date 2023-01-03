/*
  Warnings:

  - You are about to drop the `BuildOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BuildOrder";

-- CreateTable
CREATE TABLE "Build" (
    "id" TEXT NOT NULL,
    "matchUp" TEXT NOT NULL,
    "buildOrder" TEXT NOT NULL,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);
