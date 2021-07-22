// sliding images
const images = document.querySelectorAll('.images img')
const intervalTime = 3000
let currentImg = 0;

setInterval(nextImg, intervalTime);

images[currentImg].style.opacity = 1;

function nextImg() {
    images[currentImg].style.opacity = 0;

    currentImg = (currentImg + 1) % images.length

    images[currentImg].style.opacity = 1;
};

// moving text
"use strict"
var words = ['All Trading', 'involves capital', 'only risk capital', 'if you are', 'prepared to lose it'];
var span = $('h1 span');
var i = 0;
var speed = 1250;
setInterval(function(){
    span.animate({
        width:'toggle'
    }, 500);

    if (i++ % 2)
    {
        span.text(words[i / 2 % words.length]);
    }
}, speed);

// contact form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });