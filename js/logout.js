'use strict';
document.addEventListener('DOMContentLoaded', () =>{
  document.querySelector('#logOut').addEventListener('click', () => {
    let c = document.cookie;
    console.log(c);
    let d = new Date();
    d.setTime(d.getTime() - (60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/;`;
    location.reload();
  })
})