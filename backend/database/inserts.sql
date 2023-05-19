USE bankmanual;

SELECT * FROM languages;
INSERT INTO languages values(idLanguages, 'pt-BR');
INSERT INTO languages values(idLanguages, 'es-ES');

SELECT * FROM category;
INSERT INTO category VALUES(idCategory, 'Ferramentas 12V', 1);
INSERT INTO category VALUES(idCategory, 'Ferramentas 18V', 1);
INSERT INTO category VALUES(idCategory, 'Linha de Medição', 1);
INSERT INTO category VALUES(idCategory, 'Acessórios', 1);

/* PUXAR ASSIM NO PRISMA
SELECT languages.sigla, subcategory.name as subcategory, category.name as category FROM subcategory INNER JOIN categories ON subcategory.fkCategory=categories.fkCategory INNER JOIN languages ON categories.fkLanguage=idLanguages INNER JOIN category ON categories.fkCategory=idCategory;
 */
SELECT * FROM subcategory;
INSERT INTO subcategory VALUES(idSubcategory, 'Furadeiras e Parafusadeiras', 1);
INSERT INTO subcategory VALUES(idSubcategory, 'Chave de Impacto', 1);
INSERT INTO subcategory VALUES(idSubcategory, 'Serra Circular', 1);
INSERT INTO subcategory VALUES(idSubcategory, 'Serra Tico-Tico', 1);
INSERT INTO subcategory VALUES(idSubcategory, 'Plaina', 1);
INSERT INTO subcategory VALUES(idSubcategory, 'Aspiradores', 1);

INSERT INTO subcategory VALUES(idSubcategory, 'Furadeiras e Parafusadeiras', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Chave de Impacto', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Serra Circular', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Serra Tico-Tico', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Plaina', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Aspiradores e Sopradores', 2);
INSERT INTO subcategory VALUES(idSubcategory, 'Bateria e Carregadores', 2);

INSERT INTO subcategory VALUES(idSubcategory, 'Niveladores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Medidores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Detectores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Acessórios', 3);

INSERT INTO subcategory VALUES(idSubcategory, 'Perfurar e Parafusar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Serrar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Cortar e Desbastar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Cortar e Acabamento', 4);

SELECT * FROM subtitlemontage;
INSERT INTO subtitlemontage values(idSubtitle, 'imagem de abacaxi', 1);
INSERT INTO subtitlemontage values(idSubtitle, 'imagen de piña', 2);

SELECT * FROM imgmontage;
INSERT INTO imgmontage values(idImgMontage, 'img_montage01.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage02.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage03.png');


SELECT * FROM subtitleimage;
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 2);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 1);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 3, 2);

SELECT * FROM montage;
INSERT INTO montage VALUES(idMontage, 'img_principal01', 1);
INSERT INTO montage VALUES(idMontage, 'img_principal01', 2);

SELECT * FROM product;
INSERT INTO product VALUES('4556159000', 'img_principal.png', 'https://360.boschimages.com/G0000BWXjvadoXHA/embed/iframe.html', 'audiofura.mp3', 1, 1);
INSERT INTO product VALUES('4324290009', 'img_principal2.png', 'img2_360.png', 'audioesme.mp3', 1, 1);
INSERT INTO product VALUES('4324290012', 'img_principal2.png', 'img2_360.png', 'audioesme.mp3', 1, 1);
INSERT INTO product VALUES('4324290090', 'img_principal2.png', 'img2_360.png', 'audioesme.mp3', 1, 1);

SELECT * FROM productsinfo;
INSERT INTO productsinfo VALUES(idProd, 'Furadeira Angular', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br/>Mala de transporte','4556159000', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br/>Mala de transporte', '4324290009', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira Angular', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br>Mala de transporte', '4324290012', 1);
INSERT INTO productsinfo VALUES(idProd, 'Serra Tico-Tico', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br>Mala de transporte', '4324290090', 1);

SELECT productsinfo.fkProd, productsinfo.name, product.img_prod FROM productsinfo INNER JOIN product ON productsinfo.fkProd=product.codeId;

SELECT * FROM cards;
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/warranty.svg', 'Uso industrial com 2 anos de garantia.', '4324290009', 1);
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Vem com empunhadeira emborrachada para o agarre seguro e confortável', '4324290009', 1);
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Terceiro card', '4324290012', 1);
