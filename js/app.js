$(document).ready(function(){

    $.ajax({
        type:"GET",
        url:"data.json",
        dataType:"json",
        success: jsonFunction,
        error : function(){
          alert("Error 404 - Autodestruction");
        }

      });

  $("#submit").click(function(){
      console.log('submit!');
    });
  if (pass === pass.lowercase){
    console.log('');
  }


  var passLength = ($('#password').length);
  console.log(passLength);

  if (passLength<8 & ($("#submit").click)){
    console.log("Mot de passe trop court!");
  }

 localStorage.setItem(prenom, );


var prenom = $("#prenom").value;

});
