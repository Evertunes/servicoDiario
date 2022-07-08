function funcionario(
  nome,
  funcao,
  empresa,
  data,
  horainicio,
  horafinal,
  setor,
  descricao,
  status
) {
  this.nome = nome;
  this.funcao = funcao;
  this.empresa = empresa;
  this.data = data;
  this.horainicio = horainicio;
  this.horafinal = horafinal;
  this.setor = setor;
  this.descricao = descricao;
  this.status = status;
}

let serv1 = new funcionario(
  "Everton Alves",
  "Eletricista",
  "FM2C",
  "2022-06-30",
  "07:00:00",
  "17:00:00",
  "Sala dos Rolos",
  "Troca de motores dos exaustores linha 2B",
  "Finalizado"
);

let serv2 = new funcionario(
    "Guilherme Santos",
    "Eletricista",
    "FM2C",
    "2022-06-30 ",
    "07:00:00",
    "17:00:00",
    "Caldo Líquido",
    "Desligamento de valvulase e cabos",
    "Não Finalizado"
  );

let tabelaServ = [serv1,serv2];

console.table(tabelaServ);
