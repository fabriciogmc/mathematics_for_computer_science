-- Fatec Jacareí (Lat, Long): (-23.29489053336776, -45.966728703926805)

-- Ponto poli 1, a: -23.29712743094964, -45.96850198110727   (etec)
-- Ponto poli 1, b: -23.29423079602481,  -45.96699806248586  (bpm)
-- Ponto poli 1, c: -23.297115988416977, -45.96337486198872  (triang. lower right)

-- Ponto poli 2, c: -23.294123644377827, -45.97189008935107  (triang. upper left)

create extension if not exists postgis;

-- Criação da tabela com as geometrias de  ponto
create table localizacao (
    id  numeric primary key,
    nome varchar(100),
    geometria geometry(point, 4326) -- '4326'  world geodetic system 84 (latitude/longitude) (SRID - spatial reference identifier)
);

insert into localizacao (id, nome, geometria)
values
(1, 'Fatec JAC', ST_SetSRID(ST_MakePoint(-45.96850198110727, -23.29489053336776 ), 4326));


create table area_interesse (
    id numeric primary key,
    nome varchar(100),
    geometria geometry(polygon, 4326) -- tipo da geometria - polígono
    
);


-- observar que as coordenadas da geometria do polígono são inseridas na ordem (long1 lat1,long2 lat2, etc)
insert into area_interesse  (id, nome, geometria)
values
(1, 'Área triangular 1', ST_SetSRID(
    ST_GeomFromText('POLYGON((-45.96850198110727 -23.29712743094964,
                              -45.96699806248586 -23.29423079602481,
							  -45.96337486198872 -23.297115988416977,
							  -45.96850198110727 -23.29712743094964))'), 4326)
);

insert into area_interesse  (id, nome, geometria)
values
(2, 'Área triangular 2', ST_SetSRID(
    ST_GeomFromText('POLYGON((-45.96850198110727 -23.29712743094964,
                              -45.96699806248586 -23.29423079602481,
							  -45.97189008935107 -23.294123644377827,
							  -45.96850198110727 -23.29712743094964))'), 4326)
);


-- consulta isolada de localizações e áreas

select * from area_interesse where id = 1;
select * from area_interesse where id = 2; 
select * from area_interesse;
select * from localizacao union select * from area_interesse where id = 1;
select * from localizacao union select * from area_interesse where id = 2;


-- consulta de intersecção de ponto x polígono

select loc.nome as nome_local, area.nome as nome_area
from localizacao loc
join area_interesse area
  on ST_Within(loc.geometria, area.geometria);

