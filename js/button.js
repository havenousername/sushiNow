
// variables
const logInModal = document.querySelector('.logIn');
let emailData = document.querySelector('#formEmail');
let passwordData = document.querySelector('#formPassword');
let incorrectEmailPass = document.createElement('span');
let incorrectEmailPassText = document.createTextNode("Please write down both password and email");
const element = document.querySelector('.passwordGroup');
let emailArray = new Array();
// Local storage
localStorage.setItem('Email', 'andrei.cristea997@gmail.com');
localStorage.setItem('Password', 'teslamodelx1');
console.log(localStorage.Email);

// event listener fnction

logInModal.addEventListener('click', function () {
  if(emailData.value && passwordData.value){
    console.log(emailData.value);
    console.log(passwordData.value);
    // for (let i = 0;i < emailData.value.length; i++) {
    //   emailArray.push(emailData.value[i]);
    // }
    // for(let i = 0; i < emailArray.length; i++){
    //   if (emailArray[i] === "@") {
    //     let temp = i;
    //     if(temp >= emailArray.length - 1){
    //       console.log("Dont try to fool");
    //     }else{
    //       console.log("You wrote down email and password!");
    //     }
    //   }
    // }
    if(emailData.value === localStorage.Email && passwordData.value === localStorage.Password){
      console.log('Yeah. Local storage will let you in.');
    }else{
      if (!document.querySelector('.red')) {
        createEmailPass();
        console.log(incorrectEmailPass);
        console.log('Please write down both password and email');
      }else{
        incorrectEmailPass.style.display = "block";
      }
      incorrectEmailPass.removeChild(incorrectEmailPass.childNodes[0]);
      incorrectEmailPass.appendChild(document.createTextNode('Email or password is incorrect. Please try again.'));

      console.log('Email or password is incorrect. Please try again.');
    }
    emailArray.splice(0, emailArray.length);
  }
  else {
    // 
    if(!document.querySelector('.red')){
      createEmailPass();
      console.log(incorrectEmailPass);
      console.log('Please write down both password and email');
    }else{
      incorrectEmailPass.style.display = "block";
    }
    incorrectEmailPass.removeChild(incorrectEmailPass.childNodes[0]);
    incorrectEmailPass.appendChild(document.createTextNode('Please write down both password and email'));
  }
})

emailData.addEventListener('click', function () {
  let deleteElem = document.querySelector('.red');
  console.log(deleteElem);
  if(deleteElem !== null){
    deleteElem.style.display = 'none';
  }
})
passwordData.addEventListener('click', function () {
  let deleteElem = document.querySelector('.red');
  console.log(deleteElem);
  if (deleteElem !== null) {
    deleteElem.style.display = 'none';
  }
})

function createEmailPass() {
  incorrectEmailPass.appendChild(incorrectEmailPassText);
  element.appendChild(incorrectEmailPass);
  incorrectEmailPass.classList.add('red');
  incorrectEmailPass.style.display = 'block';
  incorrectEmailPass.style.fontSize = '0.8rem';
}

// saving data:
