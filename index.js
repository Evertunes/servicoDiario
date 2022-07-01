function funcionario(
  nome,
  funcao,
  empresa,
  horainicio,
  horafinal,
  setor,
  descricao
) {
  this.nome = nome;
  this.funcao = funcao;
  this.empresa = empresa;
  this.horainicio = horainicio;
  this.horafinal = horafinal;
  this.setor = setor;
  this.descricao = descricao;
}

let serv1 = new funcionario(
  "Everton Alves",
  "Eletricista",
  "FM2C",
  "2022-06-30 07:00:00",
  "2022-06-30 17:00:00",
  "Sala dos Rolos",
  "Troca de motores dos exaustores linha 2B"
);

let serv2 = new funcionario(
    "Guilherme Santos",
    "Eletricista",
    "FM2C",
    "2022-06-30 07:00:00",
    "2022-06-30 17:00:00",
    "Caldo Líquido",
    "Desligamento de valvulase e cabos"
  );

let tabelaServ = [serv1,serv2];

console.table(tabelaServ);
