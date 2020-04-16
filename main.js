

$(document).ready(function(){
  // creo l'oggetto "palla"
  var palla = {
    "nome": "palla",
    "peso": 10
  }
  console.log(palla);
  // salvo il peso inserito dall'utente e lo sostituisco a quello originale
  palla.peso = parseInt(prompt("inserisci il peso"))
  console.log(palla);
});
