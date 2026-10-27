create database db_retrogames
use database de_retrogames

create table if not exists jogos (
    id int auto_increment primary key,
    titulo varchar(150) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(150) not null,
    imagem_url varchar(500) not null,
    preco decimal(10,2) not null,
    data_cadastro timestamp default current_timestamp
);

insert into jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
values
('Super Mario Bros', 'Nintendo Entertainment System (NES)', 'Nintendo', 'https://pt.wikipedia.org/wiki/Ficheiro:New_Super_Mario_Bros._Wii_capa.png', 180.00),

('Sonic the Hedgehog', 'Sega Genesis', 'Sega', 'http://pt.wikipedia.org/wiki/Ficheiro:Sonic_the_Hedgehog_2006_capa.png', 120.90),

('Minecraft', 'PC', 'Mojang', 'https://xboxwire.thesourcemediaassets.com/sites/8/2024/05/Hero-bdef2532984d6fcafc40.jpg', 99.90);
