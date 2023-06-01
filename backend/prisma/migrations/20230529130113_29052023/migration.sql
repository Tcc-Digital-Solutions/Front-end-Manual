/*
  Warnings:

  - The primary key for the `login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idLogin` on the `login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user]` on the table `login` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `infolog` DROP FOREIGN KEY `fkUser`;

-- AlterTable
ALTER TABLE `infolog` MODIFY `fkUser` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `login` DROP PRIMARY KEY,
    DROP COLUMN `idLogin`,
    ADD PRIMARY KEY (`user`);

-- CreateIndex
CREATE UNIQUE INDEX `user_UNIQUE` ON `login`(`user`);

-- AddForeignKey
ALTER TABLE `infolog` ADD CONSTRAINT `IDLoginInfoLog` FOREIGN KEY (`fkUser`) REFERENCES `login`(`user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `infolog` RENAME INDEX `fkUser_idx` TO `IDLoginInfoLog_idx`;
