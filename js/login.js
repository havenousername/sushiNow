'use strict';
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#logIn').addEventListener('click', (event) =>{
    event.preventDefault();
    let pass = document.querySelector('#formPassword').value;
    let email = document.querySelector('#formEmail').value;
    
    let data = {
      "pass" : pass,
      "email" : email,
    }

    ajax('../core/login.php', 'POST', logIn, data);

    function logIn(result) {
      console.log(result);
      if (result == 2) {
        chips("Please fill in all the fields to continue", 2000, "#f2785c");
        // alert('Заполни поля');
      } else if (result == 0) {
        chips("You need to signup first", 2000, "#f2785c");
        // alert('Тебя нет в списке. Зарегайся');
      } else {
        result = JSON.parse(result);
        var d = new Date();
        d.setTime(d.getTime() + (10 * 60 * 1000));
        var expires = d.toUTCString()
        document.cookie = `email= ${result.email}; expires=${expires}; path=/;`;
        location.href = "cabinet.php";
      }
      }
    })
  })