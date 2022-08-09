// initialisation
var zCode = "<liste>\n";
var saisie;
// boucle
while(saisie = prompt("Contenu de la puce ?"))
 zCode += "<puce>" + saisie + "</puce>\n";
// finitions
if(zCode == '<liste>\n' )
 zCode = '' ;
else
 zCode += "</liste>";
alert(zCode); 