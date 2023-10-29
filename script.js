'use strict';
let simpleBookmarking = document.querySelector('.simple-bookmarking');
let speedyBsearching = document.querySelector('.speedy-bsearching');
let easySharing = document.querySelector('.easy-sharing');
let tag1 = document.querySelector('.tag-1');
let tag2 = document.querySelector('.tag-2');
let tag3 = document.querySelector('.tag-3');
let tags = document.querySelectorAll('.tags');
let opening = document.querySelectorAll('.opening')


simpleBookmarking.addEventListener('click', ()=>{
    opening.forEach((c) => c.classList.remove("activ"));
    simpleBookmarking.classList.add('activ');

    tags.forEach((t) => t.classList.remove("tag-activ"));
    tag1.classList.add('tag-activ');
})
speedyBsearching.addEventListener('click', ()=>{
    opening.forEach((c) => c.classList.remove("activ"));
    speedyBsearching.classList.add('activ');

    tags.forEach((t) => t.classList.remove("tag-activ"));
    tag2.classList.add('tag-activ');
})
easySharing.addEventListener('click', ()=>{
    opening.forEach((c) => c.classList.remove("activ"));
    easySharing.classList.add('activ');

    tags.forEach((t) => t.classList.remove("tag-activ"));
    tag3.classList.add('tag-activ');
})


let questionsInfo = document.querySelectorAll('.question-info');

const pastga = document.querySelectorAll('.fa-angle-down');
const tepaga = document.querySelectorAll('.fa-angle-up');

questionsInfo.forEach((question, index) => {
  const pastgaBtn = pastga[index];
  const tepagaBtn = tepaga[index];

  pastgaBtn.addEventListener('click', () => {
    question.style.display = 'inline-block';
    tepagaBtn.style.display = 'inline-block';
    pastgaBtn.style.display = 'none';

    questionsInfo.forEach((q, i) => {
      if (i !== index) {
        q.style.display = 'none';
        tepaga[i].style.display = 'none';
        pastga[i].style.display = 'inline-block';
      }
    });
  });

  tepagaBtn.addEventListener('click', () => {
    question.style.display = 'none';
    pastgaBtn.style.display = 'inline-block';
    tepagaBtn.style.display = 'none';
  });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  const emailInput = document.getElementById("email");
  
  emailInput.addEventListener("change", function() {
    const email = emailInput.value;
    const isValid = validateEmail(email);
    let input = document.querySelector('.input');
  
    if (isValid) {
        document.querySelector('.input-p').style.display = 'none';
        document.querySelector('.error').style.zIndex = '-2';
        input.style.padding = '0px';
        input.style.background = 'transparent';
    } else {
        input.style.background = '#FA5959';
        input.style.borderRadius = '5px';
        input.style.padding = '2px';
        document.querySelector('.input-p').style.display = 'flex';
        document.querySelector('.error').style.zIndex = '2';
    }
  });