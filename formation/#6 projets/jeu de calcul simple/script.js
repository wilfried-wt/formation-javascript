var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
// var Message = document.querySelector('message');
let score = document.querySelector('score');
// var link = document.querySelector('link');
var section = document.querySelector('section');
let compteur = 0;

 //nombre aleatoire au debut

 random1 = Math.random() * 11 <<0;
 
 random2 = Math.random() * 11 <<0;
 
 //attribuer les nombres aleatoires aux variables nb1 et nb2
 nb1.innerHTML = random1;
 nb2.innerHTML = random2; 

 //function de verification
 function verifier(){
    //Recuperer le resultat entré par le jouer
    let res = document.querySelector('.res' ).value;
    let Message = document.querySelector('.message');
    if(random1 + random2 ==res){
      Message.classList.add('answerCorrect');
      Message.innerHTML = "Correct";

      //incrementer le compteur
      compteur++;

      //creer d'autres nombres aleatoires
      random1 = Math.random() * 11 <<0;
 
      random2 = Math.random() * 11 <<0;
      
      //attribuer les nombres aleatoires aux variables nb1 et nb2
      nb1.innerHTML = random1;
      nb2.innerHTML = random2;
    }
    else{
       Message.innerHTML = "Game Over";
      Message.classList.add('answerWrong'); 
      section.innerHTML = " ";
      let score = document.querySelector('.score');
      score.innerHTML = `Votre score est de: ${compteur}`;
      let link = document.querySelector('link');
      link.style.display = "block";//afficher le lien pour recommencer
    }
 }