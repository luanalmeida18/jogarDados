function jogarDados() {
  let numAleat1 = Math.floor(Math.random()*6) + 1;
  let numAleat2 = Math.floor(Math.random()*6) + 1;
  let randomDice1 = './img/dice' + numAleat1 + '.png'
  let randomDice2 = './img/dice' + numAleat2 + '.png' 

  let image1 = document.querySelectorAll('img')[0];
  image1.setAttribute('src', randomDice1)

  let image2 = document.querySelectorAll('img')[1];
  image2.setAttribute('src', randomDice2)

  if (randomDice1 > randomDice2) {
    document.querySelector("h1").innerHTML = "🏆 Jogador 1 Ganhou!!"
  } else if (randomDice1 < randomDice2) {
    document.querySelector("h1").innerHTML = "🏆 Jogador 2 Ganhou!!"
  } else {
    document.querySelector("h1").innerHTML = "🏆 Houve Empate 🏆!!"
  }
  }

  function zerar() {
    document.querySelector("h1").innerHTML = "Jogar Dados"
    let image1 = document.querySelectorAll('img')[0];
    image1.setAttribute('src',"./img/dice6.png");
    let image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src',"./img/dice6.png");

  }