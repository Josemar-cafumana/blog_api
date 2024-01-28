/*
  Warnings:

  - A unique constraint covering the columns `[media_id]` on the table `posts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[media_id]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `media_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `profiles` ADD COLUMN `media_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `medias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `public_id` VARCHAR(191) NOT NULL,
    `resource_type` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `medias_public_id_key`(`public_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `posts_media_id_key` ON `posts`(`media_id`);

-- CreateIndex
CREATE UNIQUE INDEX `profiles_media_id_key` ON `profiles`(`media_id`);

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_media_id_fkey` FOREIGN KEY (`media_id`) REFERENCES `medias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_media_id_fkey` FOREIGN KEY (`media_id`) REFERENCES `medias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
