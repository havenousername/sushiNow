document.addEventListener('DOMContentLoaded', () => {
  let sex = document.querySelectorAll('.sex');
  let labelOne = document.querySelector('.label-one');
  let labelTwo = document.querySelector('.label-two');
  // console.log(labelOne);
  labelTwo.style.transition = 'all 0.4s';
  labelOne.style.transition = 'all 0.4s';
  labelOne.style.color = '#f2785c';
  for (let i = 0; i < sex.length; i++) {
    sex[i].addEventListener('click', () => {
      if (sex[i].value == labelOne.innerHTML) {
        labelOne.style.color = '#f2785c';
        labelTwo.style.color = 'rgba(0,0,0,0.3)';
      } else if (sex[i].value == labelTwo.innerHTML) {
        labelTwo.style.color = '#f2785c';
        labelOne.style.color = 'rgba(0,0,0,0.3)';
      }
    })
  }
})

