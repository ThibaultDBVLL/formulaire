$(document).ready(function(){

    var users = [];
    $('form').submit(function(event){
            event.preventDefault();
            console.log("send");
            var nom = $("#nom").val();
            var prenom = $("#prenom").val();
            var login = $("#identifiant").val();
            var password = $("#password").val();
            var genre = $("#genre").val();
            var city = $("#city").val();
            var birth = $("#birthdate").val();
            var mail = $("#mail").val();
            var url = $("#url").val();
            var hobbys = $("#hobbys").val();
            var tel = $("#tel").val();
            var color = $("#color").val();
            var obj ={
                nom : nom,
                prenom : prenom,
                login : login,
                password : password,
                genre : genre,
                city : city,
                birth : city,
                mail : mail,
                url : url,
                hobbys : hobbys,
                tel : tel,
                color : color
            };
            users.push(obj);
            console.log(users);
            localStorage.setItem('users',JSON.stringify(users));
            var user = localStorage.getItem('users');
            var parseUser = JSON.parse(user);
            for(var i = 0; i<parseUser; i++){
                console.log(parseUser[i]);
                $('#app').append(parseUser[i] + nom);
            }
        });

if ($("#password" === "#password".lowercase && $("#submit").click)){
    console.log("veuillez mettre au moins une majuscule !");
}

// var testpassword = /^./.test(str);
// console.log(testpassword);


});
