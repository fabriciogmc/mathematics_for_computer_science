create table usuario(nome varchar(100), cidade varchar(100));
create table cidade(nome varchar(100), estado varchar(100));

insert into usuario(nome, cidade) values('fabricio', 'sjc');
insert into usuario(nome, cidade) values('ronaldo', 'bel');
insert into usuario(nome, cidade) values('ana', 'sp');
insert into usuario(nome, cidade) values('pedro', 'palmas');

insert into cidade(nome, estado) values('sjc', 'sp');
insert into cidade(nome, estado) values('bel', 'pa');
insert into cidade(nome, estado) values('sp', 'sp');
insert into cidade(nome, estado) values('manaus', 'am');

select * from cidade;
select * from usuario;

select * from usuario except select * from usuario where nome = 'fabricio';




