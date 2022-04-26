/* 

  - Al click della funzione play generare la funzione di gioco
  - Dopo il play genero i quadratini necessari per quella difficoltà

*/

const main = document.querySelector("main");
document.getElementById("gioca").addEventListener("click", play);

function play(){
  reset();
  const difficoltà = document.getElementById("difficoltà").value;
  console.log(difficoltà);
  const grigliedifficoltà = [100,81,49];
  const numeriCelle = grigliedifficoltà[difficoltà];
  console.log(numeriCelle);

  zonagioco(numeriCelle);
}

function zonagioco(numeriCelle){

  const contenitore = document.createElement("div");
  contenitore.className = "contenitore";

  for(let i = 1; i <= numeriCelle; i++){

    const numberBox = document.createElement("div");
    numberBox.className = "number-box cella"+numeriCelle;
    numberBox.innerHTML = `<span>${i}</span>`;
    contenitore.append(numberBox);

    numberBox.addEventListener("click", numberBoxClicked);
  }

  main.append(contenitore);
} 

function numberBoxClicked(){
  this.classList.add("clicked");
}

function reset(){
  main.innerHTML = "";
}
