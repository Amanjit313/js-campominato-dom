/* 

  - Al click della funzione play generare la funzione di gioco
  - Dopo il play genero i quadratini necessari per quella difficoltà

*/

const main = document.querySelector("main");
document.getElementById("gioca").addEventListener("click", play);
const bombaNumeri = 16;
const bombe = [];

// Imposto le varie difficoltà alle option in modo tale che io nella prossima funziona possa stampare tot celle indicate dalle const, ps il value deve combaciare a 0-1-2 per andare
function play() {
  reset();
  const difficoltà = document.getElementById("difficoltà").value;
  console.log(difficoltà);
  const grigliedifficoltà = [100, 81, 49];
  const numeriCelle = grigliedifficoltà[difficoltà];
  
  bombeGeneratore(numeriCelle);

  console.log(numeriCelle);
  
  zonagioco(numeriCelle);
}

// Stampo le celle e i suoi numeri
function zonagioco(numeriCelle) {

  const contenitore = document.createElement("div");
  contenitore.className = "contenitore";

  for (let i = 1; i <= numeriCelle; i++) {

    let number = i;
    const numberBox = document.createElement("div");
    numberBox.className = "number-box cella" + numeriCelle;
    numberBox.innerHTML = `<span>${number}</span>`;

    contenitore.append(numberBox);

    numberBox.addEventListener("click", numberBoxClicked);
  }

  main.append(contenitore);
}

// Aggiungo la distinzione della cella cliccata
function numberBoxClicked() {
  this.classList.add("clicked");
  
  console.log(this.innerText);

  let number = parseInt(this.innerText);
  console.log(bombe);
  if( !bombe.includes(number) ){
    console.log("Sei salvo", number);
  }else{
    this.classList.add("bombacostum");
    fineGioco(number);
  }

}

function fineGioco(){
  console.log("Fine");
}

// Ciclo per generare le bombe 
function bombeGeneratore(numeriCelle) {

  while(bombe.length < bombaNumeri){
    const bomba = generateRandomInt(1, numeriCelle);
    
    console.log("bomba", bomba);
    // Facendo così non faccio ripetere le stesse bombe
    if(!bombe.includes(bomba)){
      bombe.push(bomba);
    }
  }

}

function reset() {
  main.innerHTML = "";
}

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

