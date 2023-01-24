"use strict";

const container = document.querySelector('.container'),
      innerAll = document.querySelectorAll('.inner');
function functAnimat(){
    let div = document.createElement('div');
    let innerOne = innerAll[0];
    div.style.position = 'absolute';
    div.style.left = `${innerOne.offsetLeft}px`;
    div.style.top = `${innerOne.offsetTop}px`;
    div.style.width = `${innerOne.offsetWidth}px`;
    div.style.height = `${innerOne.offsetHeight}px`;
    div.style.backgroundColor = 'rgba(175, 45, 45, 0.5)';
    div.style.zIndex = '50'
    div.style.borderRadius = '10px'
    div.style.transition = 'all 0.5s ease'
    container.append(div);
    for(let i = 0; i < innerAll.length; i++){
        innerAll[i].addEventListener('mouseover',function(){
            div.style.left = `${innerAll[i].offsetLeft}px`;
            div.style.top = `${innerAll[i].offsetTop}px`;
            div.style.width = `${innerAll[i].offsetWidth}px`;
            div.style.height = `${innerAll[i].offsetHeight}px`;
        })
    }
}
functAnimat();