let bottom = document.querySelector('#bottom');
let bubble = document.querySelector('.bubble');

function makeBubble(){
    let template = ``;
    for(let i=0;i<50;i++){
        var randomNumber = Math.floor(Math.random()*10);
        template = `<div class="bubble">${randomNumber}</div>`
        bottom.innerHTML += template;
    }
    
};
makeBubble();

