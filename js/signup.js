document.querySelector('#signin-modal').onclick = function (event) {
  let name = document.querySelector('#formName').value;
  let surname = document.querySelector('#formSurname').value;
  let email = document.querySelector('#formEmailSingin').value;
  let password = document.querySelector('#formPasswordSignin').value;
  let day = document.querySelector('#formDay').value;
  let month = document.querySelector('#formMonth').value;
  let year = document.querySelector('#formYear').value;
  let birthday = `${day}-${month}-${year}`;
  let sex = document.querySelectorAll('.sex');
  // Prevent browser reload
  event.preventDefault();
  // Variables
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      sex = sex[i].value;
      break;
    }
  }
  // console.log(document.querySelector('#formDay'));
  // Prepare data for sending
  let data = {
    "name": name,
    "surname": surname,
    "email" : email,
    "password" : password,
    "birthday" : birthday,
    "sex" : sex,
  }
  // signUp function 
  const signUp = (result) => {
    // console.log(result);
    if(result == 2){
      chips("Please fill in all the fields to continue", 2000, "#f2785c");
    }else if(result == 1){
      chips("You can now login", 2000, "#B1B5BE");
      hideModal();
    }else if(result == 3){
      chips("Please enter a valid email", 2000, "#f2785c");
    }else if (result == 4) {
      chips("Please enter a valid password", 2000, "#f2785c");
    }
    else{
      chips("Fatal error happened. Please try later.", 2000, "#f2785c");
    }
  }
  // AJAX request
  ajax('core/signup.php', 'POST', signUp, data);
}
