

$(document).ready(function(){
  // creo l'oggetto "palla"
  var palla = {
    "nome": "palla",
    "peso": 10
  }
  console.log(palla);
  // salvo il peso inserito dall'utente e lo sostituisco a quello originale
  palla.peso = $("#insertWeight").val();
  console.log(palla);
  $("#bottone").click(function(){
    // se all'interno dell'input c'è un contenuto
    if($("#insertWeight").val() != ""){
      // creo dinamicamente un div per il titolo
      $(".nome").prepend("<div>Questo è l'oggetto in questione:</div>")
      // appendo al div esistente il nome
      $(".nome").append("nome: " + palla.nome)
      // appendo al div esistente il peso
      $(".peso").append("peso: " + palla.peso)
    }

  })




  // $("body").append(palla);



});
