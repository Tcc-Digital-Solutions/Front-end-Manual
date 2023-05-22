-- CreateTable
CREATE TABLE `cards` (
    `idCards` INTEGER NOT NULL AUTO_INCREMENT,
    `icone` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `fkIdioma_idx`(`fkLanguage`),
    INDEX `fkProd_idx`(`fkProd`),
    PRIMARY KEY (`idCards`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `idCategories` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`idCategories`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `idCategory` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,
    `fkCategories` INTEGER NOT NULL,

    INDEX `IDCategoriesCategory_idx`(`fkCategories`),
    INDEX `IdLanguageCategories_idx`(`fkLanguage`),
    PRIMARY KEY (`idCategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imgmontage` (
    `idImgMontage` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`idImgMontage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `infolog` (
    `idLog` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(60) NOT NULL,
    `fkUser` INTEGER NOT NULL,
    `date` DATETIME(0) NOT NULL,

    INDEX `fkUser_idx`(`fkUser`),
    PRIMARY KEY (`idLog`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `languages` (
    `idLanguages` INTEGER NOT NULL AUTO_INCREMENT,
    `sigla` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`idLanguages`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `idLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `montage` (
    `idMontage` INTEGER NOT NULL AUTO_INCREMENT,
    `img_guide` VARCHAR(60) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,

    INDEX `IDMontageProduct`(`fkProd`),
    PRIMARY KEY (`idMontage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pdf` (
    `idPDF` INTEGER NOT NULL AUTO_INCREMENT,
    `pdf` VARCHAR(60) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `fkIdioma_idx`(`fkLanguage`),
    INDEX `fkProd_idx`(`fkProd`),
    PRIMARY KEY (`idPDF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `codeId` VARCHAR(60) NOT NULL,
    `img_prod` VARCHAR(255) NOT NULL,
    `img_360` VARCHAR(255) NOT NULL,
    `audio` VARCHAR(255) NOT NULL,
    `fkCategories` INTEGER NOT NULL,

    INDEX `fkCartegories_idx`(`fkCategories`),
    PRIMARY KEY (`codeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productsinfo` (
    `idProd` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `subtitle` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `IDLanguageProducts_idx`(`fkLanguage`),
    INDEX `IDProdInfos_idx`(`fkProd`),
    PRIMARY KEY (`idProd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `idSubcategory` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `fkCategory` INTEGER NOT NULL,

    INDEX `idSubcategoryCategory_idx`(`fkCategory`),
    PRIMARY KEY (`idSubcategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtitleimage` (
    `idSubtitleImage` INTEGER NOT NULL AUTO_INCREMENT,
    `fkImg` INTEGER NOT NULL,
    `fkSubtitle` INTEGER NOT NULL,
    `fkMontage` INTEGER NOT NULL,

    INDEX `IDImage_idx`(`fkImg`),
    INDEX `IDSubtitleImageMontage_idx`(`fkMontage`),
    INDEX `IDSubtitle_idx`(`fkSubtitle`),
    PRIMARY KEY (`idSubtitleImage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtitlemontage` (
    `idSubtitle` INTEGER NOT NULL AUTO_INCREMENT,
    `subititleImg` VARCHAR(255) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `IDLanguageMontage_idx`(`fkLanguage`),
    PRIMARY KEY (`idSubtitle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table1` (
    `idCategories` INTEGER NOT NULL,
    `fkCategory` VARCHAR(45) NULL,
    `table1col` VARCHAR(45) NULL,

    PRIMARY KEY (`idCategories`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `idVideo` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `codLink` VARCHAR(100) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,

    INDEX `IDProductVideo_idx`(`fkProd`),
    INDEX `fkLanguage_idx`(`fkLanguage`),
    PRIMARY KEY (`idVideo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cards` ADD CONSTRAINT `IDLanguageCards` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cards` ADD CONSTRAINT `IDProdCards` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `IDCategoriesCategory` FOREIGN KEY (`fkCategories`) REFERENCES `categories`(`idCategories`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `IDLanguageCategory` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `infolog` ADD CONSTRAINT `fkUser` FOREIGN KEY (`fkUser`) REFERENCES `login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `montage` ADD CONSTRAINT `IDMontageProduct` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pdf` ADD CONSTRAINT `IDLanguagePDF` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pdf` ADD CONSTRAINT `IDProdPDF` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `IDCategoriesProduct` FOREIGN KEY (`fkCategories`) REFERENCES `categories`(`idCategories`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `IDProductCategory` FOREIGN KEY (`fkCategories`) REFERENCES `category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsinfo` ADD CONSTRAINT `IDLanguageProducts` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsinfo` ADD CONSTRAINT `IDProdInfos` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `IDSubcategoryCategory` FOREIGN KEY (`fkCategory`) REFERENCES `category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitleimage` ADD CONSTRAINT `IDImage` FOREIGN KEY (`fkImg`) REFERENCES `imgmontage`(`idImgMontage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitleimage` ADD CONSTRAINT `IDSubtitle` FOREIGN KEY (`fkSubtitle`) REFERENCES `subtitlemontage`(`idSubtitle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitleimage` ADD CONSTRAINT `IDSubtitleImageMontage` FOREIGN KEY (`fkMontage`) REFERENCES `montage`(`idMontage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitlemontage` ADD CONSTRAINT `IDLanguageMontage` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `IDLanguageVideo` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `IDProductVideo` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
