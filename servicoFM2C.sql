CREATE DATABASE IF NOT EXISTS servicoRelatorio;
USE servicoRelatorio;

CREATE TABLE IF NOT EXISTS `setor`
(
idSetor INT AUTO_INCREMENT NOT NULL,
nome VARCHAR(45) NOT NULL,
PRIMARY KEY (`idSetor`)
);

CREATE TABLE IF NOT EXISTS `funcionarios`
(
idFunc INT AUTO_INCREMENT NOT NULL,
nome VARCHAR(45) NOT NULL,
funcao VARCHAR(45) NOT NULL,
empresa VARCHAR(45) NOT NULL,
PRIMARY KEY (`idFunc`)
);

CREATE TABLE IF NOT EXISTS `trabalho` 
(
idTrabalho INT AUTO_INCREMENT NOT NULL,
descricao VARCHAR(200),
dia DATE,
horainicio TIME,
horafinal TIME,
idFunc INT NOT NULL,
idSetor INT NOT NULL,
PRIMARY KEY (`idTrabalho`),

CONSTRAINT `idFunc`
    FOREIGN KEY (`idFunc`)
    REFERENCES `funcionarios` (`idFunc`),
    
    CONSTRAINT `idSetor`
    FOREIGN KEY (`idSetor`)
    REFERENCES `setor` (`idSetor`));
;