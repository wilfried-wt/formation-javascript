var operation = new Array();
 operation["add"] = function(x,y){ return x+y; };
 operation["soustr"] = function(x,y){ return x-y; };
 operation["mult"] = function(x,y){ return x*y; };
 operation["div"] = function(x,y){ return x/y; };
 operation["moy"] = function(x,y){ return (x+y)/2; };
 
 var a = parseFloat( prompt("Premier nombre ?") );
 var b = parseFloat( prompt("Deuxieme nombre ?") );
 var fct = prompt("Fonction a appliquer ?");
 var resultat = operation[fct](a,b);
 alert("Resultat : " + resultat);