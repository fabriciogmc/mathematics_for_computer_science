create table usuario(nome varchar(100), cidade varchar(100));

insert into usuario(nome, cidade) values('fabricio', 'sjc');
insert into usuario(nome, cidade) values('ronaldo', 'bel');
insert into usuario(nome, cidade) values('ana', 'sp');

select * from usuario where nome = 'fabricio' union 
		 select * from usuario where nome = 'ronaldo';

