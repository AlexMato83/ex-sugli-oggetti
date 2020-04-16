// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10 
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. 

$(document).ready(function(){

  var palla = {
    "nome": "palla",
    "peso": 10
  }
 console.log(palla);
 var pesoInserito = parseInt(prompt("inserisci peso"));
console.log(pesoInserito);
palla.peso = pesoInserito;
console.log(palla);

});
