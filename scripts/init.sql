CREATE DATABASE clientsdb;
USE clientsdb;

CREATE TABLE clients(
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(64) NOT NULL,
    address VARCHAR(155) NOT NULL,
    phone VARCHAR (15) NOT NULL,
    email VARCHAR (60) NOT NULL,
    is_active TINYINT NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO clients VALUES 
	(1,'Mohamed Escalante Tercero','Plaça Gallego, 477, 5º F, 15528, El Reynoso Baja','99201881','santamaría.elsa@yahoo.com',1,'2012-09-23 13:24:28','2018-06-14 11:20:20'),(2,'Asier Lozano','Plaza Marina, 151, Ático 7º, 96892, Carrasco del Pozo','99629778','mateo.jon@hotmail.com',1,'2000-12-12 01:54:23','2015-12-17 17:22:44'),(3,'Dn. Jose Manuel Adorno Hijo','Praza Escribano, 804, 7º D, 09891, San Mireles del Puerto','98909821','victoria25@yahoo.com',1,'1987-06-24 05:19:45','1971-12-02 04:38:45'),(4,'Omar Salvador','Praza Montez, 1, Entre suelo 5º, 09999, Salcido del Penedès','99515555','carmona.elsa@hotmail.com',1,'2020-04-28 08:05:16','2015-06-08 06:03:46'),(5,'Lic. Ruben Alemán','Plaça Santiago, 22, 6º C, 79310, San Hinojosa','97908236','lucas.ayala@yahoo.com',1,'1986-07-01 16:35:36','2000-12-10 23:16:39'),(6,'Marc Abad','Praza Hector, 385, Ático 5º, 00830, L\' Elizondo','98622768','saul80@hotmail.com',1,'1974-04-26 00:11:14','2018-03-02 03:24:23'),(7,'Africa Calderón','Travessera Espinal, 778, 8º, 37948, Villa Tirado de la Sierra','98490185','felizondo@yahoo.com', 1,'1992-07-19 21:45:12','1984-06-23 17:03:34'),(8,'Carla Velázquez Segundo','Avinguda Clara, 1, 1º D, 43333, L\' Santacruz','99770133','aaron85@hotmail.com',1,'1995-02-23 04:17:19','2000-10-01 05:09:07')