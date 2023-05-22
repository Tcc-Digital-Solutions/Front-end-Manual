USE bankmanual;

SELECT * FROM languages;
INSERT INTO languages VALUES(idLanguages, 'pt-BR');
INSERT INTO languages VALUES(idLanguages, 'en-US');

SELECT * FROM categories;
INSERT INTO categories VALUES(idCategories);
INSERT INTO categories VALUES(idCategories);

SELECT * FROM category;
INSERT INTO category VALUES(idCategory, 'Ferramentas 12V', 1, 1);
INSERT INTO category VALUES(idCategory, 'Drill 12V', 2, 1);
INSERT INTO category VALUES(idCategory, 'Ferramentas 18V', 1, 2);
INSERT INTO category VALUES(idCategory, 'Tools 18V', 2, 2);
/*INSERT INTO category VALUES(idCategory, 'Linha de Medição', 1, 3);
INSERT INTO category VALUES(idCategory, 'Acessórios', 1, 3);*/

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

/*INSERT INTO subcategory VALUES(idSubcategory, 'Niveladores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Medidores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Detectores', 3);
INSERT INTO subcategory VALUES(idSubcategory, 'Acessórios', 3);

INSERT INTO subcategory VALUES(idSubcategory, 'Perfurar e Parafusar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Serrar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Cortar e Desbastar', 4);
INSERT INTO subcategory VALUES(idSubcategory, 'Cortar e Acabamento', 4);*/

SELECT * FROM subtitlemontage;
INSERT INTO subtitlemontage values(idSubtitle, 'imagem de abacaxi', 1);
INSERT INTO subtitlemontage values(idSubtitle, 'image pineapple', 2);

SELECT * FROM imgmontage;
INSERT INTO imgmontage values(idImgMontage, 'https://manual-digital-bosch.vercel.app/assets/img-furadeira-C.0e22e509.png');
INSERT INTO imgmontage values(idImgMontage, 'https://manual-digital-bosch.vercel.app/assets/img-furadeira-B.f7108c20.png');
INSERT INTO imgmontage values(idImgMontage, 'https://manual-digital-bosch.vercel.app/assets/img-furadeira-A.f9b96574.png');

SELECT * FROM product;
INSERT INTO product VALUES('4556159000', 'https://boschferramentasbrasil.vteximg.com.br/arquivos/ids/173361-600-600/06013A50E0-000_01.jpg?v=637989368169500000', 'https://360.boschimages.com/G0000owbXWTPDjk8/embed/', 'https://65381g.ha.azioncdn.net/e/e/f/b/henriqueejulianooficial-completa-ai-part-marilia-mendonca-09f511dd.mp3', 1);
INSERT INTO product VALUES('4324290009', 'https://boschferramentasbrasil.vteximg.com.br/arquivos/ids/160699-600-600/06019H90E0---GWS-180-LI--1-.jpg?v=637671295674670000', 'https://360.boschimages.com/G0000dmYopxkSwls/embed/', 'https://65381g.ha.azioncdn.net/1/5/4/8/henriqueejulianooficial-cidade-vizinha-9f59e1e5.mp3', 2);
/*INSERT INTO product VALUES('4324290012', 'https://casaegaragem.fbitsstatic.net/img/p/estojo-kit-de-ferramentas-com-103-pecas-x103-tin-set-bosch-72792/259851-6.jpg?w=1000&h=1000&v=no-change&qs=ignore', 'https://360.boschimages.com/G0000BWXjvadoXHA/embed/', 'https://65381g.ha.azioncdn.net/c/4/8/c/henriqueejulianooficial-desbeijar-minha-boca-c2f932ee.mp3', 3);
INSERT INTO product VALUES('4324290090', 'https://boschferramentasbrasil.vteximg.com.br/arquivos/ids/171067-600-600/1619BZ0100-000_01.jpg?v=637903967607870000', 'https://360.boschimages.com/G000021Rgk4FuCvE/embed/', 'https://65381g.ha.azioncdn.net/b/c/8/9/naiaraazevedo-olha-o-que-ce-perdeu-part-rai-saia-rodada-1b627eb3.mp3', 4);
*/
SELECT * FROM productsinfo;
INSERT INTO productsinfo VALUES(idProd, 'Furadeira Angular', 'equipamento de cor azul com textura plástica', 'Ponta da Ferramenta<br/>Costas da ferramenta', '1 Furadeira GSB 13 RE<br/>1 manual de instruções<br/>1 Limitador de profundidade','4556159000', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira', 'equipamento de cor azul com textura plástica', 'Frente da Ferramenta<br/>Verso da ferramenta', '1 Limitador de profundidade<br/>1 Chave de mandril<br/>Mala de transporte', '4324290009', 1);
/*INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira Angular', 'equipamento de cor azul com textura plástica', 'Celular da Ferramenta<br/>Notebook da ferramenta<br/>Camarão', '1 manual de instruções<br/>1 Limitador de profundidade<br/>Mala de transporte', '4324290012', 1);
INSERT INTO productsinfo VALUES(idProd, 'Serra Tico-Tico', 'equipamento de cor azul com textura plástica', 'Ponta do Guaraná<br/>Costas do macarrão<br/>Arroz<br/>Feijão<br/>Batata', '1 Chave de mandril<br/>Mala de transporte', '4324290090', 1);
*/
SELECT * FROM montage;
INSERT INTO montage VALUES(idMontage, 'http://localhost:5173/src/assets/img/img-fixa-montagem.png', '4556159000');
/*INSERT INTO montage VALUES(idMontage, 'img_principal01', '4324290012');
INSERT INTO montage VALUES(idMontage, 'img_principal02', '4324290090');*/
INSERT INTO montage VALUES(idMontage, 'img_principal03', '4324290009');

SELECT * FROM subtitleimage;
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 2, 1);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 1, 1);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 3, 2, 1);

SELECT * FROM cards;
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/warranty.svg', 'Uso industrial com 2 anos de garantia.', '4324290009', 1);
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Vem com empunhadeira emborrachada para o agarre seguro e confortável', '4324290009', 1);
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Quinto card', '4556159000', 1);
/*INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Terceiro card', '4324290012', 1);
INSERT INTO cards VALUES(idCards, 'http://localhost:5173/src/assets/img/security.svg', 'Quarto card', '4324290090', 1);*/

SELECT * FROM videos;
INSERT INTO videos VALUES(idVideo, 'Video do youtube sobre x', 'Bptf9MTqsAU', 1, '4324290009');
INSERT INTO videos VALUES(idVideo, 'Video do youtube sobre y', '287OmjWqVYM', 1, '4324290009');
INSERT INTO videos VALUES(idVideo, 'Video do youtube sobre z', 'qZ83KN1G_2c', 1, '4324290009');
INSERT INTO videos VALUES(idVideo, 'Video do youtube sobre ab', 'MEtQy4c9SoE', 1, '4556159000');