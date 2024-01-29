-- DropIndex
DROP INDEX `medias_public_id_key` ON `medias`;

-- AlterTable
ALTER TABLE `medias` MODIFY `public_id` LONGTEXT NOT NULL,
    MODIFY `url` LONGTEXT NOT NULL;
