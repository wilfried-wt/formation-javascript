function nb_aleatoire(min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}
var nd = 0, i = 0;
var nba = 0;
nba = nb_aleatoire(1, 100);
//alert("le nombre généré est "+ nba)
nd = prompt("devinez le nombre choisi entre 1 et 100");
//alert("le nombre entré est " + nd);
do {

    if (nd > nba)
        nd = prompt("c'est moins");
    else if (nd < nba)
        nd = prompt("c'est plus");
        i++;
}
while (nd != nba);
alert("t'as gagné en " + i + "tentatives");