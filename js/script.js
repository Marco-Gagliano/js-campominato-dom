/*
CONTINAUZIONE

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
- I numeri nella lista delle bombe non possono essere duplicati.
- In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
- La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
  **BONUS:**
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
**Consigli del giorno:** :party_wizard:
****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/




const container = document.querySelector('.container');
const buttonPlay = document.getElementById('play');
let numberList = [];

//  la constante è scritta in maiuscolo perchè ritenuta una funziona globale
const GAME_BOMB = 16;

// ho creato la funzione in cui scelgo la difficolta 
buttonPlay.addEventListener('click', function(){
  
  container.innerHTML = ' ';
  numberList = [];
  const gameDifficulty = document.getElementById('difficulty').value;

  // ho creato la const per indicare le bombe che verranno inserite qunado faccio sclego la difficoltà e far partire il gioco, da lì creo poi una funzione
  const bombs = generatorBombs();

  if(gameDifficulty === 'easy'){
    init (49)
  }
  else if(gameDifficulty === 'medium'){
    init (81)
  }
  else if(gameDifficulty === 'hard'){
    init (100)
  }
  else if(gameDifficulty === 'ultra-nightmare'){
    init (225)
  }
});

function generatorBombs() {

  


}

// la funzione "init" con (num )è riferita al numero di celle da creare in base alla difficoltà
function init(num){
    

// con la funzione "for" creo la condizione che genero tutti i quadratini
for(let i = 1; i <= num; i++){

  // la funzione "createSquare" genero il quadratino e me lo restituisce
  const game = createSquare(container, num)
  
  // genero dentro lo span in HTML il Numero dentro il quadrato
  game.innerHTML = `<span>${i}</span>`;

  // ascolto l'evento click al quadratino generato
  game.addEventListener('click', function(){

    // "this" è una parola chiave che mi dice quale è l'elemento clickato 
    this.classList.add('clicked');
    })}
}

// creo la funzione in cui genero i numeri dei quadrati in base alla difficoltà
function createSquare(target, num){

  const sq = document.createElement('div');
  sq.className = 'square';

  // ottengo un numero univoco
  // const number = getUniqueRandomNumber(1, 100);
  
  if(num === 49){
    sq.classList.add('square-easy');
  }
  else if(num === 81){
    sq.classList.add('square-medium');
  }
  else if(num === 100){
    sq.classList.add('square-hard');
  }
  else if(num === 225){
    sq.classList.add('square-ultra-nightmare');
  }

  // aggiungo la classe even o odd in base al calcolo della funzione  dedicata
  // sq.classList.add(getOddEven(number));

  // appendo l'elemento al container
  target.append(sq);

  // restituisco l'elemento creato
  return sq;
}