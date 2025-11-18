-- createdb supermercado;
CREATE DATABASE supermercado;
-- chamando o banco de dados
USE supermercado;
-- criando tabela usuarios
CREATE TABLE usuarios(
id INT  AUTO_INCREMENT PRIMARY KEY,
usuario VARCHAR (255),
email VARCHAR(255),
senha VARCHAR(255),
tipo VARCHAR(255)
);
-- criando tabela produtos
CREATE TABLE produtos(
id INT  AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (255),
categoria VARCHAR(255),
descricao VARCHAR(255),
imagemUrl VARCHAR(255),
preco DECIMAL(6,2),
quantidade INT
);
-- consultando tabela usuarios
SELECT * FROM usuarios;

-- consultando tabela usuarios
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES (DEFAULT, "ANA", "ANAMERLO!@GMAIL.COM", "8", "adninistrador");
-- inserindo dados na tabela produtos
INSERT INTO produtos (id, nome, categoria, descricao, imagemUrl, preco, quantidade)
VALUES (DEFAULT, "celular", "acessorios", "ainda mais top", null , "22.22", 7);


-- consultando tabela usuarios
UPDATE usuarios
SET usuario = "ana", senha = "eusoutop"
WHERE id = 1;

-- consultando tabela produtos
UPDATE produtos
SET quantidade = "22", imagemUrl = " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw8WxjAVcX-0&psig=AOvVaw3lqzR8b2GVHujcbTBP04C6&ust=1763142525389000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND61frX75ADFQAAAAAdAAAAABAE"
WHERE id = 1;

-- consultando tabela usuarios
INSERT INTO usuarios (id, usuario, email, senha, tipo)
VALUES
(DEFAULT, 'ANAju', 'ANAMERLO11@GMAIL.COM', '9', 'administrador'),
(DEFAULT, 'JOÃO', 'JOAOSILVA@GMAIL.COM', '1234', 'administrador'),
(DEFAULT, 'MARIA', 'MARIA123@GMAIL.COM', 'abc123', 'administrador'),
(DEFAULT, 'CARLOS', 'CARLOS@GMAIL.COM', 'senha1', 'administrador'),
(DEFAULT, 'PAULA', 'PAULA@GMAIL.COM', 'admin8', 'administrador');


-- inserindo mais dados na tabela produtos
INSERT INTO produtos (id, nome, categoria, descricao, imagemUrl, preco, quantidade) VALUES
(DEFAULT, 'Celular X1', 'acessorios', 'ainda mais top', 'https://example.com/img/celular_x1.jpg', 799.90, 7),
(DEFAULT, 'Carregador Rápido', 'acessorios', 'carregamento 30W', 'https://example.com/img/carregador_30w.jpg', 49.90, 25),
(DEFAULT, 'Fone Bluetooth Z', 'acessorios', 'som estéreo sem fio', 'https://example.com/img/fone_z.jpg', 129.50, 15),
(DEFAULT, 'Capa Silicone', 'acessorios', 'proteção anti-queda', NULL, 29.90, 50),
(DEFAULT, 'Película Vidro', 'acessorios', 'anti-risco', 'https://example.com/img/pelicula.jpg', 19.90, 100),
(DEFAULT, 'Smartwatch S2', 'eletronicos', 'monitor cardíaco', 'https://example.com/img/smartwatch_s2.jpg', 349.00, 12),
(DEFAULT, 'Powerbank 10k', 'acessorios', 'bateria portátil 10000mAh', 'https://example.com/img/powerbank_10k.jpg', 89.90, 30),
(DEFAULT, 'Cabo USB-C', 'acessorios', '1.2m resistente', NULL, 14.90, 200),
(DEFAULT, 'Tablet M8', 'eletronicos', '8 polegadas, 3GB RAM', 'https://example.com/img/tablet_m8.jpg', 599.00, 9),
(DEFAULT, 'Teclado Mecânico', 'informatica', 'switch azul', 'https://example.com/img/teclado_mec.jpg', 279.90, 18),
(DEFAULT, 'Mouse Gamer', 'informatica', 'RGB 7200 DPI', 'https://example.com/img/mouse_gamer.jpg', 149.90, 40),
(DEFAULT, 'HD Externo 1TB', 'informatica', 'USB 3.0', 'https://example.com/img/hd_1tb.jpg', 319.00, 22),
(DEFAULT, 'Webcam 1080p', 'informatica', 'microfone integrado', NULL, 99.90, 33),
(DEFAULT, 'Adaptador HDMI', 'acessorios', 'HDMI para VGA', 'https://example.com/img/adaptador_hdmi.jpg', 39.90, 60),
(DEFAULT, 'Suporte de Mesa', 'acessorios', 'suporte ajustável para celular', 'https://example.com/img/suporte_mesa.jpg', 24.90, 80);

-- consultando tabela produtos
SELECT * FROM produtos


