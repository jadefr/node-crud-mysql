# node-crud-mysql
Estudo sobre node.js

Esta aplicação consiste em um CRUD (i.e., criar, consultar, atualizar e deletar) sobre objetos do tipo _Employee_.

Inexistente a camada de serviço, as operações são feitas diretamente no banco.

## Pacotes

* express
* mysql
* body-parser
* nodemon

## Script MySQL

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

## Rotas

| HTTP  |  URI | 
| ------------- | ------------- | 
| GET  | localhost:3000/v1/employees/  |
| GET  | localhost:3000/v1/employees/{id}  |
| POST | localhost:3000/v1/employees/  | 
| PUT  | localhost:3000/v1/employees/{id}  | 
| DELETE  | localhost:3000/v1/employees/{id}  | 

## cURL

Tem-se abaixo exemplos de CURLs

### get all

		curl --location --request GET 'localhost:3000/v1/employees/'

### get by id

		curl --location --request GET 'localhost:3000/v1/employees/2'

### post
		curl --location --request POST 'localhost:3000/v1/employees' \
		--header 'Content-Type: application/json' \
		--data-raw '{
    			"name": "Tiago",
    			"emp_code": "EMP100",
    			"salary": "5420"
		}'

### put
		curl --location --request PUT 'localhost:3000/v1/employees/3' \
		--header 'Content-Type: application/json' \
		--data-raw '{
    			"name": "João",
    			"emp_code": "EMP95",
    			"salary": "10000"
		}'
