
function chips(message, timeRemove = 3000, color = 'rgba(0,0,0,0.4') {
  // if(timeRemove === undefined){
  //   timeRemove = 3000;
  // }
  let chips = document.createElement('div');
  chips.classList.add('chips');
  chips.innerHTML = message; 
  if(color){
    chips.style.background = color;
  }
  // document.querySelector('body').appendChild(chips);
  addChips(chips);
  setTimeout(function () {
    deleteChips(chips);
  },timeRemove)
}

function deleteChips(chips) {
  chips.remove();
  let allChips = document.querySelectorAll('.chips-field');
  if(allChips.length == 0){
    document.querySelector('.chips-field').remove();
  }
}

function addChips(chips) {
  let chipsField = document.querySelector('.chips-field');
  if (chipsField) {
    chipsField.appendChild(chips);
  }else{
    let chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    document.querySelector('body').appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}


