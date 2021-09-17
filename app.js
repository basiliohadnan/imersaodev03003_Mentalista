var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
console.log("Numero secreto: " + numeroSecreto);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (tentativas < 3) {
    if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Leia com calma :)";
    } else if (chute === numeroSecreto) {
      elementoResultado.innerHTML = "Acertou!";
    } else {
      tentativas++;
      if (tentativas == 3) {
        elementoResultado.innerHTML = "Você errou mais de 3x!";
      } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML =
          "Tente novamente! Dica: o número é um pouquinho menor heh";
      } else {
        elementoResultado.innerHTML =
          "Tente novamente! Dica: o número é um pouquinho maior heh";
      }
    }
  }
}
