'use strict';
const player0el=document.querySelector('.player--0 ')
const player1el=document.querySelector('.player--1 ')
const score1el=document.querySelector('#score--0');
const score2el=document.querySelector('#score--1');
const diceyimg=document.querySelector('.dice');
const currscore0=document.querySelector('#current--0');
const currscore1=document.querySelector('#current--1');
const newbtn=document.querySelector('.btn--new');
const newroll=document.querySelector('.btn--roll');
const newhold=document.querySelector('.btn--hold');

score1el.textContent=0;
score2el.textContent=0;
let currscore=0;
let activeplayer=0;

//to hide the dice image //make a hidden class in css and add that class inside this dice class
//hidding the dice roll to print only when dice is rolled
diceyimg.classList.add('hidden');

newroll.addEventListener('click',function(){
    //generating a random dice roll;
    const dice=Math.trunc(Math.random()*6)+1;
    
    //dispalying a dice which is rolled
    diceyimg.classList.remove('hidden');
    diceyimg.src=`dice-${dice}.png`;
if(dice!==1){
    currscore=currscore+dice;
document.querySelector(`#current--${activeplayer}`).textContent=currscore;
}
else{

    document.querySelector(`#current--${activeplayer}`).textContent=0;
    currscore=0;
    activeplayer=activeplayer===0? 1:0;

  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
}

});