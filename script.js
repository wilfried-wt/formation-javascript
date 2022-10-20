const user = document.getElementById('utilisateur');
const com = document.getElementById('ordinateur');
const resultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUser ="";
let result = "";
let choixCom = "";


//evenement 'click' sur les button
choixPossibles.forEach(choixPossible => choixPossible.addEventListener ('click', (e) => {
    //recuperation de l'id du bouton cliqué
    choixUser = e.target.id;

    // ajouter l'image qui correspond pour chaque choix
    user.innerHTML = `<img scr="${choixUser}.jpeg" alt="${choixUser}">`;
    choixOrdinateur();
    verification();

}))

function choixOrdinateur(){
    ran = Math.floor(Math.random() * 3) + 1;// generer un nombre aléatoire allant de 1 a 3
    
    //attribuer les nombres a un choix de jeu
    if(ran === 1){
        choixCom = "pierre";
    }

    if(ran === 2){
        choixCom = "papier";
    }
    if(ran === 3){
        choixCom = "ciseaux";
    }
    
    // ajouter l'image qui correspond pour chaque choix
    com.innerHTML = `<img scr="${choixCom}.jpeg" alt="${choixCom}">`; 
}

function verification() {
    if(choixUser == choixCom){
        result = "égalité";
    }
    // cas ou le user perd
    if(choixUser == "pierre" && choixCom == "papier"){
        result = "perdu";
    }
    if(choixUser == "papier" && choixCom == "ciseaux"){
        result = "perdu";
    }
    if(choixUser == "ciseaux" && choixCom == "pierre"){
        result = "perdu";
    }

    //cas ou le user gagne
    if(choixUser == "ciseaux" && choixCom == "papier"){
        result = "gagné";
    }
    if(choixUser == "pierre" && choixCom == "ciseaux"){
        result = "gagné";
    }
    if(choixUser == "papier" && choixCom == "pierre"){
        result = "gagné";
    }

    resultat.innerHTML = result; 
}