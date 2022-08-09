
function conversion(unite1, taux, unite2)
{
 var valeur = prompt("Entrez la valeur à convertir, en " + unite1);
 var resultat = valeur * taux;
 alert(valeur + ' '  + unite1 + '\n'  + resultat + ' '  + unite2);
}