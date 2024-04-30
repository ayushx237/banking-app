'use strict';


let value=Math.trunc(Math.random()*20)+1;


let changed=20;R
let highsce=0;

document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   

   if (!guess){
document.querySelector('.message').textContent="search a no.";


   }

 else if (guess===value){
    
    document.querySelector('.message').textContent="you got the right answer HUURRRAAAAYYYYY";
    document.querySelector('.number').textContent=value;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='60rem';
    document.querySelector('.number').style.fontSize='10rem';

    if(changed>highsce){
        highsce=changed;
        document.querySelector('.highscore').textContent=highsce;
    }
}

 else if(guess<value){
    if(changed>1){
    document.querySelector('.message').textContent="increase your no.";
changed--;
document.querySelector('.score').textContent=changed;}
else{

document.querySelector('.message').textContent="you loose the game";
document.querySelector('.score').textContent=0;

}
 }

else if(guess>value) {
    if(changed>1){
    document.querySelector('.message').textContent="decrease your number";
    changed--;
    document.querySelector('.score').textContent=changed;}

else{

    document.querySelector('.message').textContent="you loose the game";
    document.querySelector('.score').textContent=0;
    
    }
    
}

   

});

//selecting #again button and update it to restart the game!!!

document.querySelector('.again').addEventListener('click',function(){

//again button updation
changed=20;
value=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent="Start guessing...";
document.querySelector('.score').textContent=changed;
document.querySelector('.guess').value="";
document.querySelector('.number').textContent="?";


document.querySelector('body').style.backgroundColor='red';
document.querySelector('.number').style.width='15rem';
document.querySelector('.number').style.fontSize='4rem';

})