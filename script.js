var numeroSecreto = parseInt(Math.random()*11);

function Chutar(){
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = " Você acertou!"
  } else if (chute > 10 || chute < 0){
    resultado.innerHTML = "Você tem que escolher um número de 0 a 10 para jogar, não pode ser maior!"
  } else if (chute > numeroSecreto){
    resultado.innerHTML = "Tente de novo, seu número foi maior que a minha escolha!"
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Tente mais uma vez, seu número foi menor que a minha escolha!"
  }else{
   resultado.innerHTML = "Você errou!😒"
  }
   
 
    
}


