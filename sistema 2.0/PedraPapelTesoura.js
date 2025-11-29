function jogar(player) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const bot = opcoes[Math.floor(Math.random() * 3)];

  console.log("Você:", player);
  console.log("Bot :", bot);

  if (player === bot) return console.log("Empate!");

  if (
    (player === "pedra" && bot === "tesoura") ||
    (player === "papel" && bot === "pedra") ||
    (player === "tesoura" && bot === "papel")
  ) {
    return console.log("Você venceu!");
  }

  console.log("Você perdeu!");
}

jogar("papel");