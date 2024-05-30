/*
  Warnings:

  - You are about to drop the `orden` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `orden`;

-- CreateTable
CREATE TABLE `Orden` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `pedido` JSON NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
