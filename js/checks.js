'use strict';
let month = document.querySelector('#formMonth');
let day = document.querySelector('#formDay');
let year = document.querySelector('#formYear');
let date = new Date();
let yyyy = date.getFullYear();
let email = document.querySelector('#formEmailSingin');
let password = document.querySelector('#formPasswordSingin');
// console.log(yyyy);

let dataArray = [day, month, year];
// console.log(dataArray);

for (let i = 0; i < dataArray.length; i++) {
  dataArray[i].onkeypress = function () {
    if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
      // console.log(event.keyCode);
      return false;
    }
  }
}

month.oninput = function(){
  limitInput(month, 2, 12);
}
day.oninput = function () {
  limitInput(day,2, 31);
}
year.oninput = function () {
  limitInput(year,4, yyyy)
}



function limitInput(inputObj,length, maxNum, minNum = 0) {
  let maxChar = length;
  let maxValue = maxNum;
  let minValue = minNum;
  let input = inputObj;
  if (input.value.length > maxChar) {
    input.value = month.value.substr(0, maxChar);
  }
  if (input.value > maxValue) {
    input.value = maxValue;
  }
  if (input.value < minValue) {
    input.value = minValue;
  }
}




