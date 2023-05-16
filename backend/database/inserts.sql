USE bankmanual;

SELECT * FROM languages;
INSERT INTO languages values(idLanguages, 'pt-BR');
INSERT INTO languages values(idLanguages, 'es-ES');

SELECT * FROM category;
INSERT INTO category VALUES(idCategory, 'Furadeira');

SELECT * FROM categories;
INSERT INTO categories VALUES(idCategories, 1, 1);

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
INSERT INTO product VALUES('4556159000', 'img_principal.png', 'audiofura.mp3','img_360.png', 1, 1);
INSERT INTO product VALUES('4324290009', 'img_principal2.png', 'audioesme.mp3','img2_360.png', 1, 1);

SELECT * FROM productsinfo;
INSERT INTO productsinfo VALUES(idProd, 'Furadeira Angular', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br/>Mala de transporte','4556159000', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br/>Mala de transporte', '4324290009', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta<br/>', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade<br/>1 Chave de mandril<br>Mala de transporte', '4324290009', 1);

SELECT * FROM cards;
INSERT INTO cards VALUES(idCards, );