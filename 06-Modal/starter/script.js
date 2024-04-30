'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnsclosemodal=document.querySelector('.close-modal');
const btnsopenmodal=document.querySelectorAll('.show-modal');

console.log(btnsopenmodal);

for(let i=0;i<btnsopenmodal.length;i++){
    btnsopenmodal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};

btnsclosemodal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

modal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
});

let add=document.createElement('h1');

//add.attributes="part2";
add.className=('harry');
add.id="part1";
add.title="createing attribute";
add.setAttribute("href","link");
add.textContent="studied from code with harry";

console.log(add);
console.log(add.getAttribute("href"));

document.addEventListener('keydown',function(x){
    console.log(x.key);

    if(x.key=='Enter'){
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
}});

