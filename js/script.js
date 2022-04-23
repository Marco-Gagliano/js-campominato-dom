/*
CONTINAUZIONE

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. (FATTO)
- I numeri nella lista delle bombe non possono essere duplicati. (FATTO)
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
const buttonReset = document.getElementById('reset');
//  la constante è scritta in maiuscolo perchè ritenuta una funziona globale
const GAME_BOMB = 16;

// ho creato la funzione in cui scelgo la difficolta 
buttonPlay.addEventListener('click', function(){
  
  container.innerHTML = ' ';
  container.classList.remove('pe-none');
  document.getElementById('scorepoint').innerHTML = ` `;

  let mySound = new Audio('audio/CGS_GAME_START_SOUNDS_003.wav');
  mySound.play();

  const gameDifficulty = document.getElementById('difficulty').value;

  if(gameDifficulty === 'easy'){
    init (100);
  }
  else if(gameDifficulty === 'medium'){
    init (81);
  }
  else if(gameDifficulty === 'hard'){
    init (49);
  }
  else if(gameDifficulty === 'ultra-nightmare'){
    init (20);
  }

  }
);

buttonReset.addEventListener('click', function(){
  container.innerHTML = ' ';
  
  }
);



// la funzione "init" con (num )è riferita al numero di celle da creare in base alla difficoltà
function init(num){

  const bomb = generatorBombs(num);
  
  let scorePoint = 0;

  
  // con la funzione "for" creo la condizione che genero tutti i quadratini
  for(let i = 1; i <= num; i++){

    // la funzione "createSquare" genero il quadratino e me lo restituisce
    const game = createSquare(container, num);

    game.innerNumberSquare = i;

    // ascolto l'evento click al quadratino generato
    game.addEventListener('click', function(){

      // "this" è una parola chiave che mi dice quale è l'elemento clickato 
      

      if(!bomb.includes(this.innerNumberSquare)){

        let mySound = new Audio('audio/RTG_Button_Confirm_1_ST.wav');
        mySound.play();
        
        // "this" è una parola chiave che mi dice quale è l'elemento clickato 
        this.classList.add('clicked');

        // aggiunge il valore a una variabile e assegna il risultato alla variabile
        scorePoint += 1;
      }

        else {
          const squares = document.querySelectorAll('.square');

          for(let i = 1; i <= num; i++){
            if(bomb[i] == squares[i]){

              game.classList.add('bomb');

              let mySound = new Audio('audio/RTG_Weapon_BreakBarrel_3_ST.wav');
              mySound.play();

              for(let i = 0; i < squares.length; i++){

                if(bomb.includes(squares[i].innerNumberSquare)){
                squares[i].classList.add('bomb');
              }
                document.getElementById('scorepoint').innerHTML = `Game Over, ha totalizzato ${scorePoint} Punti`;
                container.classList.add('pe-none');
              }
            }  
          }
        }
      }
    )
  }
}


function generatorBombs(numbers) {

  // creo un array in cui le bombe non son altro che un elenco di numeri
  const generateBombs = [];
  console.log(generateBombs);

  while (generateBombs.length < GAME_BOMB) {
    let flag = false;
    
    while(!flag) {
      const bomb = getRandomNumber(1, numbers);
      
      // includes permette di verificare se un elemento è presente in un array o anche in una stringa di testo
      if (!generateBombs.includes(bomb)) {
        flag = true;
        //inserisce i dati nell'array
        generateBombs.push(bomb);
      }
    }
  }
  // restitusico l'array in modo tale che non sia più vuoto
  return generateBombs;
}



// creo la funzione in cui genero i numeri dei quadrati in base alla difficoltà
function createSquare(target, num){

  const sq = document.createElement('div');
  sq.className = 'square';

  
  if(num === 100){
    sq.classList.add('square-easy');
  }
  else if(num === 81){
    sq.classList.add('square-medium');
  }
  else if(num === 49){
    sq.classList.add('square-hard');
  }
  else if(num === 20){
    sq.classList.add('square-ultra-nightmare');
  }

  // appendo l'elemento al container
  target.append(sq);

  // restituisco l'elemento creato
  return sq;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}