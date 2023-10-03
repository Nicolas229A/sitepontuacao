const senha = "andrebananagrilo";

do {
  tentativa = prompt("Qual é a senha?");

  switch (tentativa) {
    case senha:
      alert("Parabéns!");
      break;
    default:
      alert("Errou!");
      break;
  }
} while (tentativa !== senha);

function pontuacao() {
  function contagem() {
    let garrafa = parseFloat(prompt("Quantas garrafas da água?💧 "));
    let biblia = parseFloat(prompt("Quantas bíblias?📖 "));
    let visitante = parseFloat(prompt("Quantos visitantes?🧑‍🤝‍🧑 "));
    let kgDoAmor = parseFloat(prompt("Quantos quilos do amor?💌 "));
    let oracao = parseFloat(
      prompt("Quantos estiveram presentes na oração de segunda?🙏 ")
    );
    let house = parseFloat(prompt("Quantas estiveram presentes no house?🏚️ "));
    let desafioExtra = parseFloat(
      prompt(
        "Quantos pontos extras por desafios ou outras coisas foram feitos?💯 "
      )
    );

    return (
      garrafa * 100 +
      biblia * 200 +
      visitante * 500 +
      kgDoAmor * 300 +
      oracao * 300 +
      house * 400 +
      desafioExtra
    );
  }
  do {
    opcao = parseFloat(
      prompt(
        "Qual time você deseja fazer a contagem de pontos? \n1 - Metatron (Time Branco)⚪️ \n2 - Spartanos (Time Vermelho)🔴 \n3 - Ekballo (Time Roxo)🟣 \n4 - Finalizar Contagem"
      )
    );

    switch (opcao) {
      case 1:
        totalPontos = contagem();
        alert(
          "O total de pontos feitos pelo Metatron (Time Branco) é de " +
            totalPontos
        );
        break;
      case 2:
        totalPontos = contagem();
        alert(
          "O total de pontos feitos pelos Spartanos (Time Vermelho) é de " +
            totalPontos
        );
        break;
      case 3:
        totalPontos = contagem();
        alert(
          "O total de pontos feitos pelo Ekballo (Time Roxo) é de " +
            totalPontos
        );
        break;
      case 4:
        alert("Finalizando contagem...");
        break;
      default:
        alert("Opção Inválida!");
        break;
    }
  } while (opcao !== 4);
}
