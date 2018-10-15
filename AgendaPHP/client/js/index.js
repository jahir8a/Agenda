$(function(){
  var l = new Login();
})


class Login {
  constructor() {
    sessionStorage.removeItem("username");
    this.createUsers();
    this.submitEvent()
  }

  submitEvent(){
    $('form').submit((event)=>{
      event.preventDefault()
      this.sendForm()
    })
  }

  createUsers(){
    $.ajax({
      url: '../server/create_init_users.php',
      dataType: "json",
      cache: false,
      processData: false,
      contentType: false,
      data: {},
      type: 'GET',
      success: function(php_response){
        if (php_response.msg!=0) {
          alert(php_response.msg)
        }else{
          console.log("ya se registraron los usuarios");
        }
      },
      error: function(){
        alert("error en la comunicación con el servidor");
      }
    })
  }

  sendForm(){
    let form_data = new FormData();
    form_data.append('username', $('#user').val())
    form_data.append('password', $('#password').val())
    $.ajax({
      url: '../server/check_login.php',
      dataType: "json",
      cache: false,
      processData: false,
      contentType: false,
      data: form_data,
      type: 'POST',
      success: function(php_response){
        if (php_response.msg == "concedido") {
          sessionStorage.setItem("username", $('#user').val());
          window.location.href = 'main.html';
        }else {
          alert(php_response.msg);
        }
      },
      error: function(){
        alert("error en la comunicación con el servidor");
      }
    })
  }
}
