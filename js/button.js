
// variables
const logInModal = document.querySelector('.logIn');
let emailData = document.querySelector('#formEmail');
let passwordData = document.querySelector('#formPassword');
let incorrectEmailPass = document.createElement('span');
let incorrectEmailPassText = document.createTextNode("Please write down both password and email");
const element = document.querySelector('.passwordGroup');
let emailArray = new Array();

// event listener fnction

logInModal.addEventListener('click', function () {
  if(emailData.value && passwordData.value){
    console.log(emailData.value);
    console.log(passwordData.value);
    if (!document.querySelector('.red')) {
      createEmailPass();
      console.log(incorrectEmailPass);
    }else{
      incorrectEmailPass.style.display = "block";
    }
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
