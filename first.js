const box= document.getElementById('box');
const track= document.getElementById('track');
const msg= document.getElementById('msg');

let atRight = false;
let moving = false;
let timer;

function toogleBox(){
  const maxLeft = track.clientWidth-box.offsetWidth-10;
  atRight = !atRight;
  box.style.left = (atRight?maxLeft:30)+'px';
  msg.textContent = atRight?'pressed':'pressed';
}

function onMove(){
  if(!moving){
    moving = true;
    toogleBox();
  }
  clearTimeout(timer);
  timer = setTimeout(()=>moving=false,200);  
}

window.addEventListener('mousemove',onMove);
window.addEventListener('touchmove',onMove);

