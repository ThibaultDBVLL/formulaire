$(document).ready(function(){

    $.ajax({
        type:"GET",
        url:"data.json",
        dataType:"json",
        success: jsonFunction,
        error : function(){
          alert("404 Not Found - Oops something went wrong!");
        }

      });

  var pass = $(.password);
  console.log(password);

  var passLength = ($('#password').length);
  console.log(passLength);

  if (passLength<8 & ($(submit).onclick)){
    console.log("Mot de passe trop court!");
  }


});
