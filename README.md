# node-crud-mysql
Estudo sobre node.js

Esta aplicação consiste em um CRUD (i.e., criar, consultar, atualizar e deletar) sobre objetos do tipo _Employee_.

Inexistente a camada de serviço, as operações são feitas diretamente no banco.

# Pacotes

* express
* mysql
* body-parser
* nodemon

# Script MySQL

		CREATE DATABASE employeedb;

		CREATE TABLE employeedb.employee
		(
		    ID       int(11)      NOT NULL AUTO_INCREMENT,
		    NAME     varchar(100) NOT NULL,
		    EMP_CODE int(100)     NOT NULL,
		    SALARY   int(10) DEFAULT NULL,
		    PRIMARY KEY (ID)
		) ENGINE = InnoDB
		  DEFAULT CHARSET = utf8;
